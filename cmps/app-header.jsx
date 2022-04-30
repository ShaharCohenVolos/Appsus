import { EmailFilter } from '../apps/mail/cmps/email-filter.jsx'

const { NavLink, Route, Link } = ReactRouterDOM

export class AppHeader extends React.Component {
  render() {
    return <header className="app-header">
      <Link className="logo" to="/">
        <img src="../assets/img/logo.svg" alt="logo" className="icon" />
        <h1 className="name">Appsus</h1>
      </Link>
      <Route path="/email" component={EmailFilter} />
      <div className="drop-down">
        <nav className="drop-down-content">
          <NavLink to="/" exact> Home </NavLink>
          <NavLink to="/about"> About </NavLink>
          <NavLink to="/email/inbox"> Email </NavLink>
          <NavLink to="/keep/all"> Keep </NavLink>
          <NavLink to="/book"> Book </NavLink>
        </nav>
      </div>
    </header>
  }
}
