import React from 'react';
import './GridLayout.css';

const GridLayout = ({ columns,rows, children }) => {
    // Define grid structure based on props
    const gridTemplateColumns = `repeat(${columns}, 1fr )`;
    const gridTemplateRows = `repeat(${rows}, 1fr)`;
    
    return (
        <div className="grid-layout"style={ { display: 'grid',  margin: 'auto 10%', gridTemplateColumns, gridTemplateRows } }>
        {children}
        </div>);
};

export default GridLayout;
