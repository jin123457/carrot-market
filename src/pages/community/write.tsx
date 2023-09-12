import Button from "../../../components/button";
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
        <Button title="submit" />
      </div>
    </Layout>
  );
};

export default Write;
