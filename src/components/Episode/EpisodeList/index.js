/** @jsx jsx */
import { jsx } from "@emotion/react";
import { episodeListCss } from "./css";

const EpisodeList = ({ children }) => {
  return <div css={episodeListCss}>{children}</div>;
};

export default EpisodeList;
