import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import { LinkStyled } from 'components/LinkStyled.styled';

export const AuthNav = () => {
  return (
    <Box
      component="nav"
      sx={{ flexWrap: 'wrap', display: { xs: 'flex' }, mr: 2 }}
    >
      <NavLink to="/register">
        <Typography variant="h6" sx={{ p: 1, mr: 1 }}>
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography variant="h6" sx={{ p: 1 }}>
          LogIn
        </Typography>
      </NavLink>
    </Box>
  );
};
