import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/app-about.jsx'
import { Home } from './pages/app-home.jsx'
import { KeepRoot } from './apps/keep/keep-root.jsx'
import { EmailRoot } from './apps/mail/email-root.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return <Router>
    <AppHeader />
    <Switch>
      <Route path="/email" component={EmailRoot} />
      <Route path="/keep" component={KeepRoot} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
}