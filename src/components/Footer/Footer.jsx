import { Typography } from '@mui/material';
// import { FooterStyled } from './Footer.styled';
// import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer = () => {
  return (
    <footer>
      <Typography variant="body1">Disigned by Vitalii Nozhenko</Typography>
      {/* <CopyrightIcon sx={{ display: { md: 'flex' }, ml: 1, mr: 1 }} /> */}
      <p>copyright icon</p>
      <Typography variant="body1">GoIT 2023</Typography>
    </footer>
  );
};
