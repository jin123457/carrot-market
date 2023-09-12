import Item from "../../../components/item";
import Layout from "../../../components/layout";

const Bought = () => {
  return (
    <Layout title="구매내역" hasTabBar canGoBack>
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
    </Layout>
  );
};

export default Bought;
