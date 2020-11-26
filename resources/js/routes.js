
function lazyLoad(view){
  return() => import(`./components/${view}`)
}
export default {
	mode:'history',
	routes:[
		{
			path: '/',
			component: lazyLoad('home')
		}
	]
}