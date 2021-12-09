import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

import classes from "../scss/post.scss";

const Post = ({ post }) => (
  <div className={classes.post}>
    <Link className={classes.post__link} to={`gallery/${post.id}`}>
      <div className={classes.__container}>
        <div className={classes.image__container}>
          <img
            className={classes.image}
            src={
              post.cover
                ? `http://i.imgur.com/${post.cover}b.jpg`
                : `http://i.imgur.com/${post.id}b.jpg`
            }
          />
        </div>
        <div className={classes.post__info}>
          <h6 className={classes.post__title}>{post.title}</h6>
          <h6 className={classes.post__title}>{post.description}</h6>
          <div className="votes">
            <h6 className={classes.post__title}>
              {post.ups} <BiUpvote />
            </h6>
            <h6 className={classes.post__title}>
              {post.downs} <BiDownvote />{" "}
            </h6>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Post;
