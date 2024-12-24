'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function MarqueeDistributors({Distributors}) {
  const [duplicatedDistributors, setDuplicatedDistributors] = useState(Distributors)

  useEffect(() => {
    setDuplicatedDistributors([...Distributors, ...Distributors])
  }, [])

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Sole <span className="text-green-600">Distributors</span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {duplicatedDistributors.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-48 mx-4"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="p-6 flex flex-col items-center">
                    <div className="w-32 h-32 relative mb-4">
                      <Image
                        src={item.image}
                        alt={`Distributor ${item.id} logo`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

