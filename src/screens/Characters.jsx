import React from "react";
import { usePaginatedCharacters } from "services/character";

const Characters = () => {
  const {
    info,
    results,
    isError,
    isFetching,
    isPreviousData,
    handleNextPage,
    handlePrevPage
  } = usePaginatedCharacters();
  console.log("data :>> ", results);
  return <div>Hello</div>;
};

export default Characters;
