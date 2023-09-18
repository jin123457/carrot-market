import client from "@libs/server/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const res = await req.json();
    const { phone, email } = res;
    const payload = phone ? { phone: +phone } : { email };
    const user = await client.user.upsert({
        where: {
            ...payload,
        },
        create: {
            name: "Anonymous",
            ...payload,
        },
        update: {},
    });
    console.log(user);
    // if (email) {
    //     user = await client.user.findUnique({
    //         where: {
    //             email,
    //         },
    //     });
    //     if (user) console.log("found it.");
    //     if (!user) {
    //         console.log("did not found. will create.");
    //         user = await client.user.create({
    //             data: {
    //                 name: "Anonymous",
    //                 email,
    //             },
    //         });
    //     }
    // }

    // if (phone) {
    //     user = await client.user.findUnique({
    //         where: {
    //             phone: +phone,
    //         },
    //     });
    //     if (user) console.log("found it.");
    //     if (!user) {
    //         console.log("did not found. will create.");
    //         user = await client.user.create({
    //             data: {
    //                 name: "Anonymous",
    //                 phone: +phone,
    //             },
    //         });
    //     }
    //     console.log(user);
    // }
    return NextResponse.json({ ok: true });
};
