import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from 'lucide-react'
import Link from "next/link"



const jobs = [
  {
    id:1,
    slug: "wordpress-developer",
    title: "WordPress Developer",
    type: "Full Time",
    level: "Mid Level",
    status: "active",
  },
  {
    id:2,
    slug: "sales-and-marketing-officer-female",
    title: "Sales and Marketing Officer (Female)",
    type: "Full Time",
    level: "Junior Level",
    status: "active",
  },
  {
    id:3,
    slug: "technical-writer",
    title: "Technical Writer",
    type: "Full Time",
    level: "Mid Level",
    status: "active",
  },
  {
    id:4,
    slug: "system-and-cloud-admin",
    title: "System and Cloud Admin",
    type: "Full Time",
    level: "Mid Level",
    status: "active",
  },
]

export default function CareersPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Decorative Elements */}
        <div className="absolute -left-4 top-0 h-12 w-12 rounded-full bg-blue-100" />
        <div className="absolute -right-4 top-0 h-8 w-8 transform rotate-45 bg-blue-100" />
        
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">Careers</h1>
          <p className="text-xl text-gray-600">
            Grab the opportunity to be part of our evolving company. Check out our open positions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                </div>
                <div className="mb-4 text-gray-600">{job.type}</div>
                <div className="mb-4 flex gap-2">
                  <Badge variant="secondary">{job.level}</Badge>
                  <Badge variant={job.status === "active" ? "success" : "destructive"}>
                    {job.status === "active" ? "Open" : "Closed"}
                  </Badge>
                </div>
                <Link href={`/careers/${job.slug}`} passHref>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative Dots Pattern */}
        <div className="absolute bottom-0 right-0 -z-10">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-blue-100" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

