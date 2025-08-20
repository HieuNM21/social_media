import React from 'react';
import Container from 'react-bootstrap/Container';
import Post from '../Post/Post';
import './Feed.css';

const posts = [
  {
    id: 1,
    username: 'sonthetoanfcvohuynhcaty',
    avatar: 'https://via.placeholder.com/32',
    image: 'https://images.unsplash.com/photo-1604079620826-0fddb42f2f51?auto=format&fit=crop&w=600&q=80',
    likes: 12522,
    caption: 'Ck HHH <3',
    time: '1 giờ trước'
  }
];

function Feed() {
  return (
    <Container className="feed">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </Container>
  );
}

export default Feed;
