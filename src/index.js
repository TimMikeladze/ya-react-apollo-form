import { YaForm, Actions } from 'ya-react-form';

class YaFormApollo extends YaForm {
  submit(name, mutation) {
    this.setMethod(({ form }) => {
      return new Promise((resolve, reject) => {
        mutation('spacedustio/awesome-cheatsheet').then(result => {
          if (!result.errors) {
            resolve(result);
          } else {
            reject(result.errors);
          }
        });
      });
    });

    this.setOnFailure((err, { name, dispatch }) => { // eslint-disable-line no-shadow
      dispatch(Actions.setFormError(name, err[0].message));
    });
    return super.submit(name);
  }
}

YaFormApollo.create = (formName, mutation, dispatch) => {
  let promise;
  const action = () => (thunkDispatch, thunkGetStore) => {
    const yaForm = new YaFormApollo(thunkDispatch, thunkGetStore());
    promise = yaForm.submit(formName, mutation);
  };
  dispatch(action());
  return promise;
};

export default YaFormApollo;
