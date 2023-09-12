import { Inter } from "next/font/google";
import Layout from "../../components/layout";
import Link from "next/link";
import Item from "../../components/item";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5 py-10">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            name="New iPhone 14"
            kind="Black"
            price={95}
            heart={1}
            detailNumber={i}
            key={i}
          />
        ))}
      </div>
      <Link
        href="/items/upload"
        className="fixed hover:bg-orange-500 transition-colors cursor-pointer bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl text-white"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </Link>
    </Layout>
  );
}
