import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncApiCall } from "../action/ProductApi";

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncApiCall());
  }, []);

  const { product } = useSelector((state) => state.ProductReducer);

  return (
    <div className="w-full">
      <div className="overflow-x-auto flex gap-4 bg-red-500 p-4">
        {product.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded-lg w-[18rem] flex-shrink-0 bg-gray-700 p-4"
            >
              <div className="h-[6rem] w-full rounded-lg">
                <img
                  src={item.image}
                  loading="lazy"
                  alt=""
                  className="w-full object-contain h-full"
                />
              </div>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
