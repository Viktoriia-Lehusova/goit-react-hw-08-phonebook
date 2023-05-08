import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
// import { Container, CssBaseline } from '@mui/material';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};
