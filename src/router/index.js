import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import ranklist from '@/components/ranklist.vue'
import concern from '@/components/concern.vue'
import freebook from '@/components/Recom/freebook.vue'
import books from '@/components/CollectBooks/books.vue'
import my from '@/components/My/my.vue'
import Login from '@/components/Login/Login.vue'
import Register from '@/components/Login/Register.vue'
import alist from '@/components/Waterfall/alist.vue'
import bookcontent from '@/components/BookDetails/bookcontent.vue'
import readbook from '@/components/BookDetails/readbook.vue'
import download from '@/components/BookDetails/download.vue'
import operatebook from '@/components/CollectBooks/operatebook.vue'
import actsettings from '@/components/My/accountSettings.vue'
import myhome from '@/components/My/myhome.vue'
import signIn from '@/components/My/signIn.vue'
import recharge from '@/components/My/recharge.vue'
import information from '@/components/My/information.vue'
import mybooklist from '@/components/My/mybooklist.vue'
import myconcern from '@/components/My/myConcern.vue'
import mypurchase from '@/components/My/myPurchase.vue'
import myachievement from '@/components/My/myAchievement.vue'
import mygrade from '@/components/My/myGrade.vue'
import mydressup from '@/components/My/myDressup.vue'
import beauthor from '@/components/My/beAuthor.vue'
import myworks from '@/components/CreateCenter/myworks.vue'
import createnewbook from '@/components/CreateCenter/createnewbook.vue'
import mydrafts from '@/components/CreateCenter/mydrafts.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/freebook',
      component: freebook,
      meta:{show:true}
    },
    {
      path: '/ranklist',
      component: ranklist,
      meta:{show:true}
    },
    {
      path: '/concern',
      component: concern,
      meta:{show:true}
    },
    {
      path: '/freebook',
      component: freebook,
      meta:{show:true}
    },
    {
      path: '/books',
      component: books,
      meta:{show:true}
    },
    {
      path: '/my',
      component: my,
      meta:{show:true}
    },
    {
      path: '/actsettings',
      component: actsettings
    },{
      path:'/myhome',
      component:myhome
    },{
      path:'/signin',
      component:signIn
    },{
      path:'/recharge',
      component:recharge
    },{
      path:'/information',
      component:information
    },{
      path:'/mybooklist',
      component:mybooklist
    },{
      path:'/myconcern',
      component:myconcern
    },{
      path:'/mypurchase',
      component:mypurchase
    },{
      path:'/myachievement',
      component:myachievement
    },{
      path:'/mygrade',
      component:mygrade
    },{
      path:'/mydressup',
      component:mydressup
    },{
      path:'/beauthor',
      component:beauthor
    },
    {
      path: '/login/login',
      component: Login,
      meta:{show:false}
    },
    {
      path: '/login/register',
      component: Register,
      meta:{show:false}
    },
    {
      path: '/alist',
      component: alist,
      meta:{show:false}
    },
    {
      path: '/bookcontent/:BookCP',
      // name:'bookcontent',
      component: bookcontent,
      meta:{show:false}
    },
    {
      path: '/readbook/:BookCP',
      component: readbook
    },
    {
      path: '/operatebook',
      component: operatebook
    },
    {
      path: '/download/:BookCP',
      component: download
    },
    {
      path: '/myworks',
      component: myworks
    },
    {
      path: '/createnewbook',
      component: createnewbook,
      meta:{tool:true}
    },
    {
      path: '/mydrafts',
      component: mydrafts
    }
  ]
})
