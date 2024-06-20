import React from 'react';
import '../styles/Row.css';

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
      <button onClick={() => removeRow(id)}>Remove</button>
      <button onClick={handleToggle}>{row.enabled ? 'Disable' : 'Enable'}</button>
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