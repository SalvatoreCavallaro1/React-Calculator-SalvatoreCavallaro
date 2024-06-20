import React from 'react';
import '../styles/Row.css';
import useRows from '../hooks/useRows';


const Row = ({ id, row, updateRow, removeRow }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateRow(id, name, value);
  };



  const handleToggle = () => {
    updateRow(id, 'enabled', !row.enabled);
  };

  return (
    <div className="row">
      <button id="removeButton" onClick={() => removeRow(id)} >X</button>
      
      <input className="toggleB" type="checkbox" onChange={handleToggle} checked={row.enabled}></input>
      
      <select name="sign" value={row.sign} onChange={handleChange} disabled={!row.enabled}>
        
        <option value="+">+</option>
        <option value="-">-</option>
        
      </select>
      
      <input
        type="number"
        name="value"
        value={row.value}
        onChange={handleChange}
        disabled={!row.enabled}
      />
    </div>
  );
};

export default Row;