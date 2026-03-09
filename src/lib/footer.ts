import { getCollection } from "astro:content";

import type { FooterContentData } from "@/lib/types";

export const getFooterContent = async (): Promise<FooterContentData> => {
  const footerEntries = await getCollection("footer");

  if (footerEntries.length === 0) {
    throw new Error("Missing footer content in src/data/footer.json");
  }

  return footerEntries.sort((a, b) => a.data.id - b.data.id)[0].data;
};
