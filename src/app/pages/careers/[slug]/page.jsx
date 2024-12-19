import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowUpRight, Briefcase, Calendar, Users } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'



const jobs = [
  {
    id: "wordpress-developer",
    title: "WordPress Developer",
    type: "Full Time",
    level: "Mid Level",
    status: "active",
    vacancies: 2,
    salary: "Negotiable",
    skills: ["Web Development", "WordPress", "PHP", "Laravel"],
    responsibilities: [
      "Develop and maintain WordPress websites for a variety of clients.",
      "Customize themes and plugins to meet specific project requirements.",
      "Optimize websites for performance, speed, and SEO.",
      "Troubleshoot and resolve website issues.",
      "Collaborate with designers and other developers to ensure project success.",
    ],
    qualifications: [
      "Proven experience as a WordPress Developer.",
      "Strong understanding of front-end technologies, including HTML5, CSS3, JavaScript, and jQuery.",
      "Experience with PHP and MySQL.",
      "Familiarity with website analytics and SEO best practices.",
      "Ability to work independently and as part of a team.",
      "Excellent problem-solving skills and attention to detail.",
    ],
    experience: "1 Year",
    postedDate: "142 days ago",
    applyBefore: "August 30, 2024",
  },

]

export default function JobDetailPage({ params }) {
  const job = jobs.find(j => j.id === params.slug)

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/careers" className="mb-8 inline-flex items-center text-primary hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all jobs
      </Link>
      <Card>
        <CardContent className="p-8">
          <div className="relative">
            {/* Decorative Triangle */}
            <div className="absolute -right-4 top-0 h-8 w-8 transform rotate-45 bg-blue-100" />
            
            <h1 className="mb-8 text-4xl font-bold">{job.title}</h1>
            
            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Level:</div>
                  <div className="font-medium">{job.level}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">No. of Vacancy:</div>
                  <div className="font-medium">{job.vacancies}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Job Type:</div>
                  <div className="font-medium">{job.type}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Salary:</div>
                  <div className="font-medium">{job.salary}</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2 text-sm text-gray-500">Skills:</div>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold">Key Responsibilities:</h2>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold">Qualifications:</h2>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                {job.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <div className="text-sm text-gray-500">Experience:</div>
                <div className="font-medium">{job.experience}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Posted:</div>
                <div className="font-medium">{job.postedDate}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Apply Before:</div>
                <div className="font-medium">{job.applyBefore}</div>
              </div>
            </div>

            <div className="mb-8 text-gray-600">
              Email us at{" "}
              <a href="mailto:info@appharu.com" className="text-primary hover:underline">
                info@appharu.com
              </a>{" "}
              for more information.
            </div>

            <Button size="lg" className="w-full md:w-auto">
              Apply Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

