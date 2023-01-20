const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('PREV_STATE_TOKEN:', store.getState().token);
  console.log('PREV_STATE_USER:', store.getState().user);
  next(action);
  console.log('NEXT_STATE_TOKEN:', store.getState().token);
  console.log('NEXT_STATE_USER:', store.getState().user);
  console.groupEnd();
  return next(action);
};

export default logger;
