'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Find the Best Schools Near You
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Compare school performance, Ofsted ratings, and subjects — by postcode or region.
        </p>
        <div className="mt-6 flex justify-center">
          <Button size="lg" className="gap-2">
            Get Started
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
