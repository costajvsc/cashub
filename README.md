<p align="center">
  <img src="public/logo.svg" alt="FinanceTrack Logo" width="200"/>
</p>

<h1 align="center">Cashub</h1>

<p align="center">
  A mobile-first, open-source app to help you track your finances with simplicity and security.
</p>

---

## 📌 Project Overview

**Cashub** is a simple and intuitive personal finance tracker designed for mobile devices. It allows you to:

-   Categorize and organize your transactions
-   View insightful analytics on your financial habits
-   Keep your data safe and private
-   Use the app freely — it's completely open-source

Built using **Next.js 15**, it’s fully responsive and optimized for both desktop and mobile.

---

## ✅ Requirements

Make sure you have the following installed on your machine:

-   [Node.js](https://nodejs.org/) v18 or higher
-   [PostgreSQL](https://www.postgresql.org/) v12 or higher
-   [npm](https://www.npmjs.com/) v9 or higher

---

## ⚙️ Environment Variables

Create a `.env` file at the root of the project with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/yourdatabase"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## 🛠️ Setup Instructions

1. Install dependencies

```
npm install
```

2. Generate Prisma client and apply migrations

```
npx prisma generate
npx prisma migrate dev --name init
```

3. Start the development server

```
npm run dev
```

Visit the app at http://localhost:3000

## 🧱 Tech Stack

-   Next.js 15
-   React
-   TypeScript
-   Tailwind CSS
-   shadcn
-   Prisma ORM
-   PostgreSQL
-   NextAuth.js
