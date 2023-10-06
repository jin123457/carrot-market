"use client";
import client from "@libs/server/client";
import { NextResponse } from "next/server";

import { submitCookieToStorageServerAction } from "@libs/server/serverActions";
export const GET = async (req: Request) => {
    const { token } = await req.json();
    console.log(token);
    return NextResponse.json({ ok: true });
};
