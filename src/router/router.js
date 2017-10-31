



/*// 按需加载
let Index = resolve => require (['../components/index.vue'], resolve)
let child = resolve => require (['../components/child.vue'], resolve)
let ooooo = resolve => require (['../components/ooooo.vue'], resolve)*/



//一次性加载完成
import Index from '../components/index.vue'

let api = [{
        path     : '/',
        component: Index
    }
]

export default {
	api
}
