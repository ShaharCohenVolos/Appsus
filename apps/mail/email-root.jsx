import { EmailHeader } from './cmps/email-header.jsx'
import { EmailApp } from './pages/email-app.jsx'
import { EmailDetails } from './pages/email-details.jsx'

const { Route, Switch } = ReactRouterDOM

export function EmailRoot() {
  return <React.Fragment>
    <EmailHeader />
    <Switch>
      <Route path="/email/:emailId" component={EmailDetails} />
      <Route path="/email" component={EmailApp} />
    </Switch>
  </React.Fragment>
}