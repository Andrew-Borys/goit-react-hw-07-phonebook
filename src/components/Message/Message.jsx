import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text }) => {
  return <div style={{ width: '350px', textAlign: 'center' }}>{text}</div>;
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
