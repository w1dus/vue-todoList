


const desktop_routes = [
	{
		path: '/',
		children: [
			{
				path: '/',
				component: () => import('@/views/desktop/list.vue'),
				meta: {
					title: 'todolist-list',
				},
				name: 'TodoList',
			},
			{
				path: '/write',
				component: () => import('@/views/desktop/write.vue'),
				meta: {
					title: 'todolist-write',
				},
				name: 'TodoListWrite',
			},
			{
				path: '/modify/:id',
				component: () => import('@/views/desktop/modify.vue'),
				meta: {
					title: 'todolistModify',
				},
				name: 'TodoListModify',
			},
		],
	},
];

export default desktop_routes;
