import React from 'react';
import { motion } from 'framer-motion';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto py-8 px-4"
    >
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Recent Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;