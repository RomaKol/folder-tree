import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FoldersList from '../FolderTree/FoldersList';

import styles from './styles.scss';


class Folder extends Component {
  render() {
    const { id, title, parentId, folders } = this.props;
    const newParentId = id;
    let foldersList = [];
    if (newParentId ) {
      foldersList = folders.filter(item => item.parentId === newParentId);
    }

    return (
      <div className="folder-item">
        <a className="folder-item__link">
          <img className="folder-item__img" src="./img/folder.png" />
          <span className="folder-item__title">{title}</span>
        </a>
        {
          foldersList.length > 0 &&
          <div className="folder-item__list">
            <FoldersList
              folders={foldersList}
              parentId={newParentId} />
          </div>
        }
      </div>
    )
  }
}

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  folders: state.folders.folders,
});

export default connect(mapStateToProps)(Folder);
