import classnames from 'classnames';
import * as React from 'react';
import interfaceLanguage from '../../../utils/interfaceLanguage';

import './style.less';

interface Props {
  onChange: (name: string) => any;
  onBlur?: () => any;
  field: string;
  label: string;
  value: any;
  disabled?: boolean;
  options: any[];
  error?: string;
  icon: string;
  language?: string;
}

const SelectInput = ({
  field,
  label,
  value,
  error,
  options,
  icon,
  onChange,
  onBlur,
  disabled,
  language
}: Props) => {
  const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <div className="field">
      <label htmlFor={field} className="label">
        {label}
      </label>
      <div className="control has-icons-left">
        <div className="select">
          <select
            name={field}
            id={field}
            value={value}
            onChange={onChange(field)}
            onBlur={onBlur}
            disabled={disabled}
          >
            {options.length !== 0 &&
              options.map((option: any, index: number) => {
                return (
                  <option key={index} value={option._id ? option._id : option.id}>
                    {lang.selectInputs[option.name] ? lang.selectInputs[option.name] : option.name}
                  </option>
                );
              })}
            {options.length === 0 && <option value={'default'}>Please choose maker first</option>})}
          </select>
        </div>
        <div className="icon is-small is-left">
          <i className={classnames('fa', { [icon]: !!icon })} aria-hidden="true" />
        </div>
      </div>
      {error && <p className="help is-danger">{error}</p>}
    </div>
  );
};
export default SelectInput;
