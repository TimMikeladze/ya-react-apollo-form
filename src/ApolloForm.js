import React from 'react';
import { Form, FormHandler } from 'ya-react-redux-form';
import _ from 'lodash';

class ApolloForm extends Form {
  constructor(props, context) {
    super(props, context);

    this.handler.setMethod(({ name, form, dispatch, getState }) => {
      if (props.mutation) {
        // TODO handle multiple paramaters
        const result = props.mutation(_.values(form)[0]);
        return result;
      }
    });

    this.handler.setOnSuccess((err, { name, form, dispatch, getState }) => {
      console.log('Success');
    });

    this.handler.setOnFailure((err, { name, form, dispatch, getState }) => {
      console.log('Failure');
    });
  }
}

ApolloForm.propTypes = {
  mutation: React.PropTypes.func,
};

export default ApolloForm;
