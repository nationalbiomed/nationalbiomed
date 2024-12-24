'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'



export default function OurCustomers({Customers}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Our <span className="text-green-600">Customers</span>
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-marquee" data-aos="fade-up">
            {[...Customers, ...Customers].map((customer, index) => (
              <CustomerCard key={`${customer.id}-${index}`} customer={customer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomerCard({ customer }) {
  return (
    <div className="w-64 flex-shrink-0 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
      <div className="w-24 h-24 relative mb-4">
        <Image
          src={customer.image}
          alt={`${customer.title} logo`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-green-600 text-center mb-2">
        {customer.title}
      </h3>
      <p className="text-sm text-gray-600 text-center">
        {customer.description}
      </p>
    </div>
  );
}

