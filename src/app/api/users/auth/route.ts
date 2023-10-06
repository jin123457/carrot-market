import client from "@libs/server/client";
import sendEmail from "@libs/server/email";
import { NextResponse } from "next/server";
import { Twilio } from "twilio";

interface ResponseType {
    ok: boolean;
    [key: string]: any;
}
const twilioClient = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export const POST = async (req: Request) => {
    try {
        const res = await req.json();
        const { phone, email } = res;
        const user = phone ? { phone: phone } : { email };
        const payload = Math.floor(100000 + Math.random() * 900000) + "";
        const token = await client.token.create({
            data: {
                payload,
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
        if (phone) {
            // await twilioClient.messages.create({
            //     messagingServiceSid: process.env.TWILIO_MESSAGE_SID,
            //     to: process.env.MY_PHONE_NUMBER!,
            //     body: `login suscess payload : ${payload}`,
            // });
        } else if (email) {
            // sendEmail(email, payload);
        }
        return NextResponse.json({ ok: true });
    } catch (err) {
        return NextResponse.json({ ok: false });
    }
};
