import { EmailFolderList } from '../apps/mail/cmps/email-folder-list.jsx'

const { Route } = ReactRouterDOM

export function AppAside() {
  return <aside className="app-aside">
    <Route path="/email" component={EmailFolderList} />
  </aside>
}

