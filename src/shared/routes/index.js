import HomePage from '../Pages/HomePage'
import UsersListPage from '../Pages/UsersListPage'

const routes = [
  {
    path: '/',
    exact: true,
    ...HomePage
  },
  {
    path: '/users',
    ...UsersListPage
  },
];

export default routes