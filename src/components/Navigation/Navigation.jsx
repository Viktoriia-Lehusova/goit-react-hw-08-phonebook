import { Box, Typography } from '@mui/material';
// import { LinkStyled } from 'components/LinkStyled.styled';
import { useAuth } from 'components/hooks/userAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexWrap: 'wrap', display: { xs: 'flex' }, ml: 2 }}>
      <NavLink to="/">
        <Typography variant="h6" sx={{ p: 1, mr: 1 }}>
          Home
        </Typography>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts">
          <Typography variant="h6" sx={{ p: 1 }}>
            Contacts
          </Typography>
        </NavLink>
      )}
    </Box>
  );
};
