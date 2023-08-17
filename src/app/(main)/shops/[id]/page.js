"use client"
import SingleProduct from "@/components/PagesSection/Shops/SingleProductPage/SingleProduct";
import { useRouter } from "next/router";

const SingleProductPage = () => {
  // const router = useRouter()
  // const id = router.query.id
  // console.log(router)
  return <div className="mt-40"><SingleProduct/></div>;
};

export default SingleProductPage;
