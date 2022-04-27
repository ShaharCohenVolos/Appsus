import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/app-about.jsx'
import { Home } from './pages/app-home.jsx'
// import { AppKeep } from './apps/keep/pages/app-keep.jsx'
import { KeepRoot } from './apps/keep/keep-root.jsx'
// import { EmailApp } from './apps/mail/pages/email-app.jsx'
// import { EmailDetails } from './apps/mail/pages/email-details.jsx'
// import { Email } from './apps/mail/email-root.jsx'
import { EmailRoot } from './apps/mail/email-root.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return <Router>
    <AppHeader />
    <Switch>
      {/* <Email /> */}
      {/* <Route path="/email" component={EmailDetails} /> */}
      {/* <Route path="/email/:emailId" component={EmailDetails} />*/}
      <Route path="/email" component={EmailRoot} />
      <Route path="/keep" component={KeepRoot} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
}