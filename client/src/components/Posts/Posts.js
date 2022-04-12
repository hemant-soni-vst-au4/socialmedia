import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from './style';

function Posts() {
  const post = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(post)
  return (
    <>
      <Post />
      <Post />
    </>
  );
}

export default Posts;
