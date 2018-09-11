import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard/dashboard'
import NewEmployee from '@/components/Employee/NewEmployee'
import EditEmployee from '@/components/Employee/EditEmployee'
import ViewEmployee from '@/components/Employee/viewEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Dashboard
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: NewEmployee
    }
  ]
})
