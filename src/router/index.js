import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import left from '@/components/left'
import right from '@/components/right'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Hello',
		components: {
			default: Hello,
			left: left,
			right: right

		}
	}, {
		path: '/hi',
		name: 'Hi',
		component: Hi,
		children: [{
			path: '/',
			name: 'Hello/Hi',
			component: Hi
		}, {
			path: 'Hi1',
			name: 'hi1',
			component: Hi1
		}, {
			path: 'Hi2',
			name: 'hi2',
			component: Hi2
		}]
	}]
})