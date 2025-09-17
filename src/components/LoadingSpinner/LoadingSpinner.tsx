import React from "react";
import { ColorRing } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#00bdd3", "#00bdd3", "#00bdd3", "#00bdd3", "#00bdd3"]}
    />
  );
};

export default LoadingSpinner;
