import React, { Component } from 'react';
import Folder from '../Folder';

import styles from './styles.scss';


class FoldersList extends Component {
  render() {
    const { foldersList, parentId } = this.props;

    return (
      <ul className="folder-list">
        {
          foldersList && foldersList.length > 0 && foldersList.map(item =>
            <li className="folder-list__item" key={item.id}>
              <Folder id={item.id} title={item.title} parentId={item.parentId} />
            </li>
          )
        }
      </ul>
    )
  }
}

export default FoldersList;
