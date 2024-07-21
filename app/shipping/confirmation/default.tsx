import { redirect } from "next/navigation";

export default function DefaultConfirmationModal() {
  redirect("/shipping/form");

  return null;
}
