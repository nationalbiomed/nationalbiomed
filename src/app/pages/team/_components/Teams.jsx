'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone } from 'lucide-react'



export default function Teams({ teamDataByCategory }) {
  const [teamData, setTeamData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const fetchedData = await Promise.all(
          teamDataByCategory.map(async (category) => {
            const response = await fetch(`http://localhost:3000/api/team/category/${category}`)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            const members = await response.json()
            return { category, members }
          })
        )
        setTeamData(fetchedData)
        setIsLoading(false)
      } catch (e) {
        setError('Failed to fetch team data')
        setIsLoading(false)
      }
    }

    fetchTeamData()
  }, [teamDataByCategory])

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  return (
    <div className="px-[5%] mb-[100px]">
      {teamData.map(({ category, members }) => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">
            {members.map((member) => (
              <div
                key={member.id}
                className="space-y-3 pb-5 cursor-pointer hover:shadow-2xl hover:bg-white transition ease-in-out duration-500 rounded-lg overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="aspect-square object-cover w-full" />
                <div className="px-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.post}</p>
                  {member.email && (
                    <p className="text-sm text-gray-500 mt-2 flex items-center">
                      <Mail className="mr-2 text-green-500" /> 
                      <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>
                    </p>
                  )}
                  {member.phone && (
                    <p className="text-sm text-gray-500 flex items-center">
                      <Phone className="mr-2 text-green-500" />
                      <a href={`tel:${member.phone}`} className="text-blue-600 hover:underline">{member.phone}</a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

