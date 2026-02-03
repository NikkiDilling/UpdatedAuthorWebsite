"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoodreads, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import classes from '../css/Header.module.scss';
import Navigation from './Navigation';
import Link  from 'next/link';
import { Box, List, ListItem, ListItemButton, ListItemIcon, SwipeableDrawer, ListItemText } from '@mui/material';
import { useState } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Face3Icon from '@mui/icons-material/Face3';
import CallIcon from '@mui/icons-material/Call';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setMenuOpen(open);
      };

  const getBurgerMenuIcon = (text: string) => {
    switch (text) {
      case 'Books':
        return <MenuBookIcon />;
      case 'Blog':
        return <MailIcon />;
      case 'Art':
        return <ColorLensIcon />;
      case 'About Author':
        return <Face3Icon />;
      case 'Contact':
        return <CallIcon />;
      default:
        return null;
    }
  };

  const list = () => (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Books', 'Blog', 'Art', 'About Author', 'Contact'].map((text) => (
          <Link href={text.indexOf('About') >= 0 ? "About" : text} key={text} className={classes.listItem}>
            <ListItem disablePadding >

              <ListItemButton>
                <ListItemIcon>
                  {getBurgerMenuIcon(text)}
                </ListItemIcon>

                <ListItemText primary={text} />

              </ListItemButton>

            </ListItem>
          </Link>
        ))}
      </List>
      {/*   <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className={classes.container}>

      <div className={classes.title}>
        <Link href="/">Nicole D. Hansen</Link >

      </div>

      {/* Replace with burger menu on mobile! */}
      <div className={classes.navigation}>
        <Navigation />

      </div>

      <div className={classes.icons}>
        <a href='https://www.goodreads.com/user/show/176510995-nicole' target='_blank'>
          <FontAwesomeIcon
            icon={faGoodreads}
            className={classes.icon}
          />
        </a>

        <a href='https://www.instagram.com/ndhansen_' target='_blank'>
          <FontAwesomeIcon
            icon={faInstagram}
            className={classes.icon}
          />
        </a>

        {/*         <a href='https://www.tiktok.com/@nicole.writes5' target='_blank'>
          <FontAwesomeIcon
            icon={faTiktok}
            className={classes.icon}
          />
        </a>
 */}
        <a href='https://www.threads.net/@ndhansen_' target='_blank'>
          <FontAwesomeIcon
            icon={faThreads}
            className={classes.icon}
          />
        </a>

      </div>

      <div className={classes.burgerMenu}>
        <MenuIcon onClick={toggleDrawer(true)} style={{ cursor: 'pointer', marginLeft: "20px" }} />
        <SwipeableDrawer
          anchor={"right"}
          open={isMenuOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </div>


    </div>
  );
}