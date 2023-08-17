"use client";
// import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import shopData from "../../data/shopData"; // Import your shop data

const ShopDetail = ({ params }) => {
  console.log(params);
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    fetch("/data/shop.json")
      .then((res) => res.json())
      .then((data) => setShopData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // const router = useRouter();
  // const { id } = router.query;
  // const id = params.id;
  // const item = shopData.find((item) => item.id === Number(id));

  // if (!item) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <p>shop detail is Loading...</p>
      {/* <h2>{item.title}</h2>
      <p>{item.description}</p> */}
      {/* Display other details of the item */}
    </div>
  );
};

export default ShopDetail;
