const { NavLink } = ReactRouterDOM

export class AppHeader extends React.Component {


  render() {
    return <header className="app-header">
      <nav>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/email">Email</NavLink>
        <NavLink to="/keep">Keep</NavLink>
      </nav>
    </header>
  }
}
