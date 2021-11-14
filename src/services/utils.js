import { useCallback, useState } from "react";

export const getQueryParam = (url, queryParam) => {
  const foundParams = new URLSearchParams(url);
  foundParams.get(queryParam);
};

export const useToggle = () => {
  const [toggled, setToggled] = useState(false);

  const toggleOn = useCallback(() => {
    setToggled(true);
  }, []);
  const toggleOff = useCallback(() => {
    setToggled(false);
  }, []);
  return { toggled, toggleOn, toggleOff };
};

export const parseEmptyToUnknownString = (obj) => {
  for (const key in obj) {
    obj[key] = !!obj[key] ? obj[key] : "Unknown";
  }
  return obj;
};
