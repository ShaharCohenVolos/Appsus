import { EmailFolderList } from '../apps/mail/cmps/email-folder-list.jsx'

const { NavLink } = ReactRouterDOM

export function AppAside() {
  return <aside className="app-aside">
    <EmailFolderList />
  </aside>
}