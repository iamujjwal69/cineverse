<div align="center">

# 🎬 CineVerse — Movie Booking Platform

### A Full-Stack Movie Booking Application with Microservices Architecture

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-CineVerse-E50914?style=for-the-badge)](https://cineverse-ipsj.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-iamujjwal69-181717?style=for-the-badge&logo=github)](https://github.com/iamujjwal69/cineverse)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-7-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

<br/>

*Book movie tickets with real-time seat selection, multi-city theatre support, and a seamless booking experience — powered by a production-grade microservices backend.*

</div>

---

## 🌐 Live Demo

> ### 🔗 **[Click here to visit CineVerse Live →](https://cineverse-ipsj.onrender.com)**

| Service | Live URL | Status |
|---------|----------|--------|
| 🎬 **Frontend** | [cineverse-ipsj.onrender.com](https://cineverse-ipsj.onrender.com) | ✅ Live |
| 🔀 **API Gateway** | [cineverse-gateway-cv6o.onrender.com](https://cineverse-gateway-cv6o.onrender.com) | ✅ Live |
| 🔐 **Auth Service** | [cineverse-auth-2554.onrender.com](https://cineverse-auth-2554.onrender.com) | ✅ Live |

> **💡 Tip:** If the backend services are sleeping (free tier), the app automatically falls back to **demo mode** with 100+ mock movies. Use any email/password to login.

---

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Running Locally](#-running-locally)
- [API Documentation](#-api-documentation)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎫 For Movie-Goers
| Feature | Description |
|---------|-------------|
| **Browse Movies** | Explore 100+ movies with search, genre & category filters, and sorting |
| **Multi-City Support** | Switch between Chandigarh, Delhi NCR, Mumbai, and Bengaluru |
| **Theatre Selection** | Choose from real theatres (PVR, Cinepolis, INOX) with multiple showtimes |
| **Seat Booking** | Interactive seat map with real-time availability (8 rows × 12 seats) |
| **Booking History** | View all past & upcoming bookings from the dashboard |
| **User Authentication** | Register, Login, Logout with JWT-based session management |
| **Password Recovery** | Forgot password & OTP-based reset flow |
| **Responsive UI** | Fully responsive design — works on mobile, tablet, and desktop |

### 🛡️ For Admins
| Feature | Description |
|---------|-------------|
| **Movie Management** | Add, edit, and delete movies (CRUD) |
| **Platform Analytics** | View platform stats and user activity |
| **User Management** | Manage registered users |

### 🏢 For Theatre Owners
| Feature | Description |
|---------|-------------|
| **Theatre Management** | Manage theatre details, screens, and show schedules |
| **Revenue Tracking** | Track booking revenue and performance |

---

## 🏗️ Architecture

CineVerse follows a **microservices architecture** with an API Gateway pattern:

```
┌──────────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                         │
│                    React 18 + Vite + React Router                │
│                          Port: 3000                              │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                    API GATEWAY (Spring Cloud)                     │
│               JWT Validation · CORS · Route Proxying             │
│                          Port: 8080                              │
└─────────┬───────────────────┬───────────────────┬────────────────┘
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌──────────────────────┐
│  AUTH SERVICE   │ │  MOVIE SERVICE  │ │  BOOKING SERVICE     │
│  Spring Boot    │ │  Spring Boot    │ │  Spring Boot         │
│  Port: 8081     │ │  Port: 8082     │ │  Port: 8083          │
│                 │ │                 │ │                      │
│  • Register     │ │  • CRUD Movies  │ │  • Create Booking    │
│  • Login/JWT    │ │  • Search       │ │  • Seat Locking      │
│  • Password     │ │  • Reviews      │ │  • Confirm/Cancel    │
│    Reset (OTP)  │ │  • Filters      │ │  • Booking History   │
└────────┬────────┘ └───────┬─────────┘ └──┬──────────┬────────┘
         │                  │              │          │
         ▼                  ▼              ▼          ▼
┌──────────────┐   ┌──────────────┐ ┌─────────┐ ┌──────────┐
│  PostgreSQL  │   │   MongoDB    │ │  Redis  │ │ RabbitMQ │
│    (Auth &   │   │  (Movie      │ │ (Cache &│ │ (Async   │
│   Bookings)  │   │   Catalog)   │ │  Locks) │ │  Events) │
└──────────────┘   └──────────────┘ └─────────┘ └──────────┘
```

### Why Microservices?

- **Independent Scaling** — Scale the booking service during peak hours without touching auth
- **Technology Diversity** — PostgreSQL for relational data, MongoDB for flexible movie catalog
- **Fault Isolation** — If the movie service goes down, auth and bookings still work
- **Independent Deployment** — Deploy and update services independently via Docker

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Component Library | 18.2 |
| **Vite** | Build Tool & Dev Server | 5.x |
| **React Router** | Client-Side Routing | 6.20 |
| **Axios** | HTTP Client with Interceptors | 1.6 |
| **jwt-decode** | JWT Token Parsing | 4.0 |
| **React Icons** | Icon Library (Font Awesome) | 4.12 |
| **Poppins** | Google Font for Typography | — |
| **Nginx** | Production Static File Server | Alpine |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Spring Boot** | Microservices Framework | 3.2.0 |
| **Spring Security** | Authentication & Authorization | 6.x |
| **Spring Cloud Gateway** | API Gateway & Routing | 2023.0.0 |
| **Spring Data JPA** | ORM for PostgreSQL | 3.2 |
| **Spring Data MongoDB** | MongoDB Integration | 3.2 |
| **Spring Data Redis** | Caching & Seat Locking | 3.2 |
| **Spring AMQP** | RabbitMQ Messaging | 3.2 |
| **JJWT** | JWT Token Generation & Validation | 0.12.3 |
| **Lombok** | Boilerplate Code Reduction | Latest |
| **Java** | Programming Language | 17 (LTS) |

### Databases & Messaging
| Technology | Purpose | Version |
|------------|---------|---------|
| **PostgreSQL** | User accounts, bookings, payments | 15 Alpine |
| **MongoDB** | Movie catalog (flexible schema) | 7.0 |
| **Redis** | Session cache & seat lock TTL | 7 Alpine |
| **RabbitMQ** | Async event processing (booking events) | 3 Management |

### DevOps & Deployment
| Technology | Purpose |
|------------|---------|
| **Docker** | Containerization of all services |
| **Docker Compose** | Local multi-container orchestration |
| **GitHub Actions** | CI/CD Pipeline (build + deploy) |
| **Render** | Cloud hosting (frontend + backend) |
| **Nginx** | Reverse proxy, gzip, SPA routing |

---

## 📁 Project Structure

```
cineverse/
│
├── 📂 Cineverse_website/
│   │
│   ├── 📂 frontend/                     # React Application (Vite)
│   │   ├── 📂 src/
│   │   │   ├── 📂 components/           # Reusable UI Components
│   │   │   │   ├── Navbar.jsx           #   Navigation bar with city selector
│   │   │   │   └── ProtectedRoute.jsx   #   Route guard (auth + role check)
│   │   │   │
│   │   │   ├── 📂 pages/               # Page Components
│   │   │   │   ├── Home.jsx             #   Landing page with hero section
│   │   │   │   ├── Movies.jsx           #   Movie browsing with filters
│   │   │   │   ├── MovieDetails.jsx     #   Single movie details + reviews
│   │   │   │   ├── Booking.jsx          #   3-step booking flow
│   │   │   │   ├── Dashboard.jsx        #   User dashboard & booking history
│   │   │   │   ├── Login.jsx            #   Login form
│   │   │   │   ├── Signup.jsx           #   Registration form
│   │   │   │   ├── Profile.jsx          #   User profile management
│   │   │   │   ├── ForgotPassword.jsx   #   Password recovery
│   │   │   │   ├── ResetPassword.jsx    #   Password reset with OTP
│   │   │   │   ├── AdminPanel.jsx       #   Admin dashboard
│   │   │   │   └── TheatreOwnerPanel.jsx#   Theatre owner dashboard
│   │   │   │
│   │   │   ├── 📂 services/            # API Service Layer
│   │   │   │   ├── api.js               #   Axios instance + interceptors
│   │   │   │   ├── authService.js       #   Auth API calls
│   │   │   │   ├── movieService.js      #   Movie API calls
│   │   │   │   ├── bookingService.js    #   Booking API calls
│   │   │   │   └── mockMovies.js        #   100+ mock movies (demo fallback)
│   │   │   │
│   │   │   ├── 📂 context/             # React Context
│   │   │   │   └── AuthContext.jsx      #   Global auth state management
│   │   │   │
│   │   │   ├── 📂 styles/              # CSS Stylesheets
│   │   │   │   ├── global.css           #   Design system & CSS variables
│   │   │   │   ├── Navbar.css           #   Navigation styles
│   │   │   │   ├── Home.css             #   Landing page styles
│   │   │   │   ├── Movies.css           #   Movie grid styles
│   │   │   │   ├── MovieDetails.css     #   Movie detail page styles
│   │   │   │   ├── Booking.css          #   Booking flow styles
│   │   │   │   ├── Dashboard.css        #   Dashboard styles
│   │   │   │   ├── Auth.css             #   Login/Signup styles
│   │   │   │   ├── Profile.css          #   Profile page styles
│   │   │   │   └── AdminPanel.css       #   Admin panel styles
│   │   │   │
│   │   │   ├── App.jsx                  # Root component with routing
│   │   │   └── main.jsx                 # Entry point
│   │   │
│   │   ├── index.html                   # HTML template
│   │   ├── vite.config.js               # Vite configuration
│   │   ├── Dockerfile                   # Multi-stage Docker build
│   │   ├── nginx.conf                   # Nginx config (SPA + gzip + proxy)
│   │   └── package.json                 # Dependencies
│   │
│   ├── 📂 backend/
│   │   ├── 📂 auth-service/             # Authentication Microservice
│   │   │   ├── 📂 src/main/java/com/cineverse/auth/
│   │   │   │   ├── config/              #   Security & CORS config
│   │   │   │   ├── controller/          #   REST endpoints
│   │   │   │   ├── dto/                 #   Request/Response DTOs
│   │   │   │   ├── model/               #   JPA entities (User, OTP)
│   │   │   │   ├── repository/          #   Spring Data repositories
│   │   │   │   ├── service/             #   Business logic
│   │   │   │   ├── util/                #   JWT utility class
│   │   │   │   └── exception/           #   Custom exceptions
│   │   │   ├── Dockerfile
│   │   │   └── pom.xml
│   │   │
│   │   ├── 📂 movie-service/            # Movie Catalog Microservice
│   │   │   ├── 📂 src/main/java/com/cineverse/movies/
│   │   │   ├── Dockerfile
│   │   │   └── pom.xml
│   │   │
│   │   ├── 📂 booking-service/          # Booking & Theatre Microservice
│   │   │   ├── 📂 src/main/java/com/cineverse/booking/
│   │   │   ├── Dockerfile
│   │   │   └── pom.xml
│   │   │
│   │   └── 📂 gateway/                  # API Gateway
│   │       ├── 📂 src/main/java/com/cineverse/gateway/
│   │       ├── Dockerfile
│   │       └── pom.xml
│   │
│   ├── 📂 scripts/                      # Setup & utility scripts
│   │   ├── setup.sh                     #   Linux/Mac setup
│   │   └── setup.ps1                    #   Windows setup
│   │
│   ├── docker-compose.yml               # Full-stack orchestration
│   └── .gitignore
│
├── 📂 .github/workflows/
│   └── cicd.yml                         # GitHub Actions CI/CD pipeline
│
└── README.md                            # ← You are here
```

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Minimum Version | Purpose |
|-------------|-----------------|---------|
| **Node.js** | 18+ | Frontend build & dev server |
| **npm** | 9+ | Package management |
| **Java JDK** | 17+ | Backend services |
| **Maven** | 3.6+ | Java dependency management |
| **Docker** | 20+ | Containerization |
| **Docker Compose** | 2.0+ | Multi-container orchestration |

### Quick Start with Docker (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/iamujjwal69/cineverse.git
cd cineverse/Cineverse_website

# 2. Start all services (databases + backend + frontend)
docker-compose up -d

# 3. Wait ~60 seconds for services to initialize, then open:
#    Frontend  → http://localhost:3000
#    Gateway   → http://localhost:8080
#    RabbitMQ  → http://localhost:15672 (guest/guest)
```

That's it! All 7 services will start automatically. 🎉

---

## 💻 Running Locally (Development Mode)

### Option 1: Full Stack (Docker for databases, local for code)

```bash
# Step 1: Start only the databases
cd Cineverse_website
docker-compose up postgres mongodb redis rabbitmq -d

# Step 2: Run Backend Services (each in a separate terminal)
cd backend/auth-service    && mvn spring-boot:run    # → :8081
cd backend/movie-service   && mvn spring-boot:run    # → :8082
cd backend/booking-service && mvn spring-boot:run    # → :8083
cd backend/gateway         && mvn spring-boot:run    # → :8080

# Step 3: Run Frontend
cd frontend
npm install
npm run dev                                          # → :3000
```

### Option 2: Frontend Only (Demo Mode)

The frontend includes a **smart fallback system** — if the backend is unreachable, it automatically:
- Loads **100+ mock movies** with real posters, ratings, and metadata
- Enables **demo login** (any email/password works)
- Stores **bookings in localStorage**

```bash
cd Cineverse_website/frontend
npm install
npm run dev
# Open http://localhost:3000
```

> **Demo Login Tip:** Use `admin@test.com` for Admin role, `owner@test.com` for Theatre Owner role, or any other email for regular User role.

---

## 📚 API Documentation

### Auth Service — Port `8081`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/auth/register` | ❌ | Register a new user |
| `POST` | `/api/auth/login` | ❌ | Login and receive JWT token |
| `POST` | `/api/auth/logout` | ✅ | Invalidate current session |
| `POST` | `/api/auth/forgot-password` | ❌ | Request OTP for password reset |
| `POST` | `/api/auth/reset-password` | ❌ | Reset password with OTP |
| `GET`  | `/api/auth/me` | ✅ | Get current user profile |

### Movie Service — Port `8082`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/movies` | ❌ | List all movies (paginated, filterable) |
| `GET` | `/api/movies/:id` | ❌ | Get movie details by ID |
| `GET` | `/api/movies/search?query=...` | ❌ | Full-text search across title, genre, cast |
| `POST` | `/api/movies` | ✅ Admin | Create a new movie |
| `PUT` | `/api/movies/:id` | ✅ Admin | Update movie details |
| `DELETE` | `/api/movies/:id` | ✅ Admin | Delete a movie |
| `POST` | `/api/movies/:id/reviews` | ✅ | Add a review to a movie |
| `GET` | `/api/movies/:id/reviews` | ❌ | Get all reviews for a movie |

### Booking Service — Port `8083`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/bookings/theatres` | ❌ | List all theatres |
| `GET` | `/api/bookings/shows?movieId=&date=` | ❌ | Get shows for a movie |
| `GET` | `/api/bookings/shows/:id` | ❌ | Get show details |
| `GET` | `/api/bookings/shows/:id/seats` | ❌ | Get seat layout & availability |
| `POST` | `/api/bookings/shows/:id/lock` | ✅ | Lock seats temporarily (10 min TTL) |
| `POST` | `/api/bookings` | ✅ | Create a new booking |
| `POST` | `/api/bookings/:id/confirm` | ✅ | Confirm a pending booking |
| `POST` | `/api/bookings/:id/cancel` | ✅ | Cancel a booking |
| `GET` | `/api/bookings/my-bookings` | ✅ | Get current user's booking history |

> All authenticated endpoints require a `Bearer <JWT>` token in the `Authorization` header.

---

## 🔐 Environment Variables

### Frontend (`Cineverse_website/frontend/.env`)
```env
VITE_API_URL=http://localhost:8080/api
```

### Auth Service
| Variable | Default | Description |
|----------|---------|-------------|
| `DB_HOST` | `localhost` | PostgreSQL host |
| `DB_PORT` | `5432` | PostgreSQL port |
| `DB_NAME` | `cineverse` | Database name |
| `DB_USER` | `postgres` | Database username |
| `DB_PASSWORD` | `postgres` | Database password |
| `DATABASE_URL` | — | Full JDBC URL (overrides individual DB vars) |
| `JWT_SECRET` | Auto-generated | Secret key for JWT signing |

### Movie Service
| Variable | Default | Description |
|----------|---------|-------------|
| `MONGO_URI` | `mongodb://localhost:27017/cineverse` | MongoDB connection URI |
| `REDIS_HOST` | `localhost` | Redis host |
| `REDIS_PORT` | `6379` | Redis port |

### Booking Service
| Variable | Default | Description |
|----------|---------|-------------|
| `DB_HOST` | `localhost` | PostgreSQL host |
| `DB_PORT` | `5432` | PostgreSQL port |
| `DB_NAME` | `cineverse` | Database name |
| `DB_USER` | `postgres` | Database username |
| `DB_PASSWORD` | `postgres` | Database password |
| `REDIS_HOST` | `localhost` | Redis host |
| `REDIS_PORT` | `6379` | Redis port |
| `RABBITMQ_HOST` | `localhost` | RabbitMQ host |
| `RABBITMQ_PORT` | `5672` | RabbitMQ port |
| `RABBITMQ_USER` | `guest` | RabbitMQ username |
| `RABBITMQ_PASS` | `guest` | RabbitMQ password |

### Gateway
| Variable | Default | Description |
|----------|---------|-------------|
| `AUTH_SERVICE_URL` | `http://localhost:8081` | Auth service base URL |
| `MOVIE_SERVICE_URL` | `http://localhost:8082` | Movie service base URL |
| `BOOKING_SERVICE_URL` | `http://localhost:8083` | Booking service base URL |
| `JWT_SECRET` | Same as Auth Service | Must match auth-service secret |

---

## 🌐 Deployment

### Live Deployment (Render)

The project is deployed on **Render** with the following services:

| Service | URL |
|---------|-----|
| 🌐 **Frontend** | [cineverse-ipsj.onrender.com](https://cineverse-ipsj.onrender.com) |
| 🔀 **API Gateway** | [cineverse-gateway-cv6o.onrender.com](https://cineverse-gateway-cv6o.onrender.com) |
| 🔐 **Auth Service** | [cineverse-auth-2554.onrender.com](https://cineverse-auth-2554.onrender.com) |

### CI/CD Pipeline

The project uses **GitHub Actions** for continuous integration:

```yaml
# Triggers on push/PR to main branch
# 1. Checks out code
# 2. Sets up Node.js 18
# 3. Installs dependencies
# 4. Builds production bundle
# 5. Verifies build output
# Render auto-deploys on push to main
```

### Deploy Your Own Instance

#### On Render (Free Tier)
1. Fork this repository
2. Create a new **Web Service** for each backend service
3. Create a new **Static Site** for the frontend
4. Set the environment variables listed above
5. Render will auto-deploy on every push to `main`

#### On Docker (Self-Hosted)
```bash
git clone https://github.com/iamujjwal69/cineverse.git
cd cineverse/Cineverse_website
docker-compose up -d
```

---

## 🖼️ Screenshots

### 🏠 Home Page
> Landing page with hero section, feature cards, and CTA

### 🎬 Movie Browsing
> Browse 100+ movies with search, genre filters, category filters (Hollywood/Bollywood/South Indian), and sorting

### 🎫 3-Step Booking Flow
> **Step 1:** Select city, theatre & showtime → **Step 2:** Choose seats on interactive map → **Step 3:** Booking confirmation

### 👤 User Dashboard
> View booking history, manage profile, and track upcoming shows

---

## 🧪 Testing

```bash
# Backend Tests (per service)
cd Cineverse_website/backend/auth-service    && mvn test
cd Cineverse_website/backend/movie-service   && mvn test
cd Cineverse_website/backend/booking-service && mvn test

# Frontend Build Verification
cd Cineverse_website/frontend && npm run build
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** this repository
2. **Create** your feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add some AmazingFeature'`
4. **Push** to the branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ujjwal** — [@iamujjwal69](https://github.com/iamujjwal69)

---

<div align="center">

Built with ❤️ using React, Spring Boot & Docker

⭐ Star this repo if you found it useful!

</div>
