import { lazy } from 'react';
import packageJson from '../../package.json'
export const BASE_URL = packageJson.homepage;
export const prefix = '';

export const routerConfig =  [
    {
		name: '登录',
		tag: 'Route',
		path: `${prefix}/login`,
		element: lazy(() => import('../pages/login')),
	},
	{
		tag: 'Route',
		path: '/',
		element: lazy(() => import('../layout')),
		children: [
			{
				name: '首页',
				tag: 'Route',
				index: true,
				element: lazy(() => import('../pages/home')),
			},
			{
				name: '首页',
				tag: 'Route',
				path: `${prefix}/home`,
				element: lazy(() => import('../pages/home')),
			},
			
		],
	},

];

