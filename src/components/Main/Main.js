import React from 'react';
// import './Main.less';

import Cities from 'components/Cities';
import Search from 'components/Search';
import SearchResult from 'components/SearchResult';

export class Main extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <header>
        <div>
          <Search />
          <SearchResult />
          <Cities />
        </div>
      </header>
    )
  };
}