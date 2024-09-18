import {
    Box,
    Button,
    CircularProgress,
    Collapse,
    Grid,
    Typography,
} from '@mui/material';
import FINCard from '../FINCard/FINCard';
import MainTable from '../MainTable/MainTable';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useEffect, useState } from 'react';
import { ButtonMain } from './Home.styles';
import { store } from '../../store';
import { changeProducts } from '../../productsReducer';
import { ProductType } from '../../types';
import AccountCard from '../AccountCard/AccountCard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddProduct from '../AddProduct/AddProduct';
import { useAppSelector } from '../../hooks';
import CloseIcon from '@mui/icons-material/Close';
import data from '../../data.json';

function Home() {
    const [loading, setLoading] = useState(false);
    const [visibleTable, setVisibleTable] = useState(false);
    const products = useAppSelector((state) => state.dataReducer.products);

    useEffect(() => {
        setVisibleTable(products.length > 0 ? true : false);
    }, [products]);

    function getData() {
        if (data && data.length > 0) {
            setLoading(true);
            store.dispatch(changeProducts(data as ProductType[]));
            setTimeout(() => {
                setLoading(false);
                setVisibleTable(true);
            }, 1000);
        } else {
            alert('Что то пошло не так')
        }
    }

    return (
        <Grid
            container
            p={2}
            gap={2}
            sx={{ background: (theme) => theme.custom.c2, flexWrap: 'nowrap' }}
        >
            <Box>
                <FINCard />
            </Box>
            <Grid container gap={2} flexDirection='column'>
                <AccountCard />
                <Grid container mt={5} gap={2} alignItems="center">
                    <Typography
                        variant="h1"
                        children="Остатки сформированы на 01.04.2024г."
                        color="black"
                    />
                    <Button
                        sx={{
                            display: 'flex',
                            gap: 1,
                            background: (theme) => theme.custom.c1,
                            borderRadius: '20px',
                            padding: '10px',
                        }}
                    >
                        <EventNoteIcon
                            color="inherit"
                            sx={{ fontSize: '1rem' }}
                        />
                        <Typography
                            children="Инструкции"
                            sx={{ fontSize: '10px' }}
                        />
                    </Button>
                </Grid>

                <AddProduct />

                <Grid
                    container
                    justifyContent="space-between"
                    flexWrap="nowrap"
                    width="80%"
                >
                    <Grid container gap={2}>
                        <ButtonMain onClick={getData}>
                            <UploadFileIcon
                                sx={{
                                    color: (theme) => theme.custom.c1,
                                }}
                            />
                            <Typography
                                children="загрузить данные из csv"
                                sx={{
                                    color: (theme) => theme.custom.c1,
                                }}
                            />
                        </ButtonMain>
                        <ButtonMain>
                            <NoteAddIcon
                                sx={{
                                    color: (theme) => theme.custom.c1,
                                }}
                            />
                            <Typography
                                children="изменить данные"
                                sx={{
                                    color: (theme) => theme.custom.c1,
                                }}
                            />
                        </ButtonMain>
                    </Grid>
                    <Button onClick={() => store.dispatch(changeProducts([]))}>
                        <Typography children="Очистить" color="black" mr={1} />
                        <CloseIcon sx={{ color: (theme) => theme.custom.c1 }} />
                    </Button>
                </Grid>

                {loading ? (
                    <Box>
                        <CircularProgress color="secondary" />
                    </Box>
                ) : (
                    <Collapse in={visibleTable}>
                        <MainTable />
                    </Collapse>
                )}
            </Grid>
        </Grid>
    );
}

export default Home;
