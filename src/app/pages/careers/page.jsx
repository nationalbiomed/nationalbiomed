import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import Link from "next/link";

async function getJobs() {
  const res = await fetch("https://nationalbiomedical.vercel.app/api/career", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return res.json();
}

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Decorative Elements */}
        <div className="absolute -left-4 top-0 h-12 w-12 rounded-full bg-blue-100" />
        <div className="absolute -right-4 top-0 h-8 w-8 transform rotate-45 bg-blue-100" />

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">
            Careers
          </h1>
          <p className="text-xl text-gray-600">
            Grab the opportunity to be part of our evolving company. Check out
            our open positions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                </div>
                <div className="mb-4 text-gray-600">{job.type}</div>
                <div className="mb-4 flex gap-2">
                  <Badge variant="secondary">{job.level}</Badge>
                  <Badge variant="success">Open</Badge>
                </div>
                {job.applyBefore && (
                  <div className="mb-4 text-sm text-gray-500">
                    Apply before:{" "}
                    {new Date(job.applyBefore).toLocaleDateString()}
                  </div>
                )}
                <Link href={`/pages/careers/${job.slug}`} passHref>
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
  );
}
