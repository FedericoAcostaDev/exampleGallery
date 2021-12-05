import { Card, CardContent } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/post.css";

const Post = ({ post }) => (
  <div className="col-md-3 col-xs-4 post">
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
          <CardContent className="post__info">
            <h4 className="post__title">{post.title}</h4>
            <h5 className="post__title">{post.description}</h5>
            <h6 className="post__title">{post.views} views</h6>
            <h6 className="post__title">{post.points} points</h6>
          </CardContent>
        </div>
      </Card>
    </Link>
  </div>
);

export default Post;
