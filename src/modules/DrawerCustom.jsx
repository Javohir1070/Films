import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import getContext from '../hooks/getContext';
import { NavbarListMenu } from '../hooks/routes';
import { Link } from 'react-router-dom';

export default function DrawerCustom() {
    const {openDriwer, setOpenDriwer} = getContext()

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenDriwer(false)}>
      <List>
        {NavbarListMenu.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <Link to={text.path} >
                <ListItemText primary={text.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={openDriwer} onClose={() => setOpenDriwer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
