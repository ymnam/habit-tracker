import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState, useRef } from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef(); //createRef 대신

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
