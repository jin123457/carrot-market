import client from "@libs/server/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const res = await req.json();
        const { token } = res;
        console.log(token);
        return NextResponse.json({ token: token });
    } catch (err) {
        return NextResponse.json({ ok: false });
    }
};
