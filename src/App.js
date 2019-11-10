import React from 'react';
import { Provider } from 'react-redux';
import FolderTree from './components/FolderTree';
import FolderFiles from './components/FolderFiles';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
      <div className="row">
          <div className="col-6">Folder tree</div>
          <div className="col-6">Files</div>
        </div>
        <div className="row">
          <div className="col-6"><FolderTree /></div>
          <div className="col-6"><FolderFiles /></div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
