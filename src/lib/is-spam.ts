export const isSpam = (text: string): boolean => {
  if (!text) return false;
  const words = text.split(/\s+/);

  const hasSpammyWord = words.some(word => {
    const capsCount = (word.match(/[A-Z]/g) || []).length;
    const isFullyUpper = word === word.toUpperCase() && word.length > 1;
    return capsCount > 5 && !isFullyUpper;
  });

  return hasSpammyWord;
};
