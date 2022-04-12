import React from "react";
import Post from "./Post/Post";
import useStyles from './style';

function Posts() {
    const classes = useStyles();
  return (
    <>
      <Post />
      <Post />
    </>
  );
}

export default Posts;
