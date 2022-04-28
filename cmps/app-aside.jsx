import { EmailCompose } from '../apps/mail/cmps/email-compose.jsx'
import { EmailFolderList } from '../apps/mail/cmps/email-folder-list.jsx'
import {KeepNavList} from '../apps/keep/cmps/keep-nav.jsx'

const { Route } = ReactRouterDOM

export function AppAside() {
  return <aside className="app-aside">
<<<<<<< HEAD
    {/* <EmailFolderList /> */}
    <KeepNavList/>
=======
    <Route path="/email" component={EmailCompose} />
    <Route path="/email" component={EmailFolderList} />
>>>>>>> 4d7bea9942b7090a415ef0937a3e451b8bb2f6fe
  </aside>
}

