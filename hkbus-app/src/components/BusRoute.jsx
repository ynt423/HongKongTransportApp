import React from "react";

const BusRoute = ({ data }) => {
  return (
    <div>
      <p>{data.route}</p>
      <p>{data.stop}</p>
    </div>
  );
};

export default BusRoute;
