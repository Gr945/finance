import React, { useState, useRef, useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/material';

interface EditableTableCellProps {
    initialValue: string;
    onSave: (newValue: string) => void;
    sx?: SxProps<Theme>;
    typeValue: 'string' | 'number';
}

export const EditableTableCell: React.FC<EditableTableCellProps> = ({
    initialValue,
    onSave,
    sx,
    typeValue = 'string',
}) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [value, setValue] = useState<string>(initialValue);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        const numberPattern = /^-?\d*\.?\d+$/;

        if (typeValue === 'number') {
            if (numberPattern.test(value.trim())) {
                onSave(value);
                setIsEditing(false);
            } else {
                setValue(initialValue);
                setIsEditing(false);
                alert('Недопустимый тип поля, введите ЦИФРУ');
            }
        } else {
            onSave(value);
            setIsEditing(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <TableCell
            onDoubleClick={handleDoubleClick}
            sx={{ display: 'flex', ...sx }}
        >
            {isEditing ? (
                <TextField
                    ref={inputRef}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleBlur();
                        }
                    }}
                    autoFocus
                    fullWidth
                    sx={{
                        '& input': {
                            color: (theme) => theme.custom.c1,
                            maxHeight: '20px',
                            padding: '0 5px',
                        },
                    }}
                />
            ) : (
                value
            )}
        </TableCell>
    );
};
