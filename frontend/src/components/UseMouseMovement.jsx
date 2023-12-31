const UseMouseMovement = (columns, rows, setActiveColumn, setActiveRow) => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const columnIndex = Math.floor(x / 68); // Each marble is 64x64px
      const rowIndex = Math.floor(y / 68); // Assuming each cell is 64x64px as well
  
      if (columnIndex >= 0 && columnIndex < columns && rowIndex >= 0 && rowIndex < rows) {
        setActiveColumn(columnIndex);
        setActiveRow(rowIndex);
      }
    };
  
    return { handleMouseMove };
  };
  
  export default UseMouseMovement;
  