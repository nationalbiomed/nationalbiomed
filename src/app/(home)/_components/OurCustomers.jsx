'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const Customers = [
  {
    id: 1,
    name: "Department of Health Services",
    logo: "/OurCustomers/Emblem_of_Nepal.png",
    description: "Ministry of Health",
  },
  {
    id: 2,
    name: "FHI360",
    logo: "/OurCustomers/fhi360-logo.svg",
    description: "Nepal Country Office",
  },
  {
    id: 3,
    name: "Opportunity Village Network",
    logo: "/OurCustomers/OVN.jpg",
    description: "Ministry of Health",
  },
  {
    id: 4,
    name: "Province Health Logistics Management Center",
    logo: "/OurCustomers/Emblem_of_Nepal.png",
    description: "Gandaki-Province",
  },
  {
    id: 5,
    name: "Save The Children",
    logo: "/OurCustomers/stc_logo.svg",
    description: "Nepal Country Office",
  },
];

export default function OurCustomers() {
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
          <div className="flex gap-8 animate-marquee">
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
          src={customer.logo}
          alt={`${customer.name} logo`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-green-600 text-center mb-2">
        {customer.name}
      </h3>
      <p className="text-sm text-gray-600 text-center">
        {customer.description}
      </p>
    </div>
  );
}

