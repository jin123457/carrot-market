import client from "../../../../libs/client";
import { NextResponse } from "next/server";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
// res.status(200).json({ text: "Hello" });
// }

export async function GET(request: Request) {
    await client.user.create({
        data: {
            email: "jin_ocx@nate.com12",
            name: "진솔",
        },
    });

    return NextResponse.json({ text: "Hello" });
}
