"use client";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Input } from "@nextui-org/input";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import React from "react";

interface IProduct {
  [key: string]: string | number | string[];
  name: string;
  price: string;
  quantity: string;
  image: string;
  id: number;
  styles: string[];
}
type ProductKeys = keyof IProduct;
const columns = [
  { uid: "image", name: "Image" },
  { uid: "name", name: "Name" },
  { uid: "price", name: "Price" },
  { uid: "quantity", name: "Quantity" },
  { uid: "styles", name: "Style" },
];

const data = [
  {
    id: 1,
    name: "T-Shirt",
    price: "$10",
    quantity: "3",
    image: "/images/t-shirt.jpg",
    styles: ["Red", "Blue", "Green"],
  },
  {
    id: 2,
    name: "Shoes",
    price: "$3",
    quantity: "4",
    image: "/images/shoes.webp",
    styles: ["Brown", "Black", "White"],
  },
  {
    id: 3,
    name: "Baseball Hat",
    price: "$5",
    quantity: "5",
    image: "/images/baseball-hat.jpg",
    styles: ["Black", "White", "Red"],
  },
];
const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function CheckoutTable() {
  const renderCell = React.useCallback(
    (product: IProduct, columnKey: ProductKeys) => {
      const cellValue = product[columnKey];

      switch (columnKey) {
        case "image":
          return (
            <img
              alt="product"
              className="w-10 h-10"
              src={cellValue as string}
            />
          );
        case "name":
          return <p>{cellValue}</p>;
        case "price":
          return <p className="text-bold text-sm capitalize">{cellValue}</p>;
        case "quantity":
          return (
            <Input
              className="w-20"
              // classNames={{
              //   input: "[&>div]:bg-[#565BD7] [&>div]:text-white",
              // }}
              // label="Quantity"
              // labelPlacement="outside"
              color="default"
              defaultValue={cellValue as string}
              size="sm"
              type="number"
            />
          );
        case "styles":
          if (typeof cellValue === "string" || typeof cellValue === "number") {
            return <p>{cellValue}</p>;
          }

          return (
            <Autocomplete>
              {cellValue.map((item, index) => (
                <AutocompleteItem key={item + index} value={item}>
                  {item}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          );
        default:
          return cellValue;
      }
    },
    [],
  );

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              // @ts-ignore
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
