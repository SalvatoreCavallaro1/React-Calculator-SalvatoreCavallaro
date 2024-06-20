import { useState } from 'react';


const useRows = () => {
    const [rows, setRows] = useState([{ id: 1, sign: '+', value: 0, enabled: true }]);
    const [nextId, setNextId] = useState(2);

    const addRow = () => {
        setRows([...rows, { id: nextId, sign: '+', value: 0, enabled: true }]);
        setNextId(nextId + 1);
    };

    const updateRow = (id, name, value) => {
        const updatedRows = rows.map(row =>
         row.id === id ? { ...row, [name]: value } : row
        );
        
        setRows(updatedRows);
    };

    const removeRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };
    return { rows, addRow, updateRow, removeRow };
    };

export default useRows;