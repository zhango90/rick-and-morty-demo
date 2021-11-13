import React from "react";
import { usePaginatedCharacters } from "services/character";
import CharacterList from "components/CharacterList";
import CharacterItem from "components/CharacterItem";
import Loader from "components/Loader";
import Container from "components/Container";
//! instead of using h1 directly here we can refactor creating a typography component in order to manage all the tags related to strings
const Characters = () => {
  const {
    info,
    results,
    isError,
    isLoading,
    isPreviousData,
    handleNextPage,
    handlePrevPage
  } = usePaginatedCharacters();

  if (isError) return <p>Something went wrong</p>;

  if (isLoading) return <Loader></Loader>;

  return (
    <Container>
      <h1>The Rick and Morty Characters</h1>
      <CharacterList>
        {results?.map((character) => (
          <CharacterItem {...character}></CharacterItem>
        ))}
      </CharacterList>
    </Container>
  );
};

export default Characters;
