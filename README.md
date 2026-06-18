<div align="center">

# 🎬 CineVerse — Movie Booking Platform

### A Full-Stack Movie Booking Application with Microservices Architecture

[![Deploy to Render](https://img.shields.io/badge/Deploy_to-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/deploy?repo=https://github.com/iamujjwal69/cineverse)
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

> ### 🚀 **[Deploy your own CineVerse on Render →](https://render.com/deploy?repo=https://github.com/iamujjwal69/cineverse)**

| Feature | Demo Mode (No Backend Needed) |
|---------|-------------------------------|
| 🎬 **100+ Movies** | Full catalog with posters, ratings, and filters |
| 🔐 **Login/Register** | Works with any email/password (demo mode) |
| 🎫 **Book Tickets** | Complete 3-step booking flow |
| 💺 **Seat Selection** | Interactive seat map |
| 📊 **Dashboard** | Booking history stored locally |

> **💡 Run locally in 30 seconds:** `cd Cineverse_website/frontend && npm install && npm run dev` — the app works in **demo mode** without any backend.

---

## 📑 Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Running Locally](#-running-locally)
- [API Documentation](#-api-documentation)
- [Environment Variables](#-environment-variables)
- [Deployment on Render](#-deployment-on-render)
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
| **Seat Booking** | Interactive seat map (8 rows × 12 seats) |
| **Booking History** | View all past & upcoming bookings from the dashboard |
| **User Authentication** | Register, Login, Logout with JWT-based session management |
| **Password Recovery** | Forgot password & OTP-based reset flow |
| **Responsive UI** | Fully responsive — works on mobile, tablet, and desktop |

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
│         JWT Validation · CORS · Route Proxying                   │
│         Injects X-User-Email, X-User-Role headers                │
│                          Port: 8080                              │
└─────────┬───────────────────┬───────────────────┬────────────────┘
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌──────────────────────┐
│  AUTH SERVICE   │ │  MOVIE SERVICE  │ │  BOOKING SERVICE     │
│  Spring Boot    │ │  Spring Boot    │ │  Spring Boot         │
│  Port: 8081     │ │  Port: 8082     │ │  Port: 8083          │
└────────┬────────┘ └───────┬─────────┘ └──┬──────────┬────────┘
         │                  │              │          │
         ▼                  ▼              ▼          ▼
┌──────────────┐   ┌──────────────┐ ┌─────────┐ ┌──────────┐
│  PostgreSQL  │   │   MongoDB    │ │  Redis  │ │ RabbitMQ │
│  (Users &    │   │  (Movie      │ │ (Cache &│ │ (Events) │
│   Bookings)  │   │   Catalog)   │ │  Locks) │ │          │
└──────────────┘   └──────────────┘ └─────────┘ └──────────┘
```

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
| **React Icons** | Icon Library | 4.12 |
| **Nginx** | Production Static File Server | Alpine |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Spring Boot** | Microservices Framework | 3.2.0 |
| **Spring Security** | Authentication & Authorization | 6.x |
| **Spring Cloud Gateway** | API Gateway & JWT Filter | 2023.0.0 |
| **Spring Data JPA** | ORM for PostgreSQL | 3.2 |
| **Spring Data MongoDB** | MongoDB Integration | 3.2 |
| **Spring Data Redis** | Caching & Seat Locking | 3.2 |
| **Spring AMQP** | RabbitMQ Messaging | 3.2 |
| **JJWT** | JWT Token Generation & Validation | 0.12.3 |
| **Lombok** | Boilerplate Reduction | Latest |
| **Java** | Programming Language | 17 (LTS) |

### Databases & Messaging
| Technology | Purpose | Version |
|------------|---------|---------|
| **PostgreSQL** | User accounts & bookings | 15 Alpine |
| **MongoDB** | Movie catalog | 7.0 |
| **Redis** | Session cache & seat lock TTL | 7 Alpine |
| **RabbitMQ** | Async event processing | 3 Management |

### DevOps
| Technology | Purpose |
|------------|---------|
| **Docker** | Containerization |
| **Docker Compose** | Local multi-container orchestration |
| **GitHub Actions** | CI/CD (build verification) |
| **Render** | Cloud hosting |
| **Nginx** | Reverse proxy, gzip, SPA routing |

---

## 📁 Project Structure

```
cineverse/
├── Cineverse_website/
│   ├── frontend/                        # React + Vite application
│   │   ├── src/
│   │   │   ├── components/              # Navbar, ProtectedRoute
│   │   │   ├── pages/                   # Home, Movies, Booking, Dashboard, etc.
│   │   │   ├── services/                # Axios API clients + mockMovies fallback
│   │   │   ├── context/AuthContext.jsx  # Global auth state (JWT + demo mode)
│   │   │   └── styles/                  # Per-component CSS
│   │   ├── Dockerfile                   # Multi-stage: node → nginx
│   │   ├── nginx.conf                   # SPA routing + gzip + /api proxy
│   │   └── package.json
│   │
│   ├── backend/
│   │   ├── auth-service/               # JWT auth, users, OTP — fully implemented
│   │   ├── movie-service/              # Movie catalog (stub, MongoDB + Redis)
│   │   ├── booking-service/            # Bookings (stub, PostgreSQL + Redis + RabbitMQ)
│   │   └── gateway/                    # Spring Cloud Gateway + JWT global filter
│   │
│   └── docker-compose.yml              # Full-stack with health checks
│
├── .github/workflows/cicd.yml           # Build verification on push to main
├── render.yaml                          # Render Blueprint (IaC)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Minimum Version |
|-------------|-----------------|
| **Node.js** | 18+ |
| **Java JDK** | 17+ |
| **Maven** | 3.6+ |
| **Docker + Compose** | 20+ / 2.0+ |

---

## 💻 Running Locally

### Option 1: Docker Compose (Full Stack)

```bash
# Clone the repo
git clone https://github.com/iamujjwal69/cineverse.git
cd cineverse/Cineverse_website

# Build and start all services (databases + backend + frontend)
docker-compose up -d

# Wait ~60 seconds for all services to be healthy, then open:
#   Frontend  → http://localhost:3000
#   Gateway   → http://localhost:8080
#   RabbitMQ  → http://localhost:15672  (guest / guest)
```

> Health checks are configured on all databases, so backend services only start once PostgreSQL / MongoDB / Redis / RabbitMQ are ready.

### Option 2: Databases in Docker, Services Local

```bash
# Step 1: Start only the databases
cd Cineverse_website
docker-compose up postgres mongodb redis rabbitmq -d

# Step 2: Run backend services (separate terminals)
cd backend/auth-service    && mvn spring-boot:run    # → :8081
cd backend/movie-service   && mvn spring-boot:run    # → :8082
cd backend/booking-service && mvn spring-boot:run    # → :8083
cd backend/gateway         && mvn spring-boot:run    # → :8080

# Step 3: Run frontend
cd frontend && npm install && npm run dev             # → :3000
```

### Option 3: Frontend Only (Demo Mode)

```bash
cd Cineverse_website/frontend
npm install
npm run dev
# Open http://localhost:3000
```

The frontend automatically switches to **demo mode** when the backend is unreachable:
- Loads **100+ mock movies** with real posters and metadata
- Any email/password combination works for login (granted `USER` role)
- Bookings are stored in `localStorage`

---

## 📚 API Documentation

All requests go through the gateway on port `8080`. Authenticated endpoints require `Authorization: Bearer <JWT>`.

### Auth Service (`/api/auth`)

| Method | Endpoint | Auth Required | Description |
|--------|----------|:---:|-------------|
| `POST` | `/api/auth/register` | ❌ | Register a new user |
| `POST` | `/api/auth/login` | ❌ | Login and receive JWT |
| `POST` | `/api/auth/logout` | ✅ | Logout (stateless no-op) |
| `POST` | `/api/auth/forgot-password` | ❌ | Request password reset token |
| `POST` | `/api/auth/reset-password` | ❌ | Reset password with token |
| `POST` | `/api/auth/send-otp` | ❌ | Send OTP to email before registration |
| `POST` | `/api/auth/verify-otp` | ❌ | Verify OTP code |
| `GET`  | `/api/auth/me` | ✅ | Get current user profile |

### Movie Service (`/api/movies`)

| Method | Endpoint | Auth Required | Description |
|--------|----------|:---:|-------------|
| `GET` | `/api/movies` | ❌ | List movies (paginated, filterable) |
| `GET` | `/api/movies/:id` | ❌ | Get movie by ID |
| `GET` | `/api/movies/search?query=` | ❌ | Full-text search |
| `POST` | `/api/movies` | ✅ Admin | Create movie |
| `PUT` | `/api/movies/:id` | ✅ Admin | Update movie |
| `DELETE` | `/api/movies/:id` | ✅ Admin | Delete movie |
| `POST` | `/api/movies/:id/reviews` | ✅ | Add review |
| `GET` | `/api/movies/:id/reviews` | ❌ | Get reviews |

### Booking Service (`/api/bookings`)

| Method | Endpoint | Auth Required | Description |
|--------|----------|:---:|-------------|
| `GET` | `/api/bookings/theatres` | ❌ | List theatres |
| `GET` | `/api/bookings/shows?movieId=&date=` | ❌ | Get shows |
| `GET` | `/api/bookings/shows/:id/seats` | ❌ | Seat layout & availability |
| `POST` | `/api/bookings/shows/:id/lock` | ✅ | Lock seats (10 min TTL) |
| `POST` | `/api/bookings` | ✅ | Create booking |
| `POST` | `/api/bookings/:id/confirm` | ✅ | Confirm booking |
| `POST` | `/api/bookings/:id/cancel` | ✅ | Cancel booking |
| `GET` | `/api/bookings/my-bookings` | ✅ | User booking history |

---

## 🔐 Environment Variables

### Frontend (`Cineverse_website/frontend/.env`)
```env
VITE_API_URL=http://localhost:8080/api
```

### Auth Service
| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_URL` | — | Full JDBC URL (used by Render; overrides `DB_*`) |
| `DB_HOST` | `localhost` | PostgreSQL host |
| `DB_PORT` | `5432` | PostgreSQL port |
| `DB_NAME` | `cineverse` | Database name |
| `DB_USER` | `postgres` | Database username |
| `DB_PASSWORD` | `postgres` | Database password |
| `JWT_SECRET` | — | Secret key for JWT signing (required) |

### Movie Service
| Variable | Default | Description |
|----------|---------|-------------|
| `MONGO_URI` | `mongodb://localhost:27017/cineverse` | MongoDB connection URI |
| `REDIS_HOST` | `localhost` | Redis host |
| `REDIS_PORT` | `6379` | Redis port |

### Booking Service
| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_URL` | — | Full JDBC URL (used by Render) |
| `DB_HOST` | `localhost` | PostgreSQL host |
| `DB_PORT` | `5432` | PostgreSQL port |
| `DB_NAME` | `cineverse` | Database name |
| `DB_USER` | `postgres` | Username |
| `DB_PASSWORD` | `postgres` | Password |
| `REDIS_HOST` | `localhost` | Redis host |
| `RABBITMQ_HOST` | `localhost` | RabbitMQ host |
| `RABBITMQ_USER` | `guest` | RabbitMQ username |
| `RABBITMQ_PASS` | `guest` | RabbitMQ password |

### Gateway
| Variable | Default | Description |
|----------|---------|-------------|
| `AUTH_SERVICE_URL` | `http://localhost:8081` | Auth service base URL |
| `MOVIE_SERVICE_URL` | `http://localhost:8082` | Movie service base URL |
| `BOOKING_SERVICE_URL` | `http://localhost:8083` | Booking service base URL |
| `JWT_SECRET` | — | **Must match the auth-service JWT_SECRET exactly** |

---

## 🌐 Deployment on Render

### One-Click Deploy (Render Blueprint)

1. **Fork** this repo to your GitHub account
2. Sign up / log in at [render.com](https://render.com)
3. Go to **Dashboard → New → Blueprint**
4. Connect the forked repo — Render detects `render.yaml` automatically
5. Click **Apply**

> **After the first deploy**, you must set a few env vars manually in the Render dashboard (they are marked `sync: false` in `render.yaml`):
>
> | Service | Variable | Value |
> |---------|----------|-------|
> | `cineverse-gateway` | `AUTH_SERVICE_URL` | `https://cineverse-auth.onrender.com` |
> | `cineverse-gateway` | `MOVIE_SERVICE_URL` | `https://cineverse-movies.onrender.com` |
> | `cineverse-gateway` | `BOOKING_SERVICE_URL` | `https://cineverse-booking.onrender.com` |
> | `cineverse-gateway` | `JWT_SECRET` | Copy the **same value** from `cineverse-auth`'s env vars |
> | `cineverse-movies` | `MONGO_URI` | Your [MongoDB Atlas](https://www.mongodb.com/atlas) free cluster URI |
> | `cineverse-frontend` | `VITE_API_URL` | `https://cineverse-gateway.onrender.com/api` |
>
> After saving, **redeploy** `cineverse-gateway` and `cineverse-frontend`.

### Manual Deploy (Step-by-Step)

#### Step 1 — Databases

| Database | Provider | Plan |
|----------|----------|------|
| **PostgreSQL** | Render (built-in) | Free |
| **MongoDB** | [MongoDB Atlas](https://www.mongodb.com/atlas) | Free M0 |

Redis and RabbitMQ are not available on Render free tier — the app runs in degraded mode without them (caching and async events disabled).

#### Step 2 — Backend Services

For each service (`auth-service`, `movie-service`, `booking-service`, `gateway`):

1. **New → Web Service** → connect repo
2. Set **Root Directory** to `Cineverse_website/backend/<service-name>`
3. Set **Runtime** to **Docker**
4. Add the environment variables from the table above
5. **Important:** Use the **same `JWT_SECRET` value** for `auth-service` and `gateway`

#### Step 3 — Frontend

1. **New → Static Site** → connect repo
2. **Root Directory:** `Cineverse_website/frontend`
3. **Build Command:** `npm install && npm run build`
4. **Publish Directory:** `dist`
5. Add **Rewrite Rule:** `/*` → `/index.html`
6. Set `VITE_API_URL` = `https://cineverse-gateway.onrender.com/api`

> **Free tier note:** Render free services spin down after 15 minutes of inactivity. The first request after idle takes ~30–60 seconds to respond. This is expected.

### Self-Hosted (Docker Compose)

```bash
git clone https://github.com/iamujjwal69/cineverse.git
cd cineverse/Cineverse_website
docker-compose up -d
# Frontend → http://localhost:3000
# Gateway  → http://localhost:8080
```

---

## 🤝 Contributing

1. Fork this repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Ujjwal** — [@iamujjwal69](https://github.com/iamujjwal69)

<div align="center">

Built with ❤️ using React, Spring Boot & Docker

⭐ Star this repo if you found it useful!

</div>
