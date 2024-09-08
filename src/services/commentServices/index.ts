import { delay } from "@/utils/delay";

export const getCommentsById = async (id: string, wait = false) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }
  if (wait) {
    delay(2000);
  }
  return res.json();
};
