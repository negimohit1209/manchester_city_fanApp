import React, { Component } from 'react';
import { firebase } from '../../firebase';
import FormFeilds from '../UI/formFeilds';
import { validate } from '../UI/minc';

export default class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter Your email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter Your password'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ''
      }
    }
  };

  submitForm(event) {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;
    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }
    if (formIsValid) {
      console.log(dataToSubmit);
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push('/dashboard');
        })
        .catch(() => {
          this.setState({
            formError: true
          });
        });
      //   firebasePromotions
      //     .orderByChild('email')
      //     .equalTo(dataToSubmit.email)
      //     .once('value')
      //     .then(snapshot => {
      //       if (snapshot.val() == null) {
      //         firebasePromotions.push(dataToSubmit);
      //         this.resetFormSuccess(true);
      //       } else {
      //         this.resetFormSuccess(false);
      //       }
      //     });
    } else {
      this.setState({
        formError: true
      });
    }
  }
  updateForm(element) {
    const newFormdata = { ...this.state.formData };
    const newElement = { ...newFormdata[element.id] };
    newElement.value = element.event.target.value;

    let validateData = validate(newElement);
    newElement.valid = validateData[0];
    newElement.validationMessage = validateData[1];
    newFormdata[element.id] = newElement;
    this.setState({ formError: false, formData: newFormdata });
  }
  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: '100px' }}>
          <form onSubmit={event => this.submitForm(event)}>
            <h2>Please Login</h2>
            <FormFeilds
              id="email"
              formData={this.state.formData.email}
              change={element => this.updateForm(element)}
            />
            <FormFeilds
              id="password"
              formData={this.state.formData.password}
              change={element => this.updateForm(element)}
            />
            {this.state.formError ? (
              <div className="error_label">Something is wrong try again</div>
            ) : null}
            <button onClick={event => this.submitForm(event)}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}
