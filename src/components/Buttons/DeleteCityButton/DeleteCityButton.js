import { ButtonWithAction } from 'components/Buttons/Button';

import { citiesActions } from 'src/redux/cities';

export default () => {
	const params = {
		buttonText: 'delete',
		action: citiesActions.deleteCity,
		paramName: 'city'
	}
	return ButtonWithAction(params)
}
