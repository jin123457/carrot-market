import Link from "next/link";
import ChatList from "@components/chatList";
import Layout from "@components/layout";

const Chats = () => {
    return (
        <Layout title="채팅목록" hasTabBar canGoBack>
            <div className="py-3 divide-y-[1px]">
                {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <ChatList userName="Steve Jebs" message="See you tomorrow in the coner at 2pm!" detailNumber={i} key={i} />
                ))}
            </div>
        </Layout>
    );
};

export default Chats;
