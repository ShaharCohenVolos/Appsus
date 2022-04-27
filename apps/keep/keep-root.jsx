import { KeepHeader } from './cmps/keep-header.jsx'
import { AppKeep } from './pages/app-keep.jsx'
// import { KeepDetails } from './pages/keep-details.jsx'

const { Route, Switch } = ReactRouterDOM

export function KeepRoot() {
  return <React.Fragment>
    <KeepHeader />
    <Switch>
      {/* <Route path="/keep/:keepId" component={EmailDetails} /> */}
      <Route path="/keep" component={AppKeep} />
    </Switch>
  </React.Fragment>
}