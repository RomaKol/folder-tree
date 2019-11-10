import { combineReducers } from 'redux';
import folders from './folders';
import files from './files';
import currentFolder from './currentFolder';
import { reducer as form } from 'redux-form';

export default combineReducers({
  folders, files, currentFolder, form
});