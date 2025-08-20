import React from 'react';
import './Post.css';

function Post({ username, avatar, image, likes, caption, time }) {
  return (
    <div className="post">
      <div className="post__header">
        <img src={avatar} alt={username} />
        <span>{username}</span>
      </div>
      <div className="post__image">
        <img src={image} alt="post" />
      </div>
      <div className="post__actions">
        <div className="post__actions-left">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-regular fa-comment"></i>
          <i className="fa-regular fa-paper-plane"></i>
        </div>
        <div className="post__actions-right">
          <i className="fa-regular fa-bookmark"></i>
        </div>
      </div>
      <div className="post__likes">{likes.toLocaleString()} lượt thích</div>
      <div className="post__caption">
        <span>{username}</span> {caption}
      </div>
      <div className="post__time">{time}</div>
    </div>
  );
}

export default Post;
