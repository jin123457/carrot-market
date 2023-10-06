import { getServerActionSession } from "@libs/server/iron-cookie";

export const submitCookieToStorageServerAction = async (cookie: number) => {
    const session = await getServerActionSession();
    session.user = { id: cookie };
    await session.save();
};

export const readCookieFromStorageServerAction = async (): Promise<any> => {
    const session = await getServerActionSession();
    return session || "No Cookie Stored!";
};
