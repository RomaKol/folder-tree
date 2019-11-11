import * as actionTypes from '../constants';

const initialState = {
  folderId: '0',
  files: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_FOLDER:
      return { ...state, folderId: payload.folderId, files: [...payload.files] };

    case 'RESET':
      return initialState;

    default:
      return state;
  };
};