import React from 'react';
import './PostList.css';

const PostList = () => {
  const posts = [
    { id: 1, title: 'First Blog Post', excerpt: 'This is the first blog post.' },
    { id: 2, title: 'Second Blog Post', excerpt: 'This is the second blog post.' },
    // Add more posts as needed
  ];

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post-item">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
