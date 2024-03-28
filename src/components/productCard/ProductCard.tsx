"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const ProductCard = ({ flashSaleProducts }) => {
  console.log(flashSaleProducts);

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {flashSaleProducts.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[360px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
