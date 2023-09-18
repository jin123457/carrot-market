import { Inter } from "next/font/google";
import Layout from "@components/layout";
import Link from "next/link";
import Item from "@components/item";
import FixedButton from "@components/fixedButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Layout title="홈" hasTabBar>
            <div className="flex flex-col space-y-5 py-10">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <Item name="New iPhone 14" kind="Black" price={95} heart={1} detailNumber={i} key={i} />
                ))}
            </div>
            <FixedButton link="/items/upload" position="Home" />
        </Layout>
    );
}
