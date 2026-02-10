export const escapeHtml = (str: string) => {
  return str.replace(/[&<>"'/=:]/g, char => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      case "/":
        return "&#x2F;";
      case "=":
        return "&#x3D;";
      case ":":
        return "&#58;";
      case ";":
        return "&#59;";
      default:
        return char;
    }
  });
};
