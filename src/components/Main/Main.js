import React from 'react';
// import './Main.less';

import Cities from 'components/Cities';

export class Main extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <header>
        <div>
          <Cities />
        </div>
      </header>
    )
  };
}