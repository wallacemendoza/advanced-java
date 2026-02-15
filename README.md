# Advanced Java - Multithreaded Spring Application

[![Java](https://img.shields.io/badge/Java-53.0%25-orange)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Framework-green)](https://spring.io/projects/spring-boot)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)
[![WGU](https://img.shields.io/badge/WGU-D387-purple)](https://www.wgu.edu/)

## 📋 Project Overview

This repository contains an enterprise-level Spring Boot application demonstrating advanced Java development concepts including multithreading, internationalization, cloud deployment, and containerization. Built as part of Western Governors University's D387 Advanced Java course, this project showcases production-ready software engineering practices.

**Course**: D387 – Advanced Java  
**Institution**: Western Governors University  
**Focus**: Multithreaded object-oriented programming with Spring Framework and cloud deployment

⚠️ **ACADEMIC INTEGRITY NOTICE**  
This repository contains academic coursework. In accordance with WGU's Student Code of Conduct:
- **DO NOT** distribute or publicly post solutions
- **DO NOT** copy code for your assignments
- **Keep all forks PRIVATE**

Please refer to WGU's Student Code of Conduct and Ethical Expectations for College of IT Students.

## 🌿 Branch Structure

This repository uses a **branching strategy** to separate base template from working implementation:

### 📂 Available Branches

| Branch | Status | Description | Use Case |
|--------|--------|-------------|----------|
| **`main`** | 📦 Template | Base starter code provided by WGU | Reference, starting point |
| **`working_branch`** | ✅ Production | Complete implementation with all features | Review completed work, deployment |

### 🔀 Branch Navigation

#### **Main Branch** (You are here)
- Contains the **original starter template** from WGU
- Base Spring Boot application structure
- Angular frontend scaffold
- Use this as your **starting point** for development

#### **Working Branch** (Production Ready)
👉 **[Switch to working_branch →](https://github.com/wallacemendoza/advanced-java/tree/working_branch)**

Features implemented in `working_branch`:
- ✅ Multithreaded language translation
- ✅ Time zone display across multiple zones
- ✅ Currency exchange integration
- ✅ Docker containerization
- ✅ Cloud deployment configuration
- ✅ Complete documentation
- ✅ Full commit history

**To view the complete implementation:**
```bash
git checkout working_branch
```

## 🎯 Project Goals

This project involves modifying a Spring-based, object-oriented application to:

1. **Add Multithreaded Functionality**
   - Implement concurrent processing for language translation
   - Create thread-safe services for time zone conversions
   - Build parallel processing for currency exchange

2. **Internationalization (i18n)**
   - Support multiple languages (English, French, Spanish)
   - Dynamic language switching in the UI
   - Locale-specific message resources

3. **Time Zone Management**
   - Display current time in different time zones
   - Automatic timezone conversions
   - Real-time updates

4. **Currency Exchange**
   - Integrate currency conversion API
   - Real-time exchange rate updates
   - Multi-currency support

5. **Cloud Deployment**
   - Build Docker image of the Spring application
   - Containerize the multithreaded application
   - Deploy to cloud infrastructure (AWS/GCP/Azure)

## 🛠️ Technology Stack

### Backend
- **Java** (53.0%) - Core programming language
- **Spring Boot** - Application framework
- **Spring MVC** - Web framework for REST APIs
- **Maven** - Build automation and dependency management

### Frontend
- **Angular** - Single-page application framework
- **TypeScript** (21.7%) - Type-safe JavaScript
- **HTML5** (22.3%) - Semantic markup
- **JavaScript** (2.8%) - Client-side scripting
- **CSS3** (0.2%) - Styling

### DevOps
- **Docker** - Containerization
- **Git** - Version control
- **IntelliJ IDEA** - Development environment

## 📁 Base Project Structure

```
/ (root)
├── src/                                # Source code directory
│   ├── main/
│   │   ├── java/                       # Java backend code
│   │   ├── resources/                  # Configuration files
│   │   └── webapp/                     # Angular frontend
│   └── test/                           # Test suite
├── .mvn/wrapper/                       # Maven wrapper files
├── mvnw                                # Maven wrapper script (Unix)
├── mvnw.cmd                            # Maven wrapper script (Windows)
├── pom.xml                             # Maven project configuration
├── .gitignore                          # Git ignore rules
└── README.md                           # This file
```

## 🚀 Getting Started

### Prerequisites
- **JDK 11+** - Java Development Kit
- **Maven 3.6+** - Build tool (or use included wrapper)
- **Node.js 14+** and npm - For Angular frontend
- **IntelliJ IDEA 2022.3.2+** - Recommended IDE
- **Git** - Version control
- **Docker** - For containerization (optional)

### Clone the Repository

#### Using IntelliJ IDEA
1. Ensure IntelliJ is installed via [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)
2. Use version **2022.3.2** or higher
3. Click **Clone** button on GitHub
4. Select **IntelliJ IDEA (HTTPS)**
5. IntelliJ will open with a clone prompt
6. Choose your directory and click **Clone**
7. Enter your credentials when prompted

#### Using Command Line
```bash
# Clone the repository
git clone https://github.com/wallacemendoza/advanced-java.git
cd advanced-java

# Verify you're on main branch
git branch

# To switch to working branch later
git checkout working_branch
```

### Build and Run (Main Branch)

#### Using Maven Wrapper
```bash
# On Unix/Mac/Linux
./mvnw clean install
./mvnw spring-boot:run

# On Windows
mvnw.cmd clean install
mvnw.cmd spring-boot:run
```

#### Using IntelliJ IDEA
1. Open project in IntelliJ
2. Wait for Maven to download dependencies
3. Locate the main Spring Boot application class
4. Right-click → **Run**

The base application will start on `http://localhost:8080`

### Creating Your Development Branch

#### Using Git Command Line
```bash
# Create and switch to your own development branch
git checkout -b my-development-branch

# Start implementing features
# Make commits as you progress
git add .
git commit -m "Implemented multithreading feature"
```

#### Using IntelliJ IDEA
1. Go to **Git** in the top toolbar
2. Select **New Branch**
3. Name your branch (e.g., `my-dev-branch`)
4. Ensure **Checkout branch** is selected
5. Click **Create**

## 📚 Assignment Instructions

For this assessment, you will:

1. **Modify the Spring Application**
   - Add multithreaded language translation functionality
   - Implement time zone display features
   - Integrate currency exchange capabilities

2. **Ensure Thread Safety**
   - Use proper synchronization mechanisms
   - Implement thread-safe collections
   - Handle concurrent requests properly

3. **Build Docker Image**
   - Create a Dockerfile
   - Build the application image
   - Test containerized deployment

4. **Deploy to Cloud**
   - Choose a cloud platform (AWS, GCP, or Azure)
   - Deploy your Docker container
   - Document the deployment process

**For specific task instructions and requirements, refer to the course page.**

## 📖 Supplemental Resources

### How to Clone Using Git & IntelliJ

1. **Ensure Git is installed** on your system
2. **Install IntelliJ** using [Toolbox](https://www.jetbrains.com/toolbox-app/)
3. **Use version 2022.3.2** or later
4. Click **Clone** button on GitHub repository
5. Use **IntelliJ IDEA (HTTPS)** option
6. IntelliJ will prompt to clone the project
7. Save in a safe location and press **Clone**
8. Enter your **WGU credentials** when prompted

### How to Create a Branch and Start Development

#### GitLab Method
1. Press the **+** button near your branch name
2. In dropdown, select **New branch**
3. Create a name for your branch
4. Click **Create Branch**

#### IntelliJ Method
1. Go to **Git** in the top toolbar
2. Select **New branch** option
3. Create a name for the branch
4. Ensure **checkout branch** is selected
5. Click **Create**
6. Add commit message and push to repository

## 🎓 Learning Objectives

By completing this project, you will demonstrate:

- **Advanced Java Programming**: Multithreading, concurrency, thread safety
- **Spring Framework Expertise**: Spring Boot, Spring MVC, dependency injection
- **RESTful API Development**: Controller design, HTTP methods, JSON
- **Frontend Integration**: Connecting Angular with Spring backend
- **Containerization**: Docker images, container orchestration
- **Cloud Deployment**: Infrastructure as Code, cloud services
- **Software Architecture**: Layered design, separation of concerns
- **Build Automation**: Maven dependency management
- **Version Control**: Git branching, commits, collaboration

## 📞 Support

### For WGU Students
If you need additional support:
- Navigate to the **course page**
- Reach out to your **course instructor**
- Use **course chatter** for peer discussions
- Review **course materials** and resources

### Technical Resources
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Docker Documentation](https://docs.docker.com/)
- [Angular Documentation](https://angular.io/docs)
- [Maven Guide](https://maven.apache.org/guides/)

## 💼 Future Use

**Portfolio Opportunity**: This project demonstrates enterprise-level software development skills. Use it to:
- Showcase in your resume portfolio
- Highlight multithreading expertise
- Demonstrate cloud deployment knowledge
- Exhibit full-stack development capabilities
- Show understanding of containerization

Keep this project as evidence of your advanced Java and Spring Framework proficiency for:
- Job applications
- Career advancement
- Professional portfolio
- Educational achievements

## ⚠️ Important Reminders

### Academic Integrity
- This repository contains **academic coursework**
- **DO NOT distribute or publicly post solutions**
- **Make all forks with solution code PRIVATE**
- Violating academic integrity policies can result in serious consequences
- Refer to **WGU Student Code of Conduct** for specifics

### Ethical Expectations
- Complete your own work independently
- Use this repository as a **reference only**
- Do not share solutions with other students
- Maintain the integrity of the assessment

## 📊 What's Different Between Branches?

| Feature | Main Branch | Working Branch |
|---------|-------------|----------------|
| Status | Template/Starter | Production Ready |
| Multithreading | ❌ Not implemented | ✅ Fully implemented |
| i18n Support | ❌ Basic setup | ✅ Multiple languages |
| Time Zones | ❌ Not implemented | ✅ Fully functional |
| Currency Exchange | ❌ Not implemented | ✅ Integrated |
| Docker | ❌ No Dockerfile | ✅ Complete containerization |
| Documentation | ⚠️ Basic | ✅ Comprehensive |
| Deployment Guide | ❌ None | ✅ Detailed instructions |
| Commit History | 📦 5 commits | ✅ 15+ commits |

## 🔄 Next Steps

1. **Review the starter code** in `main` branch
2. **Plan your implementation** strategy
3. **Create a development branch** for your work
4. **Refer to course materials** for specific requirements
5. **Implement features** one at a time
6. **Test thoroughly** before deployment
7. **Document your work** as you progress
8. **Deploy to cloud** and test in production

### Want to See the Complete Implementation?

👉 **[View the completed project on working_branch](https://github.com/wallacemendoza/advanced-java/tree/working_branch)**

```bash
# Switch to see the complete implementation
git checkout working_branch
```

## 👤 Author

**Wallace Mendoza**

- GitHub: [@wallacemendoza](https://github.com/wallacemendoza)
- Course: D387 - Advanced Java
- Institution: Western Governors University

## 📄 License

This project is for educational purposes as part of WGU coursework. All rights reserved.

---

**🎓 Good luck with your Advanced Java course!**

*For the complete implementation with all features, documentation, and deployment instructions, switch to the `working_branch`.*

---

**Last Updated**: February 15, 2026  
**Branch**: main (Base Template)  
**Status**: 📦 Starter Code
