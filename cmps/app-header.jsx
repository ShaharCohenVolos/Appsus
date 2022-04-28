import { EmailFilter } from '../apps/mail/cmps/email-filter.jsx'

const { NavLink, Route } = ReactRouterDOM

export class AppHeader extends React.Component {


  render() {
    return <header className="app-header">
      <h1>Appsus</h1>
      <Route path="/email" component={EmailFilter} />
      <nav>
        <NavLink to="/" exact> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
        <NavLink to="/email/inbox"> Email </NavLink>
        <NavLink to="/keep/all"> Keep </NavLink>
      </nav>
    </header>
  }
}
