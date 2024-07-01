import React, { useState } from 'react'
import {DndContext, useDraggable, useDroppable, closestCenter} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

// Create a single box component
function Box({ id , locked }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    backgroundColor: isOver ? 'lightgreen' : 'white',
    border: '1px solid black',
    width: '50px',
    height: '50px',
  };

  return <div ref = {setNodeRef} style = {style} />;
}

// Create a draggable image component
function DraggableImage({ id, src, width, height, locked, onRotate}) {
  const [orientation, setOrientation] = useState('horizontal');
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transformOrigin: 'center',
    width: orientation === 'horizontal' ? `${width * 50}px` : `${height * 50}px`,
    height: orientation === 'horizontal' ? `${height * 50}px` : `${width * 50}px`,
    cursor: locked ? 'default' : 'grab',
  };

  const handleRotate = () => {
    if (!locked) {
      setOrientation((prev) => (prev === 'horizontal' ? 'vertical' : 'horizontal'));
      onRotate(id);
    }
  };

  return (
    <img
      ref = {setNodeRef}
      src = {src}
      style = {style}
      {...(!locked && listeners)}
      {...attributes}
      onClick = {!locked ? handleRotate: undefined}
    />
  );
}

// Create the main grid component with labels and holding area
function Grid({locked}) {
  const rows = 'ABCDEFGHIJ';
  const cols = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div style = {{ display: 'flex' }}>
      <div style = {{ marginRight: '20px', backgroundImage: 'url(src/assets/Ship_Start.jpg)', padding: '10px' }}>
        <h3>Shipyard</h3>
        {/* Placeholder for Ships */}
      </div>
      <div style = {{ backgroundImage: 'url(src/assets/Board.jpg)', padding: '10px' }}>
        <div style = {{ display: 'flex' }}>
          <div style = {{ width: '50px' }} />
          {cols.map(col => (
            <div key = {col} style = {{ width: '50px', textAlign: 'center' }}>{col}</div>
          ))}
        </div>
        {rows.split('').map((row, rowIndex) => (
          <div key = {rowIndex} style = {{ display: 'flex' }}>
            <div style = {{ width: '50px', textAlign: 'center' }}>{row}</div>
            {cols.map(col => (
              <Box key = {`${row}${col}`} id = {`${row}${col}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [images, setImages] = useState([
    { id: 'Carrier', src: 'src/assets/Carrier.png', width: 1, height: 5, onGrid: false },
    { id: 'Battleship', src: 'src/assets/Battleship.png', width: 1, height: 4, onGrid: false },
    { id: 'Cruiser', src: 'src/assets/Cruiser.png', width: 1, height: 3, onGrid: false },
    { id: 'Submarine', src: 'src/assets/Submarine.png', width: 1, height: 3, onGrid: false },
    { id: 'Destroyer', src: 'src/assets/Destroyer.png', width: 1, height: 2, onGrid: false },
  ]);
  const [locked, setLocked] = useState(false); //define locked state

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) {
      setImages((prevImages) =>
        prevImages.map((image) =>
          image.id === active.id ? { ...image, onGrid: true } : image
        )
      );
    }
  };

  const handleRotate = (id) => {
    // Update the image rotation state if needed
  };

  const handleLock = () => {
    const allOnGrid = images.every((image) => image.onGrid);
    if (allOnGrid) {
      setLocked(true);
    } else {
      alert('All images must be on the grid and not overlapping to lock.');
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Grid locked = {locked} />
      <div style = {{ display: 'flex', flexDirection: 'column', marginRight: '20px', backgroundImage: 'url(src/assets/Ship_start.png)', padding: '10px' }}>
        {images.map((image) => (
          <DraggableImage
            key = {image.id}
            id = {image.id}
            src = {image.src}
            width = {image.width}
            height = {image.height}
            locked = {locked}
            onRotate = {handleRotate}
          />
        ))}
      </div>
      <button onClick = {handleLock} style = {{ marginTop: '20px' }}>
        Setup Complete, Lock in Ship Locations
      </button>
    </DndContext>
  );
}

export default App;
