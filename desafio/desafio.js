// Constants
const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';
const COMPLETAR_AULA = 'aula/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aula/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aula/RESETAR_CURSO';

// Action creators
export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (email) => ({
  type: MODIFICAR_EMAIL,
  payload: email,
});
export const completarAula = (id) => ({ type: COMPLETAR_AULA, payload: id });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });

// Initial state
const aluno = {
  nome: 'Matheus Mello',
  email: 'matheus_usagui@hotmail.com',
  diasRestantes: 120,
};

const aulas = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

// Reducer Aluno
export const alunoReducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes++;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes--;
      break;
  }
}, aluno);

// Reducer Aula
export const aulasReducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      if (!isNaN(action.payload) && state[action.payload])
        state[+action.payload].completa = true;
      break;
    case COMPLETAR_CURSO:
      state.forEach((aula) => (aula.completa = true));
      break;
    case RESETAR_CURSO:
      state.forEach((aula) => (aula.completa = false));
      break;
  }
}, aulas);

