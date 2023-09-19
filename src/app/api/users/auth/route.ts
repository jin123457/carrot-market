import client from "@libs/server/client";
import { NextResponse } from "next/server";

interface ResponseType {
    ok: boolean;
    [key: string]: any;
}

export const POST = async (req: Request) => {
    try {
        const res = await req.json();
        const { phone, email } = res;
        const user = phone ? { phone: +phone } : { email };
        const payload = Math.floor(100000 + Math.random() * 900000) + "";
        const token = await client.token.create({
            data: {
                payload: "1234",
                user: {
                    connectOrCreate: {
                        where: {
                            ...user,
                        },
                        create: {
                            name: "Anonymous",
                            ...user,
                        },
                    },
                },
            },
        });
        return NextResponse.json({ ok: true });
    } catch (err) {
        return NextResponse.json({ ok: false });
    }
};
