import classnames from 'classnames';
import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validateForm as validate } from '../../../utils/formValidation';
import interfaceLanguage from '../../../utils/interfaceLanguage';

import '../style.less';

export interface Props {
  input?: HTMLInputElement;
  name: string;
  title: string;
  type: string;
  meta?: any;
  custom?: object;
  handleSubmit: React.FormEventHandler<any>;
  invalid?: boolean;
  language: string;
  loading: boolean;
}

const renderTextField = ({ title, input, type, meta: { touched, error }, ...custom }: Props) => (
  <div className="field">
    <label htmlFor="title" className="label">
      {title}
    </label>
    <div className="control has-icons-left">
      <input
        className={classnames('input', { 'is-danger': touched && !!error })}
        name={name}
        type={type}
        {...input}
        {...custom}
      />
      <div className="icon is-small is-left">
        {type === 'email' && <i className="fa fa-envelope-o" aria-hidden="true" />}
        {type === 'password' && <i className="fa fa-lock" aria-hidden="true" />}
      </div>
    </div>
    <p className="help is-danger">{touched && error}</p>
  </div>
);

const SigninForm = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <form onSubmit={props.handleSubmit}>
      <p className="help has-text-grey-light">{lang.signinForm.passwordTooltip}</p>
      <div>
        <Field
          // @ts-ignore: redux from types error
          name="email"
          type="email"
          component={renderTextField}
          placeholder={lang.signinForm.emailFieldPlaceholder}
          title={lang.signinForm.emailField}
        />
      </div>
      <div>
        <Field
          // @ts-ignore: redux from types error
          name="password"
          type="password"
          component={renderTextField}
          placeholder={lang.signinForm.passwordFieldPlaceholder}
          title={lang.signinForm.passwordField}
        />
      </div>
      <div className="is-clearfix">
        <button
          className={classnames('button is-warning is-pulled-right', {
            'is-loading': props.loading
          })}
        >
          {lang.signinForm.submitButton} &nbsp;
          <i className="fa fa-paper-plane-o" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default reduxForm<any, any>({
  form: 'SigninForm',
  validate
})(SigninForm);
