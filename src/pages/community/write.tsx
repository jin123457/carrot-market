import Layout from "../../../components/layout";

const Write = () => {
    return (
        <Layout title="커뮤니티 글쓰기" hasTabBar canGoBack>
            <div className="px-4 py-10">
                <textarea
                    className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
                    rows={4}
                    placeholder="Ask this question!"
                />
                <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
                    submit
                </button>
            </div>
        </Layout>
    );
};

export default Write;
