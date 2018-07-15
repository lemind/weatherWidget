import { ButtonWithAction } from 'components/Buttons/Button';

import { citiesActions } from 'src/redux/cities';

export default () => {
  const params = {
    buttonText: 'add',
    action: citiesActions.addCity,
    paramName: 'city'
  }
  return ButtonWithAction(params)
}
