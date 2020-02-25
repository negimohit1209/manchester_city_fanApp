import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormFeilds from '../../UI/formFeilds';
import { validate } from '../../UI/minc';

export default class AddEditMatch extends Component {
  state = {
    matchId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    teams: [],
    formData: {
      date: {
        element: 'input',
        value: '',
        config: {
          label: 'Event Date',
          name: 'date_input',
          type: 'date'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      local: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a local team',
          name: 'select_local',
          type: 'select',
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: false
      },
      resultLocal: {
        element: 'input',
        value: '',
        config: {
          label: 'result Local',
          name: 'result_local_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: false
      },
      away: {
        element: 'select',
        value: '',
        config: {
          label: 'Select an away team',
          name: 'select_away',
          type: 'select',
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: false
      },
      resultAway: {
        element: 'input',
        value: '',
        config: {
          label: 'result away',
          name: 'result_away_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: false
      },
      referee: {
        element: 'input',
        value: '',
        config: {
          label: 'Referee',
          name: 'referee_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      stadium: {
        element: 'input',
        value: '',
        config: {
          label: 'Stadium',
          name: 'stadium_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      }
    }
  };
  render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={event => this.submitForm(event)}>
              <FormFeilds
                id="date"
                formData={this.state.formData.date}
                change={element => this.updateForm(element)}
              />
              <div className="select_team_layout">
                <div className="label_inputs">Local</div>
                <div className="wrapper">
                  <div className="left">
                    <FormFeilds
                      id="local"
                      formData={this.state.formData.local}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormFeilds
                      id="resultLocal"
                      formData={this.state.formData.resultLocal}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>
              <div className="select_team_layout">
                <div className="label_inputs">Away</div>
                <div className="wrapper">
                  <div className="left">
                    <FormFeilds
                      id="local"
                      formData={this.state.formData.away}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormFeilds
                      id="resultLocal"
                      formData={this.state.formData.resultAway}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>
              <div className="split_fields">
                <FormFeilds
                  id="referee"
                  formData={this.state.formData.referee}
                  change={element => this.updateForm(element)}
                />
                <FormFeilds
                  id="stadium"
                  formData={this.state.formData.stadium}
                  change={element => this.updateForm(element)}
                />
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}
