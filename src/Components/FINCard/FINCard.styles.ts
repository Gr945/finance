import { styled, alpha, Grid } from '@mui/material';

export const FINCardMain = styled(Grid)(({ theme }) => ({
    width: '320px',
    padding: '20px',
    borderRadius: '16px',
    background: alpha(theme.palette.secondary.dark, 0.9),
    flexDirection: 'column',
    gap: '16px',
}));
