import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Next.js and React
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Leverage the power of modern web technologies for optimal
                  performance and developer experience.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Database className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Postgres and Drizzle ORM
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Robust database solution with an intuitive ORM for efficient
                  data management and scalability.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Stripe Integration
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Seamless payment processing and subscription management with
                  industry-leading Stripe integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to launch your SaaS?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our template provides everything you need to get your SaaS up
                and running quickly. Don't waste time on boilerplate – focus on
                what makes your product unique.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="https://github.com/nextjs/saas-starter" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full"
                >
                  View the code now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
