import HomePage from '../Pages/HomePage'
import App from '../App'
import UsersListPage from '../Pages/UsersListPage'

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
    ]
  }
  
];

export default routes