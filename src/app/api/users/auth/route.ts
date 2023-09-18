import client from "@libs/server/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const res = await req.json();
    console.log(res);
    return NextResponse.json({ res });
};
