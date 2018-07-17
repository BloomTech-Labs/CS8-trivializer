import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from './UI/Button';

class SignIn extends Component {
    render() {
        return(
            <Fragment>
                <h1>SIGN IN PAGE</h1>
                <form>
                    <fieldset>
                        <label>Email</label>
                        <Field
                            name="email"
                            type="text"
                            component="input"
                            autoComplete="none"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <Field
                            name="password"
                            type="password"
                            component="input"
                            autoComplete="none"
                        />
                    </fieldset>
                    <Button>Sign In</Button>
                    <button onClick={() => {this.props.history.push('/')} }> Home </button>
                </form>
            </Fragment>
        )
    }
}

//TODO: MAP STATE TO PROPS
    export default compose(
        reduxForm({ form: 'signin'})
    )(SignIn)