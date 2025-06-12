import { createRouter, createWebHistory } from 'vue-router';
import desktop_routes from "./desktop-router";

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: desktop_routes, //여기에 조건문 써서 뿌려줄 수 있음. 
	scrollBehavior(to, from, savedPosition) {
		if (to.path === from.path) {
			return savedPosition || { x: 0, y: 0 };
		}
		return { top: 0 };
	},
});


export default router;
