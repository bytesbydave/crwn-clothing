/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import './form-input.styles.scss';

const FormInput = ({ label, htmlFor, inputOptions }) => {
  return (
    <div className='group'>
      <input className='form-input' id={htmlFor} {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}
          htmlFor={htmlFor}>
          {label}
        </label>
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  inputOptions: PropTypes.shape({
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
  }),
};

FormInput.defaultProps = {
  label: '',
  inputOptions: {
    required: false,
    onChange: () => {},
    type: 'name',
    value: '',
  },
};

export default FormInput;
