import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request) {
    try {
        // Get query parameters for page and limit
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");

        // Validate and calculate offset for pagination
        if (page < 1 || limit < 1) {
            return NextResponse.json({ error: "Invalid page or limit" }, { status: 400 });
        }

        const offset = (page - 1) * limit;

        // Fetch blogs with pagination
        const blogs = await db.blog.findMany({
            orderBy: {
                id: 'desc',
            },
            skip: offset,
            take: limit,
        });

        // Get the total number of blogs for pagination metadata
        const totalBlogs = await db.blog.count();
        const totalPages = Math.ceil(totalBlogs / limit);

        // Return paginated response with metadata
        return NextResponse.json({
            blogs,
            meta: {
                currentPage: page,
                totalPages,
                totalBlogs,
                limit,
            },
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Error getting blogs" }, { status: 500 });
    }
}
