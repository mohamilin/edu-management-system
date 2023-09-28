import MenuitemsGuests, { MenuitemsType } from './MenuItemsGuests';
import MenuitemsAdmin from './MenuItemsAdmin';

import { useRouter } from 'next/router';
import { Box, List, MenuItemProps, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from '../../../../store/Store';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import NavGroup from './NavGroup/NavGroup';
import { AppState } from '../../../../store/Store'
import { toggleMobileSidebar } from '../../../../store/customizer/CustomizerSlice';
import React, { useEffect, useState } from 'react';

type UserRole = {
  accessToken?: string,
  user: any
}


const SidebarItems: React.FC = () => {
  const { pathname } = useRouter();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const hideMenu: any = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const dispatch = useDispatch();

  const [role, setRole] = useState<string>('guest')
  const [menu, setMenu] = useState<MenuitemsType[]>([])

  const [localStorageData, setLocalStorageData] = useState<UserRole | null>(null);

  useEffect(() => {
    // Function to retrieve data from localStorage
    const getDataFromLocalStorage = () => {
      try {
        const data = localStorage.getItem('user'); // Replace 'myData' with your actual localStorage key
        if (data !== null) {
          setLocalStorageData(JSON.parse(data));
        }
      } catch (error) {
        console.error('Error reading from localStorage:', error);
      }
    };

    getDataFromLocalStorage();
    if(localStorageData?.user?.user_type === 'guest') {
      setMenu(MenuitemsGuests)
    } else if(localStorageData?.user?.user_type === 'admin') {
      setMenu(MenuitemsAdmin)
    } else {
      setMenu(MenuitemsGuests)
    }
  }, [menu]);

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {menu?.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else if (item.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );

            // {/********If Sub No Menu**********/}
          } else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect} hideMenu={hideMenu} onClick={() => dispatch(toggleMobileSidebar())} />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
