
// project import
import ThemeCustomization from './themes';

import ScrollTop from './components/ScrollTop';
import { Box, Toolbar, useMediaQuery } from '@mui/material';
import Header from './layout/Dashboard/Header';
import MainDrawer from './layout/Dashboard/Drawer';
import { handlerDrawerOpen, useGetMenuMaster } from './api/menu';
import { useEffect } from 'react';
import Loader from './components/Loader';

function ChildrenLayout({children}) {
    const { menuMasterLoading } = useGetMenuMaster();
    const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
  
    useEffect(() => {
      handlerDrawerOpen(!downXL);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [downXL]);
  
    if (menuMasterLoading) return <Loader />;
  
    return (
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Header />
        <MainDrawer />
        <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Toolbar />
          {/* <Breadcrumbs navigation={navigation} title /> */}
          {children}
        </Box>
      </Box>
    );
  }

export default function MainLayout({children}) {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <ChildrenLayout children={children} />
      </ScrollTop>
    </ThemeCustomization>
  );
}


