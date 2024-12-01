import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/explore" className="text-sm hover:underline">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="/sell" className="text-sm hover:underline">
                    Sell
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-sm hover:underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-center">
              © {new Date().getFullYear()} Boilerplate Market. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 