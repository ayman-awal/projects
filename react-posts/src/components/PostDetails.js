// PostDetails.js
import React from 'react';
import '../style.css';

const PostDetails = ({ post, onBackClick }) => {
  return (
    <div id="post_details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default PostDetails;
