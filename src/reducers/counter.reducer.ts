interface State {
  count: number;
}

export default (state: State = {count: 0}, action: any): State => {
  switch (action.type) {
    case 'click':
      return {count: state.count + 1};

    default:
      return state;
  }
};
