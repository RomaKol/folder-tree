import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class CreateFolderForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <img src="./img/folder.png" />
          <Field name="title" component="input" />
        </div>
        {/* <button type="submit" >Create</button> */}
      </form>
    )
  }
}

export default reduxForm({
  form: 'createFolder'
})(CreateFolderForm)
