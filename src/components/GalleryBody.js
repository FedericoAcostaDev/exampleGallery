import React from "react";
import { GalleryInfo } from "./GalleryInfo.js";

import classes from "../scss/gallery.scss";
export const GalleryBody = (props) => {
  const { gallery } = props;

  return (
    <div className={classes.gallery__body}>
      <h1 className={classes.gallery__body__title}>{gallery.title}</h1>
      <p className={classes.gallery__body__name}>by {gallery.account_url}</p>
      {gallery.images ? (
        gallery.images.map((image) => {
          return (
            <div
              key={image.id}
              className={classes.gallery__body__image__container}
            >
              <div className={classes.gallery__body__image__wrapper}>
                {(gallery.images && gallery.images[0].animated && (
                  <video
                    preload="auto"
                    autoPlay="autoplay"
                    loop="loop"
                    className={classes.gallery__body__image}
                  >
                    <source src={gallery.images[0].mp4} type="video/mp4" />
                  </video>
                )) ||
                  (gallery.image && (
                    <img src={gallery.image.link} alt={image.title} />
                  )) || (
                    <img
                      src={image.link}
                      alt={image.title}
                      className={classes.gallery__body__image}
                    />
                  )}
              </div>
              <p className={classes.gallery__body__image__description}>
                {image.description}
              </p>
            </div>
          );
        })
      ) : (
        <div className={classes.gallery__body__image__wrapper}>
          <img className={classes.gallery__body__image} src={gallery.link} />
        </div>
      )}
      {gallery.description && (
        <p className={classes.gallery__body__description}>
          {gallery.description}
        </p>
      )}
      <GalleryInfo gallery={gallery} />
    </div>
  );
};
