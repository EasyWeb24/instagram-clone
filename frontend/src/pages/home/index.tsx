import { Box, Stack, Typography } from '@mui/material';

const Index = () => {
  return (
    <Box p={'24px'}>
      <Box mt={'48px'} bgcolor={'hsl(0, 0%, 100%);'}>
        {' '}
        <Stack flexDirection={'row'} gap={'12px'} p={'12px'} fontSize={'14px'}>
          <Typography color={'hsl(0, 0%, 15%);'} fontWeight={'600'}>
            John Doe
          </Typography>{' '}
          <Typography fontWeight={'400'} color={'hsl(0, 0%, 25%);'}>
            4hrs ago{' '}
          </Typography>
        </Stack>
        <img width={'100%'} height={'256px'} />
        <Stack flexDirection={'row'} gap={'12px'} p={'12px'} fontSize={'14px'}>
          <Typography color={'hsl(0, 0%, 15%);'} fontWeight={'600'}>
            John Doe
          </Typography>{' '}
          <Typography fontWeight={'400'} color={'hsl(0, 0%, 25%);'}>
            Caption...{' '}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
