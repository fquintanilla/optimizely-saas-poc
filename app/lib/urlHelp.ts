const isEditOrPreviewMode = () => {
  if (typeof window === "undefined") return false;
  const params = window.location.search.split(/[&?]+/);
  return (
    params.includes("epieditmode=true") || params.includes("epieditmode=false")
  );
};

export { isEditOrPreviewMode };
