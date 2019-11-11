import * as actionTypes from '../constants';

export const addFolderSuccess = (folder) => {
  return { type: actionTypes.ADD_FOLDER_SUCCESS, payload: { folder } };
};
export const addFolder = (data) => {
  return { type: actionTypes.ADD_FOLDER, data };
};

// export default {
//   addFolder, addFolderSuccess,
// };