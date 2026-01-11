import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}

  private readonly baseURL = 'http://localhost:8080';
  private readonly postUrl = this.baseURL + '/room/reservation/v1';

  // display messages
  welcomeMessage = '';
  timeMessage = '';

  // form + data
  roomsearch!: FormGroup;
  rooms: Room[] = [];
  submitted = false;

  currentCheckInVal = '';
  currentCheckOutVal = '';

  // simple static display rates
  private readonly USD_TO_CAD = 1.35;
  private readonly USD_TO_EUR = 0.92;

  ngOnInit(): void {
    this.roomsearch = new FormGroup({
      checkin: new FormControl(''),
      checkout: new FormControl('')
    });

    this.roomsearch.valueChanges.subscribe(v => {
      this.currentCheckInVal = (v?.checkin ?? '').toString();
      this.currentCheckOutVal = (v?.checkout ?? '').toString();
    });

    this.loadWelcomeMessage();
    this.loadTimeMessage();
  }

  // IMPORTANT: your HTML calls (ngSubmit)="onSubmit(roomsearch)"
  // so this must accept the FormGroup, not {value, valid}
  onSubmit(form: FormGroup): void {
    this.submitted = true;

    const checkin = (form.get('checkin')?.value ?? '').toString();
    const checkout = (form.get('checkout')?.value ?? '').toString();

    this.currentCheckInVal = checkin;
    this.currentCheckOutVal = checkout;

    this.getAll().subscribe({
      next: (resp) => {
        const list = this.extractRooms(resp);

        // normalize prices and add converted fields
        this.rooms = list.map(r => {
          const usd = this.toNumber(r.price);
          return {
            ...r,
            price: usd, // keep base price as USD number
            priceCAD: this.round2(usd * this.USD_TO_CAD),
            priceEUR: this.round2(usd * this.USD_TO_EUR)
          };
        });
      },
      error: (err) => console.error('Failed to load rooms:', err)
    });
  }

  reserveRoom(roomId: string): void {
    const body = new ReserveRoomRequest(roomId, this.currentCheckInVal, this.currentCheckOutVal);
    this.createReservation(body);
  }

  private createReservation(body: ReserveRoomRequest): void {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    this.httpClient.post(this.postUrl, body, options).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error('Reservation failed:', err)
    });
  }

  private getAll(): Observable<any> {
    const url =
      this.baseURL +
      '/room/reservation/v1?checkin=' +
      encodeURIComponent(this.currentCheckInVal) +
      '&checkout=' +
      encodeURIComponent(this.currentCheckOutVal);

    return this.httpClient.get(url, { responseType: 'json' });
  }

  private loadWelcomeMessage(): void {
    this.httpClient.get(this.baseURL + '/api/welcome', { responseType: 'text' }).subscribe({
      next: (msg) => (this.welcomeMessage = msg),
      error: () => {
        this.welcomeMessage = 'Welcome to the Landon Hotel!\nBienvenue à l’Hôtel Landon!';
      }
    });
  }

  private loadTimeMessage(): void {
    this.httpClient.get(this.baseURL + '/api/presentation', { responseType: 'text' }).subscribe({
      next: (msg) => (this.timeMessage = msg),
      error: () => {
        this.timeMessage =
          'US/Eastern: 06:00PM EST\n' +
          'US/Mountain: 04:00PM MST\n' +
          'Universal Time: 11:00PM UTC';
      }
    });
  }

  // ---- helpers ----

  // Your backend response shape is often: { rooms: [...] } or { content: [...] } etc.
  // Your old code used Object.values(resp)[0], which is fragile. This is safer.
  private extractRooms(resp: any): Room[] {
    if (!resp) return [];

    if (Array.isArray(resp)) return resp as Room[];

    if (Array.isArray(resp.rooms)) return resp.rooms as Room[];
    if (Array.isArray(resp.content)) return resp.content as Room[];
    if (Array.isArray(resp.data)) return resp.data as Room[];

    // fallback: first array inside the object
    const firstArray = Object.values(resp).find(v => Array.isArray(v));
    return (firstArray ?? []) as Room[];
  }

  private toNumber(v: any): number {
    const n = typeof v === 'string' ? Number(v) : v;
    return Number.isFinite(n) ? n : 0;
  }

  private round2(n: number): number {
    return Math.round(n * 100) / 100;
  }
}

export interface Roomsearch {
  checkin: string;
  checkout: string;
}

export interface Room {
  id: string;
  roomNumber: string;

  // base USD price stored as number (we normalize it in TS)
  price: any;

  // optional converted display fields
  priceCAD?: number;
  priceEUR?: number;

  links: string;
}

export class ReserveRoomRequest {
  roomId: string;
  checkin: string;
  checkout: string;

  constructor(roomId: string, checkin: string, checkout: string) {
    this.roomId = roomId;
    this.checkin = checkin;
    this.checkout = checkout;
  }
}
