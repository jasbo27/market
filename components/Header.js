import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";


const renderMenu = () => {
  const items = [
    { key: 'albums', active: true, name: 'Albums', as: 'a', href: '/albums' },
    { key: 'new', name: 'New Album', as: "a", href: '/albums/new' },
  ];

  return <Menu items={items} />
}


const Header = () => {
  return (
    renderMenu()
  );
};

export default Header;
