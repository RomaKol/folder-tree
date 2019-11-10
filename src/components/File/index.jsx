import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';


class File extends Component {
  render() {
    return (
      <div className="file-item">
        
      </div>
    )
  }
}

File.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
};

export default File;