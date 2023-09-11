import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
            <input type="text" required placeholder="Username" className="required: bg-yellow-500 invalid:bg-red-500 valid:bg-teal-500" />
            <input type="password" required placeholder="Password" />
            <input type="submit" value="login" className="bg-white" />
        </form>
    );
}
