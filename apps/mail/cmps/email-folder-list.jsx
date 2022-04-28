const { NavLink } = ReactRouterDOM

export function EmailFolderList() {
  return <aside className="email-folder-list">
    <button className="compose-btn"><h1 className="plus"></h1><h1>Compose</h1></button>
    <nav className="folder-nav">
      <NavLink to="/email/inbox">Inbox</NavLink>
      <NavLink to="/email/sent">Sent</NavLink>
      <NavLink to="/email/trash">Trash</NavLink>
      <NavLink to="/email/draft">Draft</NavLink>
    </nav>
  </aside>
}