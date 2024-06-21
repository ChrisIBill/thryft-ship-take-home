import React from "react";

import { ShippingFormHeader } from "@/components/icons";
import ShippingForm from "@/components/shipping-form";

export default function ShippingFormPage() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-2/3 lg:w-1/2">
      <div className="flex flex-col gap-1">
        <ShippingFormHeader />
      </div>
      <ShippingForm />
    </div>
  );
}
