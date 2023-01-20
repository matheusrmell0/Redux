// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// function App() {
//   const state = useSelector((state) => state);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <h1>Valor: {state}</h1>
//       <button
//         onClick={({ target }) => dispatch({ type: target.innerText.toUpperCase() })}
//       >
//         Incrementar
//       </button>
//     </>
//   );
// }

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {reduzir, incrementar} from './store/contador'

// const App = () => {
//   const dispatch = useDispatch()
//   const state = useSelector((state) => state.total);
//   return <>
//   <h1>Total: {state}</h1>
//   <button onClick={() => dispatch(incrementar())}>Incrementar</button>
//   <button onClick={() => dispatch(reduzir())}>Reduzir</button>
//   </>;
// };

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduzir, incrementar } from './store/contador';
import {abrir, fechar} from './store/modal'

const App = () => {
  const dispatch = useDispatch();
  const {contador, modal} = useSelector((state) => state);
  return (
    <>
      {modal && <h1>Total: {contador}</h1>}
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
      <button onClick={() => dispatch(abrir())}>Abrir</button>
      <button onClick={() => dispatch(fechar())}>Fechar</button>
    </>
  );
};

export default App;
