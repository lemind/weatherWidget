import { connect } from 'react-redux'
import { setObservableConfig, renderComponent,
  compose, withHandlers, withProps, branch, nest } from 'recompose'

import { ButtonView } from './index'

export default ({ buttonText, action, paramName }) => compose(
  withProps({ buttonText }),
  connect(
    (state) => ({}),
    (dispatch) => ({
      onClick: (param) => {
        return dispatch(action(param))
      }
    }),
  ),
  withHandlers({
    onClick: ({ onClick, ...others }) => (e) => {
      onClick(others[paramName]);
    },
  }),
)(ButtonView);