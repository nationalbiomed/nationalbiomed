import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            title,
            slug,
            image,
            description
        } = body;

        const blog = await db.blog.create({
            data: {
                title,
                slug,
                image,
                description
            },
        });

        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        console.error("Error creating blog:", error);
        return NextResponse.json({ error: "Error creating blog" }, { status: 500 });
    }
}