import Layout from "@components/layout";
import Message from "@components/message";

const ChatDetail = () => {
    return (
        <Layout title="oo님과의 채팅" canGoBack>
            <div className="py-10 px-4 space-y-4">
                <div className="pb-5">
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                        <div key={i} className="flex flex-col space-y-2 mb-2 last:mb-0">
                            <Message text="Hi how much are you selling them for?" />
                            <Message text="I want ￦20,000" messageRe />
                            <Message text="미쳤어" />
                        </div>
                    ))}
                </div>
                <div className="fixed w-full mx-auto px-8 bg-white bottom-0 inset-x-0 py-2">
                    <div className="flex relative items-center">
                        <input
                            type="text"
                            className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus outline-none focus:border-orange-500"
                        />
                        <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                            <button className="flex focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 cursor-pointer">
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChatDetail;
