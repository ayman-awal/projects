import React, { useState } from 'react';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import './style.css';

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <div className="wrapper">
      {!selectedPost ? (
        <PostList onPostClick={handlePostClick} />
      ) : (
        <PostDetails post={selectedPost} onBackClick={handleBackClick} />
      )}
    </div>
  );
};

export default App;
