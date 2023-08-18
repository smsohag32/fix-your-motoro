import React from "react";
import { Puff } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[100vh]">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#f02801"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
