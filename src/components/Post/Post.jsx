import React from 'react';
import Card from 'react-bootstrap/Card';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './Post.css';

function Post({ username, avatar, image, likes, caption, time }) {
  return (
    <Card className="post">
      <Card.Header className="post__header">
        <img src={avatar} alt={username} />
        <span>{username}</span>
      </Card.Header>
      <Card.Img variant="top" src={image} alt="post" />
      <Card.Body>
        <div className="post__actions">
          <div className="post__actions-left">
            <IconButton size="small" color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton size="small" color="inherit">
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton size="small" color="inherit">
              <SendIcon />
            </IconButton>
          </div>
          <div className="post__actions-right">
            <IconButton size="small" color="inherit">
              <BookmarkBorderIcon />
            </IconButton>
          </div>
        </div>
        <div className="post__likes">{likes.toLocaleString()} lượt thích</div>
        <div className="post__caption">
          <span>{username}</span> {caption}
        </div>
        <div className="post__time">{time}</div>
      </Card.Body>
    </Card>
  );
}

export default Post;
