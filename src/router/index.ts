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
			{
				name: '灯光',
				tag: 'Route',
				path: `${prefix}/light`,
				element: lazy(() => import('../pages/lights')),
			},
			{
				name: '自定义图形',
				tag: 'Route',
				path: `${prefix}/self`,
				element: lazy(() => import('../pages/myGeometry')),
			},
			{
				name: '加载模型',
				tag: 'Route',
				path: `${prefix}/model`,
				element: lazy(() => import('../pages/model')),
			},
			{
				name: '加载任务模型',
				tag: 'Route',
				path: `${prefix}/person`,
				element: lazy(() => import('../pages/person')),
			},
			{
				name: '照相机',
				tag: 'Route',
				path: `${prefix}/camera`,
				element: lazy(() => import('../pages/camera')),
			},
			{
				name: '运动',
				tag: 'Route',
				path: `${prefix}/carAnimation`,
				element: lazy(() => import('../pages/carAnimation')),
			},
			
		],
	},

];

