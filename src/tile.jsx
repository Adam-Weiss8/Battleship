import React from 'react';

const Tile = ({ status, onClick }) => {
  const getClassName = () => {
    if (status === 'hit') return 'tile hit';
    if (status === 'miss') return 'tile miss';
    return 'tile';
  };

  return <div className={getClassName()} onClick={onClick}></div>;
};

export default Tile;