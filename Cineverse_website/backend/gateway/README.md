# API Gateway

Centralized API Gateway for CineVerse using Spring Cloud Gateway.

## Features
- Route management for all microservices
- JWT token validation (global filter)
- CORS configuration
- Identity header injection (`X-User-Email`, `X-User-Role`, `X-User-Id`)
- Request/response logging

## Routes

| Path | Service | Port |
|------|---------|------|
| `/api/auth/**` | Auth Service | 8081 |
| `/api/movies/**` | Movie Service | 8082 |
| `/api/bookings/**` | Booking Service | 8083 |

## JWT Filter

All requests except the following public paths require a valid `Authorization: Bearer <JWT>` header:

- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `POST /api/auth/send-otp`
- `POST /api/auth/verify-otp`

Authenticated requests have these headers injected before forwarding to downstream services:
- `X-User-Email` — email address from JWT subject
- `X-User-Role` — role claim from JWT
- `X-User-Id` — userId claim from JWT

## Setup

### Environment Variables
```
AUTH_SERVICE_URL=http://localhost:8081
MOVIE_SERVICE_URL=http://localhost:8082
BOOKING_SERVICE_URL=http://localhost:8083
JWT_SECRET=your-secret-key   # Must match auth-service JWT_SECRET
```

### Run
```bash
mvn spring-boot:run
```
