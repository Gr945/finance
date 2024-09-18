import { Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import { BoxCard, ButtonAction } from './AddProduct.styles';
import { useAppSelector } from '../../hooks';
import { useMemo, useState } from 'react';
import { AddProductType } from '../../types';
import { store } from '../../store';
import { addProduct } from '../../productsReducer';

const categorySelection = [
    { label: 'Брюки', value: 'Брюки' },
    { label: 'Штаны', value: 'Штаны' },
    { label: 'Юбка', value: 'Юбка' },
    { label: 'Одежда', value: 'Одежда' },
    { label: 'Обувь', value: 'Обувь' },
];

function AddProduct() {
    const products = useAppSelector((state) => state.dataReducer.products);
    const [newProd, setNewProd] = useState<AddProductType>({
        bar: null,
        art: null,
        size: null,
        category: '',
    });

    const handleExport = () => {
        if (products.length > 0) {
            const jsonData = JSON.stringify(products, null, 2);
            const blob = new Blob([jsonData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'data.json');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } else {
            alert('Требуется загрузить данные');
        }
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        store.dispatch(addProduct(newProd));
    };

    const AddProductMemo = useMemo(() => {
      
        return (
            <Grid container gap={2}>
                <form onSubmit={handleSubmit}>
                    <Grid container gap={1}>
                        <BoxCard>
                            <Typography children="Баркод" color="black" />
                            <TextField
                                value={newProd.bar}
                                type="number"
                                required
                                onChange={(e) =>
                                    setNewProd({
                                        ...newProd,
                                        bar: +e.target.value,
                                    })
                                }
                                fullWidth
                            />
                        </BoxCard>
                        <BoxCard>
                            <Typography children="Артикул" color="black" />
                            <TextField
                                value={newProd.art}
                                type="number"
                                required
                                onChange={(e) =>
                                    setNewProd({
                                        ...newProd,
                                        art: +e.target.value,
                                    })
                                }
                                fullWidth
                            />
                        </BoxCard>
                        <BoxCard>
                            <Typography children="Размер" color="black" />
                            <TextField
                                value={newProd.size}
                                type="number"
                                required
                                onChange={(e) =>
                                    setNewProd({
                                        ...newProd,
                                        size: +e.target.value,
                                    })
                                }
                                fullWidth
                            />
                        </BoxCard>
                        <BoxCard sx={{ flexDirection: 'column' }}>
                            <Typography children="Категория" color="black" />
                            <Select
                                value={newProd.category}
                                onChange={(event) => {
                                    setNewProd({
                                        ...newProd,
                                        category: event.target.value,
                                    });
                                }}
                                sx={{ color: (theme) => theme.custom.c1 }}
                            >
                                {categorySelection.map((category) => (
                                    <MenuItem
                                        key={category.value}
                                        value={category.value}
                                    >
                                        {category.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </BoxCard>
                    </Grid>
                    <Grid container gap={2} mt={2}>
                        <ButtonAction type="submit">
                            <Typography children="сформировать" />
                        </ButtonAction>
                        <ButtonAction
                            sx={{ background: (theme) => theme.custom.c1 }}
                            onClick={handleExport}
                        >
                            <DriveFileMoveIcon />
                            <Typography children="экспорт" />
                        </ButtonAction>
                    </Grid>
                </form>
            </Grid>
        );
    }, [newProd, products]);
    return AddProductMemo;
}

export default AddProduct;
