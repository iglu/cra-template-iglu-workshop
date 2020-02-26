import React, { useEffect } from 'react';
import api, { PostProps } from '../../api/api';

const Post: React.FC<{ match: any }> = props => {
  const [post, setPost] = React.useState<PostProps>();

  const {
    match: {
      params: { postId }
    }
  } = props;

  useEffect(() => {
    api.getPost(postId).then(res => setPost(res));
  }, [postId]);

  if (!post) {
    return <h1>No Post found!</h1>;
  }

  return <>{JSON.stringify(post)} /></>;
};

export default Post;
