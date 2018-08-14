import React from 'react';
import { Observable, from } from 'rxjs'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'

import { weatherActions } from 'src/redux/weather/index';
import './Search.less';

export class ViewSearch extends React.Component {
  render() {
  	const { currentTerm, onChange, ...others } = this.props

    return (
      <div className="search">
      	<input
      		type="text"
      		value={ currentTerm }
      		onChange={ onChange }
      		placeholder='City'
      	/>
      </div>
    )
  };
}

export default compose(
  connect(
    (state) => ({
      currentTerm: state.weather.searchCurrentTerm,
    }),
    (dispatch) => ({
      onChange: (currentTerm) => {
      	return dispatch(weatherActions.searchByTerm(currentTerm))
      }
    }),
  ),
  withHandlers({
    onChange: ({ onChange }) => (e) => {
      onChange(e.target.value);
    },
  }),
)(ViewSearch);
