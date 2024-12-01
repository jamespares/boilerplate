# SaaS Boilerplate Marketplace

A modern marketplace for buying and selling high-quality SaaS boilerplates. Built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features

- 🛍️ Browse and purchase SaaS boilerplates
- 💰 Sell your own boilerplates
- 🔒 Secure authentication
- 💳 Stripe payment integration
- 🎨 Modern UI with dark mode support
- 📱 Fully responsive design

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **Payments:** Stripe
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/boilerplate-marketplace.git
   cd boilerplate-marketplace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the environment variables in `.env`:
   ```
   DATABASE_URL="postgresql://..."
   NEXTAUTH_SECRET="your-secret"
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
   ```

5. Set up the database:
   ```bash
   npx prisma db push
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # App router pages
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript types
├── prisma/              # Database schema
├── public/             # Static assets
└── ...
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
