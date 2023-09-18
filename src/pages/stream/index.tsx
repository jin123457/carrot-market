import Link from "next/link";
import Layout from "@components/layout";
import FixedButton from "@components/fixedButton";

const Live = () => {
    return (
        <Layout title="스트리밍" hasTabBar canGoBack>
            <div className="py-10 px-4 space-y-4 pt-0">
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <Link href={`/stream/${i}`} key={i} className="pt-4 px-4">
                        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
                        <h3 className="font-medium text-gray-700 text-lg mt-2">Let's try potatos</h3>
                    </Link>
                ))}
                <FixedButton link="/stream/create" position="stream" />
            </div>
        </Layout>
    );
};

export default Live;
