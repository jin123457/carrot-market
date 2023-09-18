import { NextResponse } from "next/server";

export default function withHandler(method: "GET" | "POST" | "DELETE", fn: (req: Request, res: Response) => void) {
    return async function (req: Request, res: Response) {
        NextResponse.json({ ok: true });
    };
}
