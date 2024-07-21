import Link from "next/link";

export default function ShippingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Shipping</h1>
      <Link href="/shipping/confirmation">Confirmation</Link>
    </div>
  );
}
