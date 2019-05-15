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
import MarkDetail from "@/components/student/marked/index"

import TeacherHome from '@/components/teacher/home/index'
import TaskList from '@/components/teacher/home/taskList'
import PublishTask from '@/components/teacher/home/publishTask'
import StudentList from '@/components/teacher/home/studentList'
import TeacherMessage from '@/components/teacher/home/person'
import AnswerQuestion from '@/components/teacher/markTask/index'
import MarkTask from '@/components/teacher/answerQuestion/index'
import MarkList from '@/components/teacher/markList/index'

import PersonAdd from '@/components/manger/home/personAdd/index'
import MangerHome from '@/components/manger/home/index'
import StudentManger from '@/components/manger/home/student/index'
import Teachermanger from '@/components/manger/home/teacher/index'
import MangerMessage from '@/components/manger/home/person/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/uncomputed',
      name:'studentHome',
      component: Home,
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
        },
        {
          path:'/markDetail',
          name:'markDetail',
          component:MarkDetail,
        }
      ]
    },
    {
      path: '/',
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
          name:'publishTask',
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
        },{
          path:'/answerQuestion',
          name:'answerQuestion',
          component:AnswerQuestion,
        },{
          path:'/markList',
          component:MarkList,
        }
      ]
    },
    {
      path:'/mangerHome',
      name:'mangerHome',
      component:MangerHome,
      redirect:'/studentmanger',
      children:[
        {
          path:'/studentmanger',
          component:StudentManger,
        },
        {
          path:'/teachermanger',
          component:Teachermanger,
        },
        {
          path:'/personAdd',
          name:'personAdd',
          component:PersonAdd,
        },
        {
          path:'/mangerMessage',
          component:MangerMessage
        }
      ]
    }
  ]
})
