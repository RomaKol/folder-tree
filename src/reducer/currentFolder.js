import * as actions from '../constants';

const initialState = {
  folderId: '0',
  files: [],
};

export default (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actions.SET_FOLDER:
      return { ...state, folderId: payload.folderId, files: [...payload.files] };

    case 'RESET':
      return initialState;

    default:
      return state;
  };
};