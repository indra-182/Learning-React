import React from "react";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const { id } = useParams();
  return (
    <div>
      <div>detail {id}</div>
    </div>
  );
};

export default DetailProductPage;
