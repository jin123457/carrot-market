import client from "../../../../../libs/server/client";
import { NextResponse } from "next/server";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
// res.status(200).json({ text: "Hello" });
// }

export const POST = async (req: Request) => {
    const res = await req.json();
    console.log(res);
    return NextResponse.json({ res });
};
