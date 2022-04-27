import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/app-about.jsx'
import { Home } from './pages/app-home.jsx'
import { AppKeep } from './apps/keep/pages/app-keep.jsx'
import { EmailRoot } from './apps/mail/email-root.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return <Router>
    <AppHeader />
    <Switch>
      <Route path="/email" component={EmailRoot} />
      <Route path="/keep" component={AppKeep} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
}