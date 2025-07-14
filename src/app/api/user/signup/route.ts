import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Sign up response API"
    })
}   

export async function POST(req:Request) {
    const body = await req.json();
    return NextResponse.json({
        message: "User Created",
        body
    })
}