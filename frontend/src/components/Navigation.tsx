import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/instagram-text-icon.svg';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Navigation = () => {
  return (
    <>
      <Stack
        justifyContent={'space-between'}
        flexDirection={'row'}
        bgcolor={'hsl(0, 0%, 100%)'}
        width={'100%'}
        p={'12px 24px'}
        boxShadow={'0 1px 3px hsla(0, 0%, 0%, 0.2)'}
        alignItems={'center'}
      >
        <Link to={'/'}>
          <img
            src={instagramLogo}
            alt="Instagram text Logo"
            width={'96px'}
            height={'48px'}
          />
        </Link>
        <Link to={'/create-post'}>
          <AddCircleOutlineIcon style={{ color: 'hsl(0, 0%, 15%)' }} />
        </Link>
      </Stack>
    </>
  );
};

export default Navigation;
