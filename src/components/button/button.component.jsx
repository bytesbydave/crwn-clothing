/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',

};

function Button({
  children, buttonType, ...buttonoptions
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...buttonoptions}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.string,
  buttonoptions: PropTypes.shape({
    name: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
  }),
};

Button.defaultProps = {
  buttonType: '',
  children: '',
  buttonoptions: {
    name: '',
    onClick: () => {},
    type: 'button',
  },
};

export default Button;
