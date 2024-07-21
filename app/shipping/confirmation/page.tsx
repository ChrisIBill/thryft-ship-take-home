"use client";
import { useRouter } from "next/navigation";
export default function Confirmation() {
  const router = useRouter();

  router.push("/shipping/form");

  return <div>Confirmation</div>;
}
