import * as actions from '../constants';

const initialState = {
  folders: [],
};

export default (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actions.ADD_FOLDER:
      return { ...state, folders: [...state.folders, payload.folder] };

    case actions.REMOVE_FOLDER:
      const newFolders = state.folders.filter(item => item.id !== payload.folder.id);
      return { ...state, folders: newFolders };

    case 'RESET':
      return initialState;

    default:
      return state;
  };
};