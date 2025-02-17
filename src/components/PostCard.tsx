import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm p-6 mb-4 transition-all hover:shadow-md"
    >
      <Link to={`/post/${post.id}`}>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
        <div className="text-sm text-gray-500 mb-3">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </div>
        <p className="text-gray-600">{post.excerpt}</p>
      </Link>
    </motion.article>
  );
};

export default PostCard;