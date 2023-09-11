import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <form className="flex flex-col space-y-2  p-5">
            <details className="select-none open:text-white open:bg-indigo-400">
                <summary className="cursor-pointer">What is my fav. food.</summary>
                <span>김치</span>
            </details>
            <ul className="list-decimal marker:text-teal-500">
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
            </ul>
            <input
                type="file"
                className="file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400 file:transition-colors file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border"
            />
            <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic voluptatem nesciunt ipsa autem! Necessitatibus ipsa facilis voluptates nulla
                ab corrupti quae porro totam. Iusto incidunt fugiat ipsam quod sit.
            </p>
        </form>
    );
}
