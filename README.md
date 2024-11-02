# Fiverr like Web application with Microservices architecture

## Introduction

This is a freelance marketplace where sellers can create gigs and buyers an purchase gigs or custom gigs.

1. API Gateway: communication between client and microservices.
2. Notification Service: send email notifications to users.
3. Auth Service: for handling user authentication using email and password.
4. User Service: for handling user profile and user data for sellers and buyers.
5. Gig Service: for handling gigs and custom gigs.
6. Chat Service: for communication between buyers and sellers.
7. Order Service: for handling orders and payments using Stripe.
8. Review Service: for handling reviews and ratings for sellers.

## Functional Requirements

- User authentication:
    - User can sign up with email and password.
    - User can sign in with email and password.
    - User can sign out.
    - User can reset password.
- User Profiles:
    - User can update profile.
    - User can view profile.
    - User can create sellers profile.
- Search and Filters:
    - User can search gigs.
    - User can filter gigs by category.
    - User can filter gigs by user.
- Messaging System:
    - Buysers and sellers can communicate.
- Rating and Reviews:
    - Buyers can rate and review sellers.
    - Sllers can rate and review buyers.
- Payment Gateway:
    - User can pay for gigs.
    - Sellers can receive payments for gigs.
- View Orders:
    - Buyers and sellers can view active, complted and cancelled orders.
- Cancellation of Orders:
    - Buyers and sellers can cancel orders.

## Non-Functional Requirements

- Scalability:
    - The system should be able to handle a large number of users during peak times.
- Availability:
    - The system should be highly available with failover mechanism.
- Reliability:
    - The system should be reliable and should not lose data.
- Maintainability:
    - The system should be easy to maintain and update with coding standards and automated testing.
- Usability:
    - The system should be easy to use with a clean and simple user interface.

## Technologies

- VS Code
- Node.js
- Docker and Docker Compose
- RabbitMQ
- Elasticsearch and Kibana
- MongoDB
- MySQL
- Postgresql
- Redis

```shell
docker compose up -d
```