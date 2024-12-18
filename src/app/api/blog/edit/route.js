import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function PATCH(request) {
    try {
        const body = await request.json();
        const {
            id,
            title,
                slug,
                image,
                description
        } = body;

        const blog = await db.blog.update({
            where: { id },
            data: {
                title,
                slug,
                image,
                description
            },
        });

        return NextResponse.json(blog, { status: 200 });
    } catch (error) {
        console.error("Error updating blog:", error);
        return NextResponse.json({ error: "Error updating blog" }, { status: 500 });
    }
}