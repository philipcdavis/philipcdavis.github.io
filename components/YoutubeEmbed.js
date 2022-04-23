import React from "react";
import styled from "../styles/Media.module.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className={styled.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
