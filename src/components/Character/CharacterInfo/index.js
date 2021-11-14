/** @jsx jsx */
import { jsx } from "@emotion/react";
import Loader from "components/UI/Loader";

import Modal from "components/UI/Modal";
import { useCharacterInfo } from "services/character";
import EpisodeList from "components/Episode/EpisodeList";
import { SuspenseImg } from "components/SuspenseImg";
import {
  characterInfoCss,
  characterInfoImgCss,
  characterInfoMainCss
} from "./css";

const CharacterInfo = ({ character, onClose }) => {
  const { name, image, status, species, type, gender } = character;
  const { episodeNames, isLoading, locationData, originData } =
    useCharacterInfo(character);

  const { locationName, locationType, locationDimension, locationResidents } =
    locationData;
  const { originName, originType, originDimension, originResidents } =
    originData;

  if (isLoading) return <Loader></Loader>;

  return (
    <Modal onClose={onClose} customCss={characterInfoCss}>
      <div css={characterInfoMainCss}>
        <SuspenseImg css={characterInfoImgCss} src={image} alt={name} />
        <div>
          <h1>{name}</h1>
          <h2>Information</h2>
          <p>
            <strong>Status:</strong> {status} - <strong>Species:</strong>{" "}
            {species} - <strong>Type:</strong> {type ? type : "Unknown"} -{" "}
            <strong>Gender:</strong> {gender}
          </p>
          <h2>Origin:</h2>
          <p>
            {originName} - {originType} - {originDimension} - Population{" "}
            {originResidents}
          </p>
          <h2>Location:</h2>
          <p>
            {locationName} - {locationType} - {locationDimension} - Population{" "}
            {locationResidents}
          </p>
        </div>
      </div>
      <div>
        <h3>Episodes</h3>
        <EpisodeList>
          <ul>
            {episodeNames.map((episode) => (
              <li key={episode}>{episode}</li>
            ))}
          </ul>
        </EpisodeList>
      </div>
    </Modal>
  );
};

export default CharacterInfo;
