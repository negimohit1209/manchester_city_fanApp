import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import FormFeilds from '../../UI/formFeilds';
import { validate } from '../../UI/minc';
import { firebasePromotions } from '../../../firebase';

export default class Enroll extends Component {
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
      }
    }
  };

  resetFormSuccess(type) {
    const newFormdata = { ...this.state.formData };
    for (let key in newFormdata) {
      newFormdata[key].value = '';
      newFormdata[key].valid = false;
      newFormdata[key].validationMessage = '';
    }
    this.setState({
      formError: false,
      formData: newFormdata,
      formSuccess: type
        ? 'Congratulations'
        : 'Email already exists in the database'
    });
    this.successMessage();
  }

  successMessage() {
    setTimeout(() => {
      this.setState({ formSuccess: '' });
    }, 2000);
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
  submitForm(event) {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;
    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      firebasePromotions
        .orderByChild('email')
        .equalTo(dataToSubmit.email)
        .once('value')
        .then(snapshot => {
          if (snapshot.val() == null) {
            firebasePromotions.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
    } else {
      this.setState({
        formError: true
      });
    }
  }
  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter Your email</div>
            <div className="enroll_input">
              <FormFeilds
                id="email"
                formData={this.state.formData.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">Something is wrong try again</div>
              ) : null}
              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={event => this.submitForm(event)}>Enroll</button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
