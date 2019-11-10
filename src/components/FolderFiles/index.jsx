import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class FolderFiles extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  folderId: state.currentFolder.folderId,
  files: state.currentFolder.files,
});

const mapDispatchToProps = dispath => (null);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderFiles);
