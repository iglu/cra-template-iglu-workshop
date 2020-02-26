import React, { useEffect } from 'react';
import { Layout } from '../../components';
import api, { PostProps } from '../../api/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [posts, setPosts] = React.useState<PostProps[]>([]);

  useEffect(() => {
    api.getPosts().then(res => setPosts(res));
  }, []);

  console.log(posts);

  return (
    <>
      <Layout>Hello World</Layout>
    </>
  );
};

export default Dashboard;

// <Link to={`/posts/${post.id}`}>Content</Link>
