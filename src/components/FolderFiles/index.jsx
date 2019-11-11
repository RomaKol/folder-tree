import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import CreateFolderForm from './CreateFolderForm';
import {addFolder} from '../../actions/index';


class FolderFiles extends Component {
  handleAddFolder = (values) => {
    const {addFolder, folderId} = this.props;
    // console.log("values", values);
    const id = v4();
    addFolder({...values, id, parentId: folderId});
  };

  render() {
    return (
      <div className="files-container">
        <CreateFolderForm onSubmit={this.handleAddFolder} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  folderId: state.currentFolder.folderId,
  files: state.currentFolder.files,
});

const mapDispatchToProps = dispath => ({
  addFolder: (folder) => dispath(addFolder(folder)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderFiles);
