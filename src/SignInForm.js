import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
//import FormErrors from './FormErrors';


class SignInForm extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            username: '',
            password: '',
            signedIn: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signIn = this.signIn.bind(this);
        this.confirmSignIn = this.confirmSignIn.bind(this);
    }
  
    signIn() {
        const { username, password } = this.state;  
        Auth.signIn({
            username: username,
            password: password
        })
        .then(() => console.log('successfully signed in'))
        .catch((err) => console.log(`Error signing in: ${ err }`))
    }
  
    confirmSignIn() {
        const { username, password } = this.state;
        Auth.confirmSignIn(username, password)
        .then(() => console.log('successfully confirmed signed in'))
        .catch((err) => console.log(`Error confirming sign up - ${ err }`))
    }
  
    handleSubmit(e) {
        e.preventDefault();

        this.signIn();
        this.confirmSignIn()
        this.setState({
            username: '',
            password: '',
            signedIn: true
        });
        e.target.reset();
    }
  
    handleChange(e) {
        if (e.target.id === 'username') {
          this.setState({
              username: e.target.value
          });
        } else if (e.target.id === 'password') {
          this.setState({
              password: e.target.value
          });
        }
    }
  
    render() {
      const { signedIn } = this.state;
      if (signedIn) {
          return (
              <article>
                <div className="container">
                  <h1>Questionaire</h1>
                </div>
                <div className="container">
                  <section className="section auth">
                    <form onSubmit={ this.handleSubmit } >
                    <fieldset className="form-group">
                    <div class="row">
                    <legend class="col-form-label col-sm-2">Times available</legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="morning" id="morningCheckBox"/>
                        <label class="form-check-label" for="morningCheckBox">
                          Mornings
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="afternoon" id="afternoonCheckBox"/>
                        <label class="form-check-label" for="afternoonCheckBox">
                          Afternoons
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="evening" id="eveningCheckBox"/>
                        <label class="form-check-label" for="eveningCheckBox">
                          Evenings
                        </label>
                      </div>
                    </div>
                  </div>
                      </fieldset>

                      <fieldset className="form-group">
                      <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Preferred Projects</legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="project1" id="project1CheckBox"/>
                        <label class="form-check-label" for="project1CheckBox">
                          Project 1
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="project2" id="project2CheckBox"/>
                        <label class="form-check-label" for="project2CheckBox">
                          Project 2
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="project3" id="project3CheckBox"/>
                        <label class="form-check-label" for="project3CheckBox">
                          Project 3
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="project4" id="project4CheckBox"/>
                        <label class="form-check-label" for="project4CheckBox">
                          Project 4
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="project5" id="project5CheckBox"/>
                        <label class="form-check-label" for="project5CheckBox">
                          Project 5
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="project6" id="project6CheckBox"/>
                        <label class="form-check-label" for="project6CheckBox">
                          Project 6
                        </label>
                      </div>
                    </div>
                  </div>
                      </fieldset>

                      <fieldset className="form-group">
                      <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Skillset</legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="programming" id="programmingCheckBox"/>
                        <label class="form-check-label" for="programmingCheckBox">
                          Programming
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="webdesign" id="webdesigncheckBox"/>
                        <label class="form-check-label" for="webdesigncheckBox">
                          Web Design
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="mechanicalengineering" id="mechanicalengineeringCheckBox"/>
                        <label class="form-check-label" for="mechanicalengineeringCheckBox">
                          Mechanical Engineering
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="networking" id="networkingCheckBox"/>
                        <label class="form-check-label" for="networkingCheckBox">
                          Network design and security
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="databases" id="databaseCheckBox"/>
                        <label class="form-check-label" for="databaseCheckBox">
                          Databases
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="computerengineering" id="computerengineeringCheckBox"/>
                        <label class="form-check-label" for="computerengineeringCheckBox">
                          Computer Engineering
                        </label>
                      </div>
                    </div>
                  </div>
                      </fieldset>
                    </form>
                  </section>   
                </div>
              </article>
          );
      } else {
        return (
            <article>
            <section className="section auth">
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={ this.handleSubmit }>
                  <div className="field">
                    <label htmlFor="username">Username: </label>
                    <input
                      className="input"
                      type="text"
                      id="username"
                      placeholder="Enter username"
                      value={ this.state.username }
                      onChange={ this.handleChange }
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="password">Password: </label>
                    <input
                      className="input"
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={ this.state.password }
                      onChange={ this.handleChange }
                    />
                  </div>
                  <div className="field">
                    <p className="control">
                      <button type="submit" className="btn btn-custom">
                        Submit
                      </button>
                    </p>
                  </div>
                </form>
            </div>
          </section>
          </article>
        );
      }
    }
}

export default SignInForm;