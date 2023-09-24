import SingleProduct from "@/components/PagesSection/Shops/SingleProductPage/SingleProduct";

export const metadata = {
  title: "FYM | product details",
  description: "FYM product Details",
};

const SingleProductPage = ({ params }) => {
  return (
    <div>
      <SingleProduct id={params.id} />
    </div>
  );
};

export default SingleProductPage;
