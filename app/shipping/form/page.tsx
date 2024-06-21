import React from "react";

import { ShippingFormHeader } from "@/components/icons";
import ShippingForm from "@/components/shipping-form";

export default function ShippingFormPage() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-3/4 lg:w-2/3">
      <div className="flex flex-col gap-1">
        <ShippingFormHeader />
      </div>
      <ShippingForm />
    </div>
  );
}
