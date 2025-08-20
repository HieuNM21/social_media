import React from 'react';
import './Sidebar.css';

const navItems = [
  { icon: 'fa-solid fa-house', label: 'Trang chủ' },
  { icon: 'fa-solid fa-magnifying-glass', label: 'Tìm kiếm' },
  { icon: 'fa-regular fa-compass', label: 'Khám phá' },
  { icon: 'fa-solid fa-film', label: 'Reels' },
  { icon: 'fa-regular fa-paper-plane', label: 'Tin nhắn' },
  { icon: 'fa-regular fa-heart', label: 'Thông báo' },
  { icon: 'fa-regular fa-square-plus', label: 'Tạo' },
  { icon: 'fa-regular fa-user', label: 'Trang cá nhân' }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">Instagram</div>
      <nav className="sidebar__nav">
        {navItems.map(item => (
          <div key={item.label} className="sidebar__nav-item">
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="sidebar__nav-item sidebar__more">
        <i className="fa-solid fa-bars"></i>
        <span>Thêm</span>
      </div>
    </aside>
  );
}

export default Sidebar;
