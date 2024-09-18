import { Box, Button, styled } from '@mui/material';

export const ButtonAction = styled(Button)(({ theme }) => ({
    gap: '10px',
    background: theme.custom.c5,
    borderRadius: '30px',
    padding: '16px',
    '&:hover': {
        background: theme.palette.info.light,
    },
}));

export const ButtonActionNext = styled(Button)(({ theme }) => ({
    gap: '10px',
    background: theme.custom.c5,
    borderRadius: '30px',
    '&:hover': {
        background: theme.palette.info.light,
    },
}));

export const BoxCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    background: theme.palette.primary.main,
    borderRadius: '16px',
    '& input': {
        padding: '8px',
        background: theme.palette.text.disabled,
        color: theme.custom.c1,
    },
    '& select': {
        padding: '8px',
        background: theme.palette.text.disabled,
    },
}));
