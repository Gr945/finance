import { styled, Button, Grid } from '@mui/material';

export const ButtonAccount = styled(Button)(() => ({
    borderRadius: '20px',
    fontSize: '10px',
    padding: '8px',
}));

export const MainGrid = styled(Grid)(({ theme }) => ({
    width: '80%',
    background: theme.palette.background.paper,
    borderRadius: '16px',
    padding: '0 8px',
    justifyContent: 'space-between',
}));
