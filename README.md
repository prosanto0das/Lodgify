# Lodgify 🏠

**Turning Lodging Searches into Seamless Experiences Worldwide**

---

## 📚 Table of Contents

1. [Problem Statement](#problem-statement)
2. [Our Solution](#our-solution)
3. [Key Features](#key-features)
4. [Tech Stack](#tech-stack)
5. [Getting Started](#getting-started)
6. [Available Scripts](#available-scripts)
7. [Contributing](#contributing)
8. [License](#license)
9. [Team](#team)

---

## Problem Statement

People worldwide face the same lodging challenges:

* Scattered or outdated listing information
* Difficulty verifying host credibility
* Hidden fees and unclear pricing
* Risk of scams and fake listings
* Fragmented communication with hosts
* Time-consuming, stressful search process

---

## Our Solution

**Lodgify** centralizes global lodging options on one platform, offering:

* **Verified Hosts**: Rigorous identity & property checks
* **Transparent Pricing**: Upfront rates, fees, and estimates
* **Smart Search**: Filters for location, price, amenities, and availability

> Experience a hassle-free search and confident bookings—anywhere you go.

---

## Key Features

| Category              | Highlights                                                                         |
| --------------------- | ---------------------------------------------------------------------------------- |
| **Smart Search**      | Map & proximity filters<br/>Custom search presets<br/>Real-time availability       |
| **Verified Listings** | Host ID checks<br/>High-res photos<br/>Amenity details<br/>Safety & upkeep ratings |
| **Clear Costs**       | Upfront nightly rates<br/>Service fees breakdown<br/>Utility estimates             |

---

## Tech Stack

| Layer     | Technology                                |
| --------- | ----------------------------------------- |
| Front-End | React • Vite • Sass (SCSS) • React Router |
| Back-End  | Node.js • Express.js • Prisma (ORM)       |
| Database  | MongoDB • Prisma                        |
| Auth      | JSON Web Tokens (JWT) • bcrypt            |

Project structure: `/api` (server) and `/client` (React app).

---

## Getting Started

### Prerequisites

* Node.js v18.x or later
* npm
* MongoDB (local or Atlas)
* cors
* jsonwebtoken
* prisma (ORM Tool)

### Installation

```bash
# 1) Clone the repo
git clone https://github.com/yourusername/Lodgify.git
cd Lodgify

# 2) Install dependencies
cd api && npm install
cd ../client && npm install
```

### Environment Variables

Create a `.env` file in `/api`:

```
MONGO_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority"
JWT_SECRET_KEY=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

### Run Locally

```bash
# From project root
npm run dev
# • Express API → http://localhost:5000
# • React client → http://localhost:3000
```

---

## Available Scripts

### In `/client` (React)

| Command     | Description              |
| ----------- | ------------------------ |
| `npm start` | Run React dev server     |


### In `/api` (Node)

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `npm run dev`    | Run client & server together |

---

## Contributing

This repo serves as a showcase for our team—external pull requests are **not** accepted.
However, we welcome your ideas:

1. Open an issue with suggestions
2. Fork the repo and experiment
3. Share feedback via GitHub Discussions or social media

---

## License

Released under the **MIT License**.
See [`LICENSE`](LICENSE) for full details.
Fork for portfolio use is welcome—please keep the license intact. 🎉

---

## Team

| Name           | Role                 |
| -------------- | -------------------- |
| Prosanto Das   | Full-Stack Developer |
| Jannatun Nayma | Front-End Developer  |
| Habiba Jahan   | Front-End Developer  |

---

> **Lodgify** – built by students, trusted by guests.
> Your global lodging companion. 🏡
