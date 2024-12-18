import { NextResponse } from "next/server";
import db from "@/lib/db"; // Import your Prisma client

export async function GET(req, { params }) {

    const slug = (await params).slug;

    try {
        const team = await db.team.findFirst({
            where: {
                slug
            }
        });

        return NextResponse.json(team, { status: 200 });
    } catch (error) {
        console.error("Error fetching team:", error);
        return NextResponse.json({ error: "Error fetching team" }, { status: 500 });
    }
}