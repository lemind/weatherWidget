import { ButtonWithAction } from 'components/Buttons/Button';

import { citiesActions } from 'src/redux/cities';

export default (props) => {
	const params = {
		buttonText: 'delete',
		action: citiesActions.deleteCity,
		paramName: 'city',
		...props
	}
	return ButtonWithAction(params)
}
