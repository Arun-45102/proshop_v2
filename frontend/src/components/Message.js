import React from 'react';

const Message = ({ variant, children, icon }) => {
  return (
    <div className={variant} role='alert'>
      <div class='alert-icon'>
        <i class={icon}></i>
      </div>
      <div>{children}</div>
    </div>
  );
};

Message.defaultProps = {
  icon: 'ci-close-circle',
  variant: 'alert alert-danger d-flex',
};

export default Message;
