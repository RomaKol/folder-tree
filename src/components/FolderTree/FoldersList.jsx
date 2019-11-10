import React, { Component } from 'react';
import { connect } from 'react-redux';
import Folder from '../Folder';

import styles from './styles.scss';


class FoldersList extends Component {
  render() {
    const { folders, parentId } = this.props;

    return (
      <ul className="folder-list">
        {
          folders && folders.length > 0 && folders.map(item =>
            <li style="folder-list__item" key={item.id}>
              <Folder item={item} />
            </li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  folders: state.currentFolder.folders,
});

const mapDispatchToProps = dispath => (null);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersList);
