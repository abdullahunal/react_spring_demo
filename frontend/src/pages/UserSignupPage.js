import React from "react";
import { signup } from '../api/apiCalls';
import Input from "../components/input";
import { withTranslation } from 'react-i18next';
import ButtonWithProgress from "../components/ButtonWithProgress";
import {withApiProgress} from "../shared/ApiProgress";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        errors: {},
    }

    onChange = event => {

        const { t } = this.props;
        const { name, value } = event.target;
        const errors = { ...this.state.errors } // klonlama
        errors[name] = undefined;
        // const value = event.target.value;
        // const name = event.target.name;

        if (name === 'password' || name === 'passwordRepeat') {
            if (name === 'password' && value !== this.state.passwordRepeat) {
                errors.passwordRepeat = t('Password Mismatch');
            } else if (name === 'passwordRepeat' && value !== this.state.password) {
                errors.passwordRepeat = t('Password Mismatch');
            } else {
                errors.passwordRepeat = undefined;
            }
        }
        this.setState({
            [name]: value,
            errors
        })
    };

    // onChangeUserName = (event) => {
    //     this.setState({
    //         username: event.target.value
    //     });
    // };


    onClickSignup = async (event) => {
        event.preventDefault();

        const { username, displayName, password } = this.state;

        const body = {
            username,
            displayName,
            password
        };

        try {
            const response = await signup(body);
        } catch (error) {
            if (error.response.data.validationErrors) {
                this.setState({ errors: error.response.data.validationErrors });
            }
        }

        // signup
        //     .then((response) => {
        //         this.setState({ pendingApiCall: false })
        //     }).catch((error) => {
        //         this.setState({ pendingApiCall: false })
        //     });
    };

    render() {
        const { errors } = this.state;
        const { username, displayName, password, passwordRepeat } = errors;
        const { t, pendingApiCall } = this.props;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center"> {t('Sign Up')} </h1>
                    <Input name="username" label={t("Username")} error={username} onChange={this.onChange} />
                    {/* <div className="form-group">
                        <label>Username</label>
                        <input name="username" className={username ? "form-control is-invalid" : 'form-control'} onChange={this.onChange} />
                        <div className="invalid-feedback"> {username} </div>
                    </div> */}

                    <Input name="displayName" label={t("Display Name")} error={displayName} onChange={this.onChange} />

                    <Input name="password" label={t("Password")} error={password} type="password" onChange={this.onChange} />

                    <Input name="passwordRepeat" label={t("Password Repeat")} error={passwordRepeat} type="password" onChange={this.onChange} />

                    <div className="text-center">
                        <ButtonWithProgress
                            onClick={this.onClickSignup}
                            disabled={pendingApiCall || password !== undefined}
                            pendingApiCall={pendingApiCall}
                            text={t('Sign Up')}
                        />
                    </div>
                </form>
            </div>

        )
    }
}

const UserSignupPageWithApiProgress = withApiProgress(UserSignupPage,'/api/1.0/users');

const UserSignupPageWithTranslation = withTranslation()(UserSignupPageWithApiProgress);

export default UserSignupPageWithTranslation;