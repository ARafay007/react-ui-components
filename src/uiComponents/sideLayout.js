'use client'

import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { randomKey } from '../utils/utilFunction';
import './sideLayout.css';

export const SideLayout = ({children, navigationLinks, logo=null}) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [navList, setNavList] = useState(navigationLinks);

  const toggleNavState = () => setToggleNav(!toggleNav);
  const toggleDropdown = () => setDropdownToggle(!dropdownToggle);

  useEffect(() => {
    const handleWindowSize = ()  =>{
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
    
    window.addEventListener('resize', handleWindowSize);
    
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);
  
  if(windowWidth > 769 && !toggleNav) {
    setToggleNav(true);
  }

  const renderNestLi = (listItems) => {
    return listItems.map(el => (
      <li className='sideLayout_dropdown_li' key={randomKey()}><Link to='' className='sideLayout_nav_link'>{el}</Link></li>
    ));
  }

  const activeListItem = (url) => {
    setNavList(navigationLinks.map(el => {
      if(el.url === url) el.isSelected = true;
      else el.isSelected = false;
      return el
    }));
  }

  const renderLI = () => {
    const listItems = navList.map(el => {
      if(el.children){
        return (
          <li className='sideLayout_nav_li sideLayout_dropdown' key={randomKey()}>
            <Button 
              text={<span>Nav 4 {toggleNav && <img src='/caret-down.png' className='sideLayout_icon_size' alt='caret sideLayout_dropdown' />}</span>} 
              buttonProps={{
                className: 'sideLayout_dropdown_btn',
                onClick: toggleDropdown,
              }}
            />
            <ul className={dropdownToggle ? 'sideLayout_dropdown_ul' : 'sideLayout_dropdown_close'}>
              {
                renderNestLi(Object.values(navigationLinks[el]))
              }
            </ul>
          </li>
        );
      } 
      else {
        return (
          <Link 
            to={el.url} 
            className='sideLayout_nav_link' 
            key={randomKey()}
          >
            <li className={`sideLayout_nav_li ${el.isSelected && 'sideLayout_nav_li_active'}`} onClick={() => activeListItem(el.url)}>
              {el.navName}
            </li>
          </Link>
        );
      }
    });

    return listItems;
  };

  return (
    <div className='sideLayout_layout_container' style={{height: `${windowHeight}px`}}>
      <nav className={toggleNav ? 'sideLayout_nav_open' : 'sideLayout_nav_close'}>
        <div className='sideLayout_show_nav_close_btn'>
          <Button 
            text='X' 
            buttonProps={{
              onClick: toggleNavState,
            }} 
          />
        </div>
        <ul className='sideLayout_nav_ul'>
          <li className='sideLayout_nav_li_logo'>
          {/* {logo && <img src='./logo192.png' height="100px" />} */}
            <img src='./logo192.png' height="100px" />
          </li>
          {navList.length && renderLI() }
          <li className='sideLayout_nav_li'>Logout</li>
        </ul>
      </nav>
      <div className='children-container'>
        {
          windowWidth < 769 &&
          <Button 
          text={<img src='/open_arrow.png' className='sideLayout_icon_size' alt='open div' />} 
          buttonProps={{
            onClick: toggleNavState
          }} />
        }
        {children}
      </div>
    </div>
  );
}