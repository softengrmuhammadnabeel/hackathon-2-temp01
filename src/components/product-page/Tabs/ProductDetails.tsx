import React from "react";

export type SpecItem = {
  label: string;
  value: string;
};

const specsData: SpecItem[] = [
  {
    label: " Fabric composition",
    value: "100% Cotton",
  },
  {
    label: "Care instructions",
    value: "Machine wash warm, tumble dry",
  },
  {
    label: "Size type",
    value: "Classic Fit",
  },
  {
    label: "Color Design",
    value: "Solid",
  },
];

const ProductDetails = () => {
  return (
    <>
      {specsData.map((item, i) => (
        <div className="grid grid-cols-3" key={i}>
          <div>
            <p className="text-sm py-3 w-full leading-7 lg:py-4 pr-2 text-neutral-500">
              {item.label}
            </p>
          </div>
          <div className="col-span-2 py-3 lg:py-4 border-b">
            <p className="text-md w-full leading-7 text-neutral-800 font-medium">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
