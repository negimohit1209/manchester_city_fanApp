import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import FormFeilds from '../../UI/formFeilds';
import { validate } from '../../UI/minc';

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
          placeHolder: 'Enter Your email'
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
      console.log(dataToSubmit);
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
              <button onClick={event => this.submitForm(event)}>Submit</button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
