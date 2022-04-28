import { EmailFilter } from '../apps/mail/cmps/email-filter.jsx'

const { NavLink, Route } = ReactRouterDOM

export class AppHeader extends React.Component {


  render() {
    return <header className="app-header">
      <h1 className="logo">Appsus</h1>
      <Route path="/email" component={EmailFilter} />
      <div className="drop-down">
        <nav className="drop-down-content">
          <NavLink to="/" exact> Home </NavLink>
          <NavLink to="/about"> About </NavLink>
          <NavLink to="/email/inbox"> Email </NavLink>
          <NavLink to="/keep"> Keep </NavLink>
        </nav>
      </div>
    </header>
  }
}
