import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/app-about.jsx'
import { Home } from './pages/app-home.jsx'
import { EmailApp } from './apps/mail/pages/email-app.jsx'
import { EmailDetails } from './apps/mail/pages/email-details.jsx'
import { AppKeep } from './apps/keep/pages/app-keep.jsx'
import { KeepDetails } from './apps/keep/pages/keep-details.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return <Router>
    <AppHeader />
    <Switch>
      <Route path="/email/:folder/:emailId" component={EmailDetails} />
      <Route path="/email/:folder" component={EmailApp} />
      <Route path="/keep/:keepId" component={KeepDetails} />
      <Route path="/keep" component={AppKeep} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
}