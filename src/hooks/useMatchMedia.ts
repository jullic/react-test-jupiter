import { useLayoutEffect, useState } from 'react';

const queries = ['(max-width: 1040px)'];

export const useMatchMedia = (): Record<string, boolean> => {

	const mediaQueryList = queries.map(query => matchMedia(query));
	const getValues = () => mediaQueryList.map(mediaQueryListItem => mediaQueryListItem.matches);

	const [values, setValues] = useState<boolean[]>(getValues);

	useLayoutEffect(() => {
		const handler = () => setValues(getValues);
		mediaQueryList.forEach(mediaQueryListItem => mediaQueryListItem.addEventListener('change', handler));

		return () => mediaQueryList.forEach(mediaQueryListItem => mediaQueryListItem.removeEventListener('change', handler));
	});

	return ['isMobile'].reduce((acc, screen, index) => ({ ...acc, [screen]: values[index] }), {});
}