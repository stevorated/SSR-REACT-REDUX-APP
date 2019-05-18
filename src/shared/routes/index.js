import HomePage from '../Pages/HomePage'
import App from '../App'
import UsersListPage from '../Pages/UsersListPage'
import NotFoundPage from '../Pages/NotFoundPage'
import AdminsListPage from '../Pages/AdminsListPage'

const routes = [
  {
    ...App,
    routes: [
      {
        path: '/',
        exact: true,
        ...HomePage
      },
      {
        path: '/users',
        ...UsersListPage
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...NotFoundPage
      }
    ]
  }
  
];

export default routes