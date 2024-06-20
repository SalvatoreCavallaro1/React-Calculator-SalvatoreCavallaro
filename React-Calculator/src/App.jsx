import React,{ useState } from 'react'
import './App.css'
import Row from './components/Row';
import calculateResult from './utils/calculateResult';
import useRows from './hooks/useRows';

function App() {
  const { rows, addRow, updateRow, removeRow } = useRows();
  
  return (
    <div className="App">
      <h1>Welcome to Simple React Calculator</h1>
      <div>
        {rows.map(row => (
          <Row key={row.id} id={row?.id} row={row} updateRow={updateRow} removeRow={removeRow} />
        ))}
      </div>
      <button id="addButton" onClick={addRow}>Add Row</button>
      {rows.length>=1?
      <>
    <h2>Result </h2>
      <div id="result">{calculateResult(rows)}</div>
      </>
    :
    <h2 >Add at least one Row</h2>  
    }
      
    </div>
  );
}

export default App
