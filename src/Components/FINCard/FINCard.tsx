import { Box, Grid, Typography } from '@mui/material';
import { FINCardMain } from './FINCard.styles';
import CloseIcon from '@mui/icons-material/Close';

function FINCard() {
    return (
        <FINCardMain container>
            <Grid
                container
                gap={1}
                justifyContent="space-around"
                alignItems="center"
            >
                <Grid container width="auto" flexWrap="nowrap">
                    <Typography
                        children="ФИН"
                        variant="subtitle1"
                        sx={{
                            background: 'blue',
                            color: (theme) => theme.palette.primary.main,
                            borderRadius: '4px',
                        }}
                        p="0 2px"
                    />
                    <Typography children="Контроль" variant="subtitle1" />
                </Grid>
                <Box
                    component="span"
                    sx={{
                        borderRadius: '16px',
                        border: (theme) => `1px solid ${theme.custom.c4}`,
                        padding: '4px 8px',
                        height: 'max-content',
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        children="МЕНЮ"
                        fontSize={'0.5rem'}
                        sx={{
                            color: (theme) => theme.custom.c4,
                            height: '10px',
                        }}
                    />
                    <CloseIcon
                        sx={{
                            color: (theme) => theme.custom.c4,
                            fontSize: '0.5rem',
                        }}
                    />
                </Box>
            </Grid>
        </FINCardMain>
    );
}

export default FINCard;
