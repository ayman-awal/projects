// Post.js
import React from 'react';

const Post = ({ post, onPostClick }) => {
  const handleClick = () => {
    onPostClick(post);
  };

  return (
    <li className="post-item" onClick={handleClick}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>
  );
};

export default Post;
