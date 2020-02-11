import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import FormFeilds from '../../UI/formFeilds';

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
        },
    }
    submitForm() {

    }
    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter Your email
                        </div>
                        <div className="enroll_input">
                            <FormFeilds
                                id='email'
                                formData={this.state.formData.email}
                                change={(element) => this.updateForm(element)}
                            />
                        </div>
                    </form>
                </div>
            </Fade >
        )
    }
}
