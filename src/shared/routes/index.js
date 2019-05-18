import HomePage from '../Pages/HomePage'
import App from '../App'
import UsersListPage from '../Pages/UsersListPage'
import NotFoundPage from '../Pages/NotFoundPage'

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
        ...NotFoundPage
      }
    ]
  }
  
];

export default routes