import { NextResponse } from "next/server";
import {prismaClient} from "../../../../lib/prisma"

export async function GET() {
    return NextResponse.json({
        message: "Sign in response API"
    })
}

export async function POST(req:Request) {
    const body = await req.json();

    const username = body.username;
    const password = body.password;
    const email = body.email;
    const name = body.name;

    // check for username, password, or store in DB

    const user = await prismaClient.user.create({
        data: {
            username,
            password,
            email,
            name
        }
    })

    return NextResponse.json({
        message: "User Created",
        userCreated: user
    })
}