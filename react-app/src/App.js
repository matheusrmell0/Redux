import React from 'react';

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

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { reduzir, incrementar } from './store/contador';
// import {abrir, fechar} from './store/modal'

// const App = () => {
//   const dispatch = useDispatch();
//   const {contador, modal} = useSelector((state) => state);
//   return (
//     <>
//       {modal && <h1>Total: {contador}</h1>}
//       <button onClick={() => dispatch(incrementar())}>Incrementar</button>
//       <button onClick={() => dispatch(reduzir())}>Reduzir</button>
//       <button onClick={() => dispatch(abrir())}>Abrir</button>
//       <button onClick={() => dispatch(fechar())}>Fechar</button>
//     </>
//   );
// };
//
//

// import { useDispatch, useSelector } from 'react-redux';
// import Input from './pratica/Input';
// import { userLogin } from './slice/login';

// const App = () => {
//   const dispatch = useDispatch();
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const { data } = useSelector((state) => state.login.user);

//   function handleSubmit(event) {
//     event.preventDefault();
//     dispatch(userLogin({ username, password }));
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <Input
//           label="Usuário"
//           name="username"
//           type="text"
//           id="username"
//           value={username}
//           onChange={({ target }) => setUsername(target.value)}
//         />
//         <Input
//           label="Senha"
//           name="password"
//           type="password"
//           id="password"
//           value={password}
//           onChange={({ target }) => setPassword(target.value)}
//         />
//         <button>Enviar</button>
//       </form>
//       {data?.email}
//     </>
//   );
// };

// export default App;

// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './store/reducers/userLogin';

// const App = () => {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const dispatch = useDispatch();
//   const { data } = useSelector((state) => state.login.user);

//   function handleSubmit(event) {
//     event.preventDefault();
//     dispatch(login({ username, password }));
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="usuario">
//           Usúario
//           <input
//             type="text"
//             id="usuario"
//             name="usuario"
//             value={username}
//             onChange={({ target }) => setUsername(target.value)}
//           />
//         </label>
//         <label htmlFor="password">
//           Senha
//           <input
//             type="text"
//             id="password"
//             name="password"
//             value={password}
//             onChange={({ target }) => setPassword(target.value)}
//           />
//         </label>
//         <button>Enviar</button>
//       </form>
//       <h1>
//         Email: <span>{data?.email}</span>
//       </h1>
//     </>
//   );
// };

//
//

import { useDispatch, useSelector } from 'react-redux';
import { login, autoLogin } from './store/reducers/login';

const App = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.login.user);

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label style={{display: 'block', marginBottom: '15px'}} htmlFor="usuario">
          Usúario
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button style={{display: 'block', marginTop: '15px'}}>Enviar</button>
      </form>
      <div>
        <p>Nome: {data?.nome}</p>
        <p>Email: {data?.email}</p>
      </div>
    </>
  );
};

export default App;
