"use server";
export async function redirect(url: string): Promise<Response> {
  redirect("/shipping/completed");
}
