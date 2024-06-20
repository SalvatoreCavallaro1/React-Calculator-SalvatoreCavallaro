import React,{ useState } from 'react'
import './App.css'
import Row from './components/Row';
import calculateResult from './utils/calculateResult';
import useRows from './hooks/useRows';

function App() {
  const { rows, addRow, updateRow, removeRow } = useRows();
  console.log(rows);
  return (
    <div className="App">
      <h1>Welcome to Simple React Calculator</h1>
      <div>
        {rows.map(row => (
          <Row key={row.id} id={row?.id} row={row} updateRow={updateRow} removeRow={removeRow} />
        ))}
      </div>
      <button onClick={addRow}>Add Row</button>
      <h2>Result: {calculateResult(rows)}</h2>
    </div>
  );
}

export default App
