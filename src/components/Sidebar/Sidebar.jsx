import React from 'react';
import Nav from 'react-bootstrap/Nav';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import './Sidebar.css';

const navItems = [
  { icon: <HomeIcon />, label: 'Trang chủ' },
  { icon: <SearchIcon />, label: 'Tìm kiếm' },
  { icon: <ExploreIcon />, label: 'Khám phá' },
  { icon: <MovieIcon />, label: 'Reels' },
  { icon: <SendIcon />, label: 'Tin nhắn' },
  { icon: <FavoriteBorderIcon />, label: 'Thông báo' },
  { icon: <AddBoxOutlinedIcon />, label: 'Tạo' },
  { icon: <PersonOutlineIcon />, label: 'Trang cá nhân' }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">Instagram</div>
      <Nav className="flex-column sidebar__nav">
        {navItems.map(item => (
          <Nav.Link key={item.label} href="#" className="sidebar__nav-item">
            {item.icon}
            <span>{item.label}</span>
          </Nav.Link>
        ))}
      </Nav>
      <Nav.Link href="#" className="sidebar__nav-item sidebar__more">
        <MenuIcon />
        <span>Thêm</span>
      </Nav.Link>
    </aside>
  );
}

export default Sidebar;
