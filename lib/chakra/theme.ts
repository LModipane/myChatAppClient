import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};
export const theme = extendTheme(
	{ config },
	{
		color: {
			brand: {
				100: '#3d84f7',
			},
		},
		styles: {
			global: () => {
				return {
					body: {
						bg: 'gray.600',
					},
				};
			},
		},
	},
);
