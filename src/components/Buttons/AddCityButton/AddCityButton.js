import { ButtonWithAction } from 'components/Buttons/Button';

import { citiesActions } from 'src/redux/cities';

export default (props) => {
  const params = {
    buttonText: 'add',
    action: citiesActions.addCity,
    paramName: 'city',
    ...props
  }
  return ButtonWithAction(params)
}
