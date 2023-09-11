import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <form className="flex flex-col space-y-2  p-5">
            <div className="flex flex-col-reverse">
                <input type="text" required placeholder="Username" className="border p-1 peer border-gray-400 rounded-lg" />
                <span className="hidden peer-invalid:block peer-invalid:text-red-500">This input in invalid</span>
                <span className="hidden peer-valid:block peer-valid:text-teal-500">Awesome username</span>
            </div>
            <input type="submit" value="login" className="bg-white" />
        </form>
    );
}
