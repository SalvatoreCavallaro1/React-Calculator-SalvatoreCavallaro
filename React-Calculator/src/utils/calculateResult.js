const calculateResult = (rows) => {
    return rows.reduce((total, row) => {
      if (row.enabled) {
        
        return row.sign === '+' ? total + (isNaN(parseFloat(row.value))?  0 : parseFloat(row.value)) : total - (isNaN(parseFloat(row.value))?  0 : parseFloat(row.value));
      }
      return total;
    }, 0);
  };
  
  export default calculateResult;
