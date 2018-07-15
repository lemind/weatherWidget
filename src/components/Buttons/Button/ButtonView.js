import React from 'react';

export default class ButtonView extends React.Component {
  render() {
    const { onClick, buttonText } = this.props
    return (
      <div>
        <button
          onClick={ onClick }
        >{ buttonText }</button>
      </div>
    )
  };
}
