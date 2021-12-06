import { Card, CardContent } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

import "../css/post.css";

const Post = ({ post }) => (
  <div className="col-12 col-md-3 col-xs-4 post">
    <Link className="post__link" to={`gallery/${post.id}`}>
      <Card className="post__container">
        <div className="post__image-container">
          <img
            className="post__image"
            src={
              post.cover
                ? `http://i.imgur.com/${post.cover}b.jpg`
                : `http://i.imgur.com/${post.id}b.jpg`
            }
          />
        </div>
        <CardContent className="post__info">
          <h6 className="post__title">{post.title}</h6>
          <h6 className="post__title">{post.description}</h6>
          <div className="votes">
            <h6 className="post__title">
              {post.ups} <BiUpvote />
            </h6>
            <h6 className="post__title">
              {post.downs} <BiDownvote />{" "}
            </h6>
          </div>
        </CardContent>
      </Card>
    </Link>
  </div>
);

export default Post;
