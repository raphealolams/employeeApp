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
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employe',
      component: NewEmployee
    },
    {
      path: '/edit/:employeeId',
      name: 'edit-employe',
      component: EditEmployee
    },
    {
      path: '/:employeeId',
      name: 'view-employe',
      component: ViewEmployee
    }
  ]
})
