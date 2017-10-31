import Vue          from 'vue'
import VueRouter    from 'vue-router'
import Vuex         from 'vuex'
import Iview        from 'iview'
import App          from './App.vue'
// import VueResource  from 'vue-resource';
import Index        from './components/index.vue'
import Router       from './router/router.js'

// import './css/com.css'  ;
// import './css/style.css';

Vue.config.debug = true

// Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex     )
Vue.use(Iview    )

// 创建一个路由器实例 配置路由规则
const router = new VueRouter({

    mode  : 'history',
    base  : __dirname,
    routes: Router.api

});

const store = new Vuex.Store({

    state : {
        datanum: '',
        mod    : '',
        mods   : '',
        modss  : '',
        adddd  : '',
        poo    : '',
    },

    mutations : {
        
        datanum (state, msg) {
            state.datanum = msg
        },
        mod (state, msg) {
            state.mod = msg
        },
        mods (state, msg) {
            state.mods = msg
        },
        modss (state, msg) {
            state.modss = msg
        },
        adddd (state, msg) {
            state.adddd = msg
        },
        poo (state, msg) {
            state.poo = msg
        }
    }

});

const app = new Vue({

    router,
    store,
    render: h => h(App)

}).$mount('#app')
