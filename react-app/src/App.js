import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Valor: {state}</h1>
      <button
        onClick={({ target }) => dispatch({ type: target.innerText.toUpperCase() })}
      >
        Incrementar
      </button>
    </>
  );
}

export default App;
