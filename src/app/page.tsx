import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Start Your Founder Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              The best place to find high-quality boilerplates for your next business idea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/explore"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Explore Boilerplates
              </Link>
              <Link
                href="/sell"
                className="text-sm font-semibold leading-6 flex items-center gap-1"
              >
                Sell Your Boilerplate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/explore?category=${category.slug}`}
                className="group relative rounded-lg border p-6 hover:border-blue-600 transition-colors"
              >
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Boilerplates */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured Boilerplates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBoilerplates.map((boilerplate) => (
              <div
                key={boilerplate.title}
                className="rounded-lg border bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{boilerplate.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {boilerplate.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold">${boilerplate.price}</span>
                    <Link
                      href={`/boilerplate/${boilerplate.id}`}
                      className="text-blue-600 hover:text-blue-500"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    name: "SaaS Starter",
    slug: "saas-starter",
    description: "Complete SaaS foundations with authentication, billing, and user management.",
  },
  {
    name: "E-commerce",
    slug: "ecommerce",
    description: "Full-featured online stores with product management and payment processing.",
  },
  {
    name: "AI Applications",
    slug: "ai-applications",
    description: "Ready-to-use AI integrations with popular models and APIs.",
  },
]

const featuredBoilerplates = [
  {
    id: "1",
    title: "Ultimate SaaS Kit",
    description: "Everything you need to launch a SaaS product in days, not months.",
    price: 299,
  },
  {
    id: "2",
    title: "E-commerce Pro",
    description: "Professional e-commerce platform with Stripe integration.",
    price: 199,
  },
  {
    id: "3",
    title: "AI Chat Platform",
    description: "Build your own ChatGPT-like application with this starter kit.",
    price: 399,
  },
]
