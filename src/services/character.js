import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useClient } from "./api-client";

export const usePaginatedCharacters = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const client = useClient();
  const {
    data: { info, results } = {},
    isError,
    isFetching,
    isLoading,
    isPreviousData
  } = useQuery(["character", page], () => client("character?page=" + page), {
    keepPreviousData: true,
    staleTime: 5000
  });

  useEffect(() => {
    if (info?.next) {
      queryClient.prefetchQuery(["character", page + 1], () =>
        client("character?page=" + (page + 1))
      );
    }
  }, [info, page, queryClient, client]);
  const handleNextPage = () => {
    setPage((old) => (info?.next ? old + 1 : old));
  };
  const handlePrevPage = () => setPage((old) => Math.max(old - 1, 0));

  return {
    info,
    results,
    isError,
    isLoading,
    isFetching,
    isPreviousData,
    handleNextPage,
    handlePrevPage
  };
};
