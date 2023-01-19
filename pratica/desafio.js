// Constants
const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';
const COMPLETAR_AULA = 'aula/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aula/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aula/RESETAR_CURSO';

// Actions creater
export const incrementar_tempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzir_tempo = () => ({ type: REDUZIR_TEMPO });
export const modificar_email = (email) => ({
  type: MODIFICAR_EMAIL,
  payload: email,
});
export const completar_aula = (id) => ({ type: COMPLETAR_AULA, payload: id });
export const completar_curso = () => ({ type: COMPLETAR_CURSO });
export const resetar_curso = () => ({ type: RESETAR_CURSO });

// Initial state
const InitialStateAluno = {
  nome: 'Matheus Mello',
  email: 'matheus_usagui@hotmail.com',
  diasRestantes: 120,
};
const InitialStateAulas = [
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

// Reducers
export const alunosDesafio = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes++;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, InitialStateAluno);

export const aulasDesafio = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      if (action.payload && !isNaN(action.payload)) {
        state[+action.payload].completa = true;
      }
      break;
    case COMPLETAR_CURSO:
      state.forEach((aula) => (aula.completa = true));
      break;
    case RESETAR_CURSO:
      state.forEach((aula) => (aula.completa = false));
      break;
  }
}, InitialStateAulas);
