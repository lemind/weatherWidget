import React from 'react';

export default class ButtonView extends React.Component {
  render() {
    const { onClick, buttonText } = this.props;
    const active = this.props.active !== undefined
      ? this.props.active
      : true;
    return (
      <div>
        <button
          onClick={ onClick }
          disabled={ !active }
        >{ buttonText }</button>
      </div>
    )
  };
}
