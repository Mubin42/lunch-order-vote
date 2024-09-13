# Full Stack Development Task Deliverables!

I am **Kazi Ehsanul Mubin**, a Software Engineer from Bangladesh. This repo the deliverables for **technical_assessment_task_v2.md**

### Objective

Build a simple web application to manage daily lunch orders in an organization. Employees vote for meals from different restaurants, and the restaurant with the most votes wins for the day.

### Task Overview

Create a full-stack app with a Next.js frontend, Nest.js backend, and PostgreSQL database (using Prisma ORM). Containerize everything using Docker and Docker Compose.

## Features

### Backend (NestJS)

- [x] Api Management for restaurant, menu, menu items, and votes.

- [x] Endpoints to create and list restaurants, allow voting, and display the daily winner.

- [x] Provide Swagger/OpenAPI documentation.

### Frontend (Next.js)

- [x] Display restaurants and food packs.

- [x] Simple UI for voting and showing the daily winner.

- [ ] Use server-side rendering. (Incomplete as Chakra UI Does not support SSR)

- [x] Additional: Query and Caching Management using Redux Toolkit and RTK Query.

### Database (PostgreSQL + Prisma)

- [x] Store data for restaurants, food packs, and votes.

- [x] Proper relationships between entities.

### Dockerization

- [x] Containerize the frontend, backend, and database.

- [x] Set up Docker Compose for the multi-container app.

- [x] Include health checks for containers.

## Getting Started

You can launch the development environment with the following commands.
Build command

    docker compose build

Lunch command

    docker compose up

There is three docker container in this project.

- db - Postgres Database
- backend - NestJS Application
- frontend - Next.js Application

After successful launch, go to the following URL in your browser.

- Frontend: [http://localhost:3000](http://localhost:3000/)
- Backend: [http://localhost:5000](http://localhost:5000)
- Swagger: [http://localhost:5000/docs](http://localhost:5000/docs)

Containers have dependencies, but the next container may start to be started before the preparation is complete. If it fails for that reason, please specify the start-up separately as follows.

    docker-compose up db

See `docker-compose.yaml` if you want to know more.
