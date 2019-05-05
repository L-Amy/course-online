import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/student/home/index'
import Register from '@/components/register/index'
import Login from '@/components/login/index'
import Uncomputed from '@/components/student/home/uncomputed'
import Computed from '@/components/student/home/computed'
import Person from '@/components/student/home/person'
import UncomputedEdit from '@/components/student/Edit/uncomputedEdit'
import TaskDetail from "@/components/student/Detail/taskDetail"
import TeacherHome from '@/components/teacher/home/index'
import TaskList from '@/components/teacher/home/taskList'
import PublishTask from '@/components/teacher/home/publishTask'
import StudentList from '@/components/teacher/home/studentList'
import TeacherMessage from '@/components/teacher/home/person'
import MarkTask from '@/components/teacher/markTask/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/uncomputed',
      children: [
        {
          path: '/uncomputed',
          component: Uncomputed
        },
        {
          path: '/computed',
          component: Computed
        },
        {
          path: '/person',
          component: Person,
        },
        {
          path: '/uncomputedEdit',
          name: 'UncomputedEdit',
          component: UncomputedEdit
        },
        {
          path: '/taskDetail',
          name: 'taskDetail',
          component: TaskDetail,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/teacherHome',
      name: 'teacherHome',
      component: TeacherHome,
      redirect: '/taskList',
      children: [
        {
          path: '/taskList',
          component: TaskList,
        },
        {
          path: '/publishTask',
          component: PublishTask
        },
        {
          path: '/studentList',
          component: StudentList,
        },
        {
          path: '/teacherMssage',
          component: TeacherMessage,
        },
        {
          path:'/marktask',
          name:'marktask',
          component:MarkTask
        }
      ]
    },
  ]
})
