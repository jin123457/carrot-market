import Link from "next/link";
import Layout from "../../../components/layout";
import CommunityList from "../../../components/communityList";
import FixedButton from "../../../components/fixedButton";

const Community = () => {
    return (
        <Layout title="커뮤니티" hasTabBar canGoBack>
            <div className="py-10 px-4 space-y-8 pt-8">
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <CommunityList
                        communityIdx={i}
                        key={i}
                        category="동네질문"
                        question="What is the best mandu restaurant?"
                        user="니꼬"
                        regdate="18시간 전"
                        sympathy={1}
                        answer={1}
                    />
                ))}
                <FixedButton link="/community/write" position="community" />
            </div>
        </Layout>
    );
};

export default Community;
