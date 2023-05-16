import React, { useState } from 'react';
import styles from './list.module.css'
const List = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Rishikesh kumar singh' },
    { id: 2, name: 'Rishu kumar' },
    { id: 3, name: 'jayraj singh' },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((elem) => elem.id !== id));
  };

  return (
    <div className={styles.parent}>
      <h2>Todo List</h2>
      {data.map((elem) => (
        <div key={elem.id} className={styles.child}>
          <span>{elem.name}</span>
          <button onClick={() => handleDelete(elem.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
