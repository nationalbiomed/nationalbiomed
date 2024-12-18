import { NextResponse } from "next/server";
import db from "@/lib/db"; // Import your Prisma client

export async function GET(req, { params }) {

    const slug = (await params).slug;

    try {
        const blog = await db.blog.findFirst({
            where: {
                slug
            }
        });

        return NextResponse.json(blog, { status: 200 });
    } catch (error) {
        console.error("Error fetching blog:", error);
        return NextResponse.json({ error: "Error fetching blog" }, { status: 500 });
    }
}