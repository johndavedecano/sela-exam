import buildRoutes from './../common/routes-handler'

import { Loadable } from './../components'

import NotFound from './errors/not-found'

const routes = [
  {
    exact: true,
    auth: false,
    path: '/',
    component: Loadable({
      loader: () => import('./home')
    })
  },
  {
    path: '/404',
    component: NotFound
  }
]

export default () => buildRoutes(routes)
