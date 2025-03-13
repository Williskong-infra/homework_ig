import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { post_id: string } }) {
    const { post_id } = params;

    return NextResponse.json({ message: `Post ${post_id} liked` });
}