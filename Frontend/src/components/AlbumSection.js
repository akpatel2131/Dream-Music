import React, { useState } from "react";
import "./album-section.css";
import { IconHeadphones } from "@tabler/icons-react";

function AlbumSection({ setSelectedSongs, data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="album-section">
      <div className="popular-songs">
        <div>Popular Songs</div>
        <a href="/page">See all</a>
      </div>
      <div className="table-section">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Time</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={index}
              className={index === activeIndex && "selected-row"}
              onClick={() => {
                setSelectedSongs(data[index])
                setActiveIndex(index)
              }}
            >
              {index === activeIndex ? (
                <td>

                  <IconHeadphones className="active-icon" size={24} />
                </td>
              ) : (
                <td>{index + 1}</td>
              )}
              <td>{item.title}</td>
              <td>{item.artist}</td>
              <td>{item.time}</td>
              <td>{item.album_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  );
}

export default AlbumSection;
