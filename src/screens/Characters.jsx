import React, { Suspense } from "react";
import { usePaginatedCharacters } from "services/character";
import CharacterList from "components/Character/CharacterList";
import CharacterItem from "components/Character/CharacterItem";
import Loader from "components/UI/Loader";
import Container from "components/UI/Container";
import Button from "components/UI/Button";
import ButtonGroup from "components/UI/ButtonGroup";
//! instead of using h1 directly here we can refactor creating a typography component in order to manage all the tags related to strings
const Characters = () => {
  const { results, isError, isLoading, getNextPageProps, getPrevPageProps } =
    usePaginatedCharacters();

  if (isError) return <p>Something went wrong</p>;

  if (isLoading) return <Loader></Loader>;

  return (
    <Container>
      <h1>The Rick and Morty Characters</h1>
      <ButtonGroup>
        <Button outline {...getPrevPageProps()}>
          prev
        </Button>
        <Button outline {...getNextPageProps()}>
          next
        </Button>
      </ButtonGroup>
      <Suspense fallback={<></>}>
        <CharacterList>
          {results?.map((character) => (
            <CharacterItem key={character.id} {...character}></CharacterItem>
          ))}
        </CharacterList>
      </Suspense>
    </Container>
  );
};

export default Characters;
