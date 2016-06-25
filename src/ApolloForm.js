import React from 'react';
import { Form } from 'ya-react-redux-form';

class ApolloForm extends Form {
  constructor(props, context) {
    super(props, context);
    this.submit = this.submit.bind(this);
  }
  submit() {
  }
}

ApolloForm.propTypes = {
  mutation: React.PropTypes.func,
};

export default ApolloForm;
