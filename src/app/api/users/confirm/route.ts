import client from "@libs/server/client";
import { NextResponse } from "next/server";

import { submitCookieToStorageServerAction } from "@libs/server/serverActions";
export const POST = async (req: Request) => {
    const { token } = await req.json();

    const foundToken = await client.token.findUnique({
        where: {
            payload: token,
        },
    });

    if (!foundToken) return NextResponse.json({ status: 404 });

    await submitCookieToStorageServerAction(foundToken.userId);

    await client.token.deleteMany({
        where: {
            userId: foundToken.userId,
        },
    });

    return NextResponse.json({ ok: true }, { status: 200 });
};
