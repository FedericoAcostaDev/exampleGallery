import React from "react";
import classes from "../css/gallery.scss";

export const GalleryInfo = (props) => {
  const { gallery } = props;
  return (
    <div>
      <div className={classes.gallery__info__count}>
        <span>{gallery.points}</span> Points |<span> {gallery.views}</span>{" "}
        Views |<span> {gallery.score}</span> Score |<span> {gallery.ups}</span>{" "}
        Ups |<span> {gallery.downs}</span> Downs
      </div>
      <div className={classes.gallery__info__row}>
        {gallery.tags.length ? (
          gallery.tags.map((tag, index) => {
            return (
              <div key={index} className={classes.gallery__info__tag__wrapper}>
                <p className={classes.gallery__info__tag}>{tag.display_name}</p>
              </div>
            );
          })
        ) : (
          <div className="col">No tags found</div>
        )}
      </div>
    </div>
  );
};
