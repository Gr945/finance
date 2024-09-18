import {
    Grid,
    TableCell,
    TableHead,
    TableRow,
    Table,
    Typography,
    TableBody,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { HeaderTypes, ProductKeys, ProductType } from '../../types';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { changeSort } from '../../reducer';
import { useMemo } from 'react';
import { EditableTableCell } from '../EditableTableCell/EditableTableCell';
import { changeProducts } from '../../productsReducer';

const headers = [
    { id: 1, name: 'Баркод', width: '80px', key: 'barCode' },
    { id: 2, name: 'Предмет', width: '120px', key: 'item' },
    { id: 3, name: 'Артикул поставщика', width: '180px', key: 'art' },
    { id: 4, name: 'Размер', width: '120px', key: 'size' },
    { id: 5, name: 'Доступно к заказу', width: '180px', key: 'available' },
    { id: 6, name: 'Товары в пути', width: '140px', key: 'products' },
    { id: 7, name: 'Итого кол-во товаров', width: '180px', key: 'allProducts' },
] as HeaderTypes[];

function MainTable() {
    const sortingHeader = useAppSelector(
        (state) => state.sortingReducer.sorting,
    );
    const dataValue = useAppSelector((state) => state.dataReducer.products);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sortItems = (a: ProductType, b: ProductType) => {
        if (a[sortingHeader] < b[sortingHeader]) return -1;
        if (a[sortingHeader] > b[sortingHeader]) return 1;
        return 0;
    };

    const MainTableMemo = useMemo(() => {
        const availables = dataValue.reduce(
            (accumulator, currentValue) =>
                accumulator + +currentValue.available,
            0,
        );
        const products = dataValue.reduce(
            (accumulator, currentValue) => accumulator + +currentValue.products,
            0,
        );
        const allProducts = dataValue.reduce(
            (accumulator, currentValue) =>
                accumulator + +currentValue.allProducts,
            0,
        );

        const handleSave = (
            rowId: number,
            validKey: ProductKeys,
            newValue: string,
        ) => {
            store.dispatch(
                changeProducts(
                    dataValue.map((el) => {
                        if (el.rowId === rowId) {
                            return { ...el, [validKey]: newValue };
                        } else {
                            return { ...el };
                        }
                    }),
                ),
            );
        };

        return (
            <Grid
                container
                p={2}
                gap={4}
                sx={{
                    background: (theme) => theme.palette.primary.main,
                    padding: '16px',
                    borderRadius: '16px',
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow
                            sx={{
                                display: 'flex',
                                gap: '2px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                            }}
                        >
                            {headers.map((el, index) => (
                                <TableCell
                                    sx={[
                                        { display: 'flex', width: el.width },
                                        sortingHeader === el.key && {
                                            background: (theme) =>
                                                theme.custom.c6,
                                        },
                                    ]}
                                    key={el.id}
                                >
                                    <Typography
                                        children={el.name}
                                        sx={{
                                            color: (theme) => theme.custom.c1,
                                        }}
                                    />
                                    <ArrowDropDownIcon
                                        sx={{
                                            color: (theme) => theme.custom.c5,
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            store.dispatch(changeSort(el.key))
                                        }
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {[...dataValue].sort(sortItems).map(
                            (row, index) => (
                                // {
                                // const keysValue = Object.keys(row).splice(1)
                                // return
                                <TableRow
                                    sx={{
                                        display: 'flex',
                                        gap: '2px',
                                        marginTop: '2px',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                    }}
                                    key={row.rowId}
                                >
                                    {/* {keysValue.map((el,indexEl) => 
                                <TableCell key={indexEl} sx={{ display: 'flex', width: headers[indexEl].width, color: theme => theme.custom.c1, background: theme => index % 2 ? theme.palette.secondary.contrastText : theme.custom.c2, }} onDoubleClick={handleDoubleClick}>{row[el as keyof row] || ''}</TableCell>
                             )} */}
                                    <EditableTableCell
                                        sx={{
                                            width: headers[0].width,
                                            color: (theme) => theme.custom.c1,
                                            background: (theme) =>
                                                index % 2
                                                    ? theme.palette.secondary
                                                          .contrastText
                                                    : theme.custom.c2,
                                        }}
                                        initialValue={row.barCode.toString()}
                                        onSave={(newValue) =>
                                            handleSave(
                                                row.rowId,
                                                'barCode',
                                                newValue,
                                            )
                                        }
                                        typeValue={'number'}
                                    />
                                    <EditableTableCell
                                        sx={{
                                            width: headers[1].width,
                                            color: (theme) => theme.custom.c1,
                                            background: (theme) =>
                                                index % 2
                                                    ? theme.palette.secondary
                                                          .contrastText
                                                    : theme.custom.c2,
                                        }}
                                        initialValue={row.item}
                                        onSave={(newValue) =>
                                            handleSave(
                                                row.rowId,
                                                'item',
                                                newValue,
                                            )
                                        }
                                        typeValue={'string'}
                                    />
                                    <EditableTableCell
                                        sx={{
                                            width: headers[2].width,
                                            color: (theme) => theme.custom.c1,
                                            background: (theme) =>
                                                index % 2
                                                    ? theme.palette.secondary
                                                          .contrastText
                                                    : theme.custom.c2,
                                        }}
                                        initialValue={row.art}
                                        onSave={(newValue) =>
                                            handleSave(
                                                row.rowId,
                                                'art',
                                                newValue,
                                            )
                                        }
                                        typeValue={'string'}
                                    />
                                    <EditableTableCell
                                        sx={{
                                            width: headers[3].width,
                                            color: (theme) => theme.custom.c1,
                                            background: (theme) =>
                                                index % 2
                                                    ? theme.palette.secondary
                                                          .contrastText
                                                    : theme.custom.c2,
                                        }}
                                        initialValue={row.size}
                                        onSave={(newValue) =>
                                            handleSave(
                                                row.rowId,
                                                'size',
                                                newValue,
                                            )
                                        }
                                        typeValue={'string'}
                                    />
                                    <EditableTableCell
                                        sx={{
                                            width: headers[4].width,
                                            color: (theme) => theme.custom.c1,
                                            background: (theme) =>
                                                index % 2
                                                    ? theme.palette.secondary
                                                          .contrastText
                                                    : theme.custom.c2,
                                        }}
                                        initialValue={row.available.toString()}
                                        onSave={(newValue) =>
                                            handleSave(
                                                row.rowId,
                                                'available',
                                                newValue,
                                            )
                                        }
                                        typeValue={'number'}
                                    />
                                    <EditableTableCell
                                        sx={{
                                            width: headers[5].width,
                                            color: (theme) => theme.custom.c1,
                                            background: (theme) =>
                                                index % 2
                                                    ? theme.palette.secondary
                                                          .contrastText
                                                    : theme.custom.c2,
                                        }}
                                        initialValue={row.products.toString()}
                                        onSave={(newValue) =>
                                            handleSave(
                                                row.rowId,
                                                'products',
                                                newValue,
                                            )
                                        }
                                        typeValue={'number'}
                                    />
                                    <EditableTableCell
                                        sx={{
                                            width: headers[6].width,
                                            color: (theme) => theme.custom.c1,
                                            background: (theme) =>
                                                index % 2
                                                    ? theme.palette.secondary
                                                          .contrastText
                                                    : theme.custom.c2,
                                        }}
                                        initialValue={row.allProducts.toString()}
                                        onSave={(newValue) =>
                                            handleSave(
                                                row.rowId,
                                                'allProducts',
                                                newValue,
                                            )
                                        }
                                        typeValue={'number'}
                                    />
                                </TableRow>
                            ),
                            // }
                        )}
                        <TableRow
                            sx={{
                                marginTop: '10px',
                                gap: '2px',
                                display: 'flex',
                                borderRadius: '8px',
                                overflow: 'hidden',
                            }}
                        >
                            <TableCell
                                sx={{
                                    display: 'flex',
                                    width: '602px',
                                    color: (theme) => theme.custom.c1,
                                    background: (theme) => theme.custom.c2,
                                }}
                            >
                                Итого
                            </TableCell>
                            <TableCell
                                sx={{
                                    display: 'flex',
                                    width: '180px',
                                    color: (theme) => theme.custom.c1,
                                    background: (theme) => theme.custom.c2,
                                }}
                            >
                                {availables}
                            </TableCell>
                            <TableCell
                                sx={{
                                    display: 'flex',
                                    width: '140px',
                                    color: (theme) => theme.custom.c1,
                                    background: (theme) => theme.custom.c2,
                                }}
                            >
                                {products}
                            </TableCell>
                            <TableCell
                                sx={{
                                    display: 'flex',
                                    width: '180px',
                                    color: (theme) => theme.custom.c1,
                                    background: (theme) => theme.custom.c2,
                                }}
                            >
                                {allProducts}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
        );
    }, [dataValue, sortItems, sortingHeader]);
    return MainTableMemo;
}

export default MainTable;
