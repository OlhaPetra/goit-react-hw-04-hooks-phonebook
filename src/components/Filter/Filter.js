import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name{' '}
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
