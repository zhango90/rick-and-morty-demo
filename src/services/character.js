import { useEffect, useState } from "react";
import { useQuery, useQueries, useQueryClient } from "react-query";
import { useClient } from "./api-client";
import { parseEmptyToUnknownString } from "./utils";
export const usePaginatedCharacters = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const client = useClient();
  const {
    data: { info, results } = {},
    isError,
    isLoading
  } = useQuery(["characters", page], () => client("character?page=" + page), {
    keepPreviousData: true,
    staleTime: 5000
  });

  useEffect(() => {
    if (info?.next) {
      queryClient.prefetchQuery(["characters", page + 1], () =>
        client("character?page=" + (page + 1))
      );
    }
  }, [info, page, queryClient, client]);
  const handleNextPage = () => {
    setPage((old) => (info?.next ? old + 1 : old));
  };
  const handlePrevPage = () => setPage((old) => Math.max(old - 1, 0));

  const getNextPageProps = () => ({
    onClick: handleNextPage,
    disabled: !info.next
  });
  const getPrevPageProps = () => ({
    onClick: handlePrevPage,
    disabled: !info.prev
  });

  return {
    results,
    isError,
    isLoading,
    getNextPageProps,
    getPrevPageProps
  };
};

export const useCharacterInfo = (charInfo) => {
  const client = useClient({ isCompleteUrl: true });

  const episodeQueries = charInfo?.episode?.map((episode) => ({
    queryKey: ["episodes", episode],
    queryFn: () => client(episode),
    staleTime: Infinity
  }));

  const results = useQueries([
    {
      queryKey: ["character", charInfo.id, "origin"],
      queryFn: () => client(charInfo?.origin?.url),
      staleTime: Infinity
    },
    {
      queryKey: ["character", charInfo.id, "location"],
      queryFn: () => client(charInfo?.location?.url),
      enabled: !!charInfo?.location?.url,
      staleTime: Infinity
    },
    ...episodeQueries
  ]);

  const isLoading = results.some((result) => result.isLoading);
  const [origin, location, ...episodesData] = results;

  const episodeNames = episodesData.map(({ data }) => data?.name);

  const originData = parseEmptyToUnknownString({
    originName: origin?.data?.name,
    originType: origin?.data?.type,
    originDimension: origin?.data?.dimension,
    originResidents: origin.data?.residents?.length
  });
  const locationData = parseEmptyToUnknownString({
    locationName: location?.data?.name,
    locationType: location?.data?.type,
    locationDimension: location?.data?.dimension,
    locationResidents: location?.data?.residents?.length
  });
  console.log("locationData :>> ", locationData);
  return {
    isLoading,
    episodeNames,
    originData,
    locationData
  };
};
