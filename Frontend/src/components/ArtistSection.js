import React from "react";
import "./artist-section.css";
import { IconCircleCheckFilled } from '@tabler/icons-react';
import MickelJackson from "../images/mickel_jackson.png";

function ArtistSection() {
  return (
    <section className="artist-section">
      <div className="detail-section">
        <p className="verified"> <IconCircleCheckFilled className="check-icon" size={24}/> Verified Artist</p>
        <div className="singer-name">Mickel Jackson</div>
        <p className="song-views">27,852,501 monthly listeners</p>
      </div>
      <img className="singer-image" src={MickelJackson} alt="singer"/>
    </section>
  );
}

export default ArtistSection;
