import { Input } from "@nextui-org/input";

export const ShippingFormInput = ({ ...props }: any) => {
  return (
    <Input
      labelPlacement="outside"
      placeholder=" "
      radius="sm"
      type="Generic"
      variant="bordered"
      {...props}
    />
  );
};
