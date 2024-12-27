import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Users,
} from "lucide-react";

async function getJob(slug) {
  const res = await fetch(`https://nationalbiomedical.vercel.app//api/career/get/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch job data");
  }
  return res.json();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} days ago`;
}

export default async function JobDetailPage({ params: asyncParams }) {
  const params = await asyncParams; // Await the `params` object
  let job;
  try {
    job = await getJob(params.slug);
  } catch (error) {
    console.error(error);
    notFound();
  }

  if (!job) {
    notFound();
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <Link
        href="/pages/careers"
        className="mb-8 inline-flex items-center text-primary hover:underline"
      >
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
              <h2 className="mb-4 text-xl font-semibold">
                Key Responsibilities:
              </h2>
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
                <div className="font-medium">{formatDate(job.createdAt)}</div>
              </div>
              {job.applyBefore && (
                <div>
                  <div className="text-sm text-gray-500">Apply Before:</div>
                  <div className="font-medium">
                    {new Date(job.applyBefore).toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-8 text-gray-600">
              Email us at{" "}
              <a
                href="mailto:info@nationalbiomed.com"
                className="text-primary hover:underline"
              >
                info@nationalbiomed.com
              </a>{" "}
              for more information.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
