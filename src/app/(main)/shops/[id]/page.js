import SingleProduct from "@/components/PagesSection/Shops/SingleProductPage/SingleProduct";

const SingleProductPage = ({ params }) => {
  return (
    <div className="">
      <SingleProduct id={params.id} />
    </div>
  );
};

export default SingleProductPage;
