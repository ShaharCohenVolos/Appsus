import { EmailFolderList } from '../apps/mail/cmps/email-folder-list.jsx'
import {KeepNavList} from '../apps/keep/cmps/keep-nav.jsx'

const { NavLink } = ReactRouterDOM

export function AppAside() {
  return <aside className="app-aside">
    {/* <EmailFolderList /> */}
    <KeepNavList/>
  </aside>
}