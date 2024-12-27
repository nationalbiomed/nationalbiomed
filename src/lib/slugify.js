import { transliterate } from "transliteration";

export const createSlug = (title) => {
  // Transliterate Nepali to English
  const transliteratedTitle = transliterate(title);

  const slug = transliteratedTitle
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen

  return slug;
};
