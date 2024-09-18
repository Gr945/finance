import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import { ButtonAccount, MainGrid } from './AccountCard.styles';

function AccountCard() {
    return (
        <MainGrid container>
            <Box sx={{ display: 'flex', gap: '10px', padding: 0.5 }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <AccountCircleIcon />
                    <Typography
                        children={'Иванов И.И.'}
                        sx={{ color: (theme) => theme.custom.c1 }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        background: (theme) => theme.custom.c7,
                        borderRadius: '16px',
                        padding: 1.5,
                        gap: 1,
                    }}
                >
                    <EventIcon sx={{ color: (theme) => theme.custom.c5 }} />
                    <Typography
                        children={`Тариф до 15.04.2024`}
                        sx={{ color: (theme) => theme.custom.c5 }}
                    />
                </Box>
            </Box>
            <Box sx={{ display: ' flex', alignItems: 'center', gap: '10px' }}>
                <ButtonAccount
                    sx={{
                        color: (theme) => theme.custom.c1,
                        border: (theme) => `1px solid ${theme.custom.c1}`,
                    }}
                >
                    Выйти
                </ButtonAccount>
                <ButtonAccount
                    sx={{
                        background: (theme) => theme.custom.c8,
                        '&:hover': { color: (theme) => theme.custom.c1 },
                    }}
                >
                    {' '}
                    О нас
                </ButtonAccount>
            </Box>
        </MainGrid>
    );
}

export default AccountCard;
