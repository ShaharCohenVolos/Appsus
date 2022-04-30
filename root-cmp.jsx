import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/app-about.jsx'
import { Home } from './pages/app-home.jsx'
import { EmailApp } from './apps/mail/pages/email-app.jsx'
import { EmailDetails } from './apps/mail/pages/email-details.jsx'
import { AppKeep } from './apps/keep/pages/app-keep.jsx'
import { KeepDetails } from './apps/keep/pages/keep-details.jsx'
import { KeepEdit } from './apps/keep/cmps/keep-edit.jsx'
import { AppAside } from './cmps/app-aside.jsx'
import { BookApp } from './apps/book/pages/book-app.jsx'
import { BookDetails } from './apps/book/pages/book-details.jsx'
import { AppFooter } from './cmps/app-footer.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return <Router>
    <AppHeader />
    <AppAside />
    <Switch >
      <Route path="/email/:folder/:emailId" component={EmailDetails} />
      <Route path="/email/:folder/" component={EmailApp} />
      {/* <Route path="/keep/edit/:keepId" component={KeepEdit} /> */}
      {/* <Route path="/keep/:filter/:keepId" component={KeepDetails} /> */}
      <Route path="/keep/:filter" component={AppKeep} />
      <Route path="/keep" component={AppKeep} />
      <Route path="/book/:bookId" component={BookDetails} />
      <Route path="/book" component={BookApp} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </Router >
}