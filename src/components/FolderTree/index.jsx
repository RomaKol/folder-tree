import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoldersList from './FoldersList';

import styles from './styles.scss';


class FolderTree extends Component {
  render() {
    const { folders } = this.props;
    let foldersList = [];
    if (folders.length > 0) {
      foldersList = folders.filter(item => item.parentId === "0");
    }

    return (
      <div className="folder-tree">
        <FoldersList
          foldersList={foldersList}
          parentId="0" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  folders: state.folders.folders,
});

const mapDispatchToProps = dispath => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderTree);
