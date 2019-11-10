import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FoldersList from '../FolderTree/FoldersList';

import styles from './styles.scss';


class Folder extends Component {
  render() {
    const { item, folders } = this.props;
    const parentId = item.id;
    let foldersList = [];
    if (parentId) {
      foldersList = folders.filter(item => item.parentId === parentId);
    }

    return (
      <div style="folder-item">
        <a style="folder-item__link">
          <img style="folder-item__img" src="./img/folder" />
          <span style="folder-item__title">{item.title}</span>
        </a>
        {
          foldersList.length > 0 &&
          <div style="folder-item__list">
            <FoldersList
              folders={foldersList}
              parentId={parentId} />
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

export default Folder;
