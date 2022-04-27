import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/app-about.jsx'
import { Home } from './pages/app-home.jsx'
import {AppKeep} from './pages/app-keep.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return <Router>
    <AppHeader />
    <Switch>
      {/* <Route path="/mail" component={AppMail} /> */}
      <Route path="/keep" component={AppKeep} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
}