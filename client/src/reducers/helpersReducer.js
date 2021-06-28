const helpersReducer = (state = true, action) => {
  if (action.type === 'info') {
    return (state = false);
  }
  return state;
};

export default helpersReducer;
