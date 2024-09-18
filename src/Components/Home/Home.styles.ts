import { styled, Button } from '@mui/material';

export const ButtonMain = styled(Button)(({ theme }) => ({
    gap: '10px',
    '&:hover': {
        background: theme.palette.info.light,
    },
}));
