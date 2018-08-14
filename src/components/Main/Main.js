import React from 'react';

import './Main.less';
import Cities from 'components/Cities';
import Search from 'components/Search';
import SearchResult from 'components/SearchResult';
import DefaultCity from 'components/DefaultCity';

export class Main extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="search__block">
          <Search />
          <DefaultCity />
        </div>
        <SearchResult />
        <Cities />
      </div>
    )
  };
}