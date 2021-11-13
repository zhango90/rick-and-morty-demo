import { useCallback } from "react";
import { queryCache } from "react-query";
const apiURL = process.env.REACT_APP_API_URL;

export const client = async (
  endpoint,
  { data, headers: customHeaders, ...customConfig } = {}
) => {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders
    },
    ...customConfig
  };

  const url = `${apiURL}/${endpoint}`;

  return window.fetch(url, config).then(async (response) => {
    if (response.status === 401) {
      queryCache.clear();

      // refresh the page
      window.location.assign(window.location);
      return Promise.reject({ message: "Please re-authenticate." });
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useClient = () => {
  return useCallback((endpoint, config) => client(endpoint, { ...config }), []);
};
