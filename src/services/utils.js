export const getQueryParam = (url, queryParam) => {
  const foundParams = new URLSearchParams(url);
  console.log("params :>> ", foundParams);
  foundParams.get(queryParam);
};
