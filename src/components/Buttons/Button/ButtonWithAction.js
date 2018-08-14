import { connect } from 'react-redux'
import { compose, withHandlers, withProps } from 'recompose'

import { ButtonView } from './index'

export default ({ buttonText, action, paramName, ...props }) => compose(
  withProps({ buttonText, ...props }),
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