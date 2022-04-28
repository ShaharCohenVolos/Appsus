const { NavLink } = ReactRouterDOM

export function EmailFolderList() {
  return <nav className="email-folder-list">
    <NavLink to="/email/inbox">Inbox</NavLink>
    <NavLink to="/email/sent">Sent</NavLink>
    <NavLink to="/email/trash">Trash</NavLink>
    <NavLink to="/email/draft">Draft</NavLink>
    <NavLink to="/email/all">All Mail</NavLink>
  </nav>
}