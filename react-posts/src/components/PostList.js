// PostList.js
import React, { useState, useEffect } from 'react';
import Post from './Post';

const PostList = ({ onPostClick }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <ul className="main_list">
      {posts.map((post) => (
        <Post key={post.id} post={post} onPostClick={onPostClick} />
      ))}
    </ul>
  );
};

export default PostList;
