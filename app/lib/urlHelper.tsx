const getImageUrl = (path = "") => {
  const siteUrl = process.env.DXP_URL as string;
  if (!path) {
    return "";
  }

  return path.startsWith("http") ? path : siteUrl + path;
};

export { getImageUrl };
