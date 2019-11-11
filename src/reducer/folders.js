import * as actionTypes from '../constants';

const initialState = {
  folders: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_FOLDER_SUCCESS:
      return { ...state, folders: [...state.folders, payload.folder] };

    case actionTypes.REMOVE_FOLDER_SUCCESS:
      const newFolders = state.folders.filter(item => item.id !== payload.folder.id);
      return { ...state, folders: newFolders };

    case 'RESET':
      return initialState;

    default:
      return state;
  };
};