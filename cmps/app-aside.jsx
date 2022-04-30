import { EmailCompose } from '../apps/mail/cmps/email-compose.jsx'
import { EmailFolderList } from '../apps/mail/cmps/email-folder-list.jsx'
import { KeepNavList } from '../apps/keep/cmps/keep-nav.jsx'
import { AppFooter } from './app-footer.jsx'

const { Route } = ReactRouterDOM

export class AppAside extends React.Component {

  state = {
    isHidden: true
  }

  toggleAside = () => {
    this.setState(({ isHidden }) => ({ isHidden: !isHidden }))
  }

  render() {
    const status = this.state.isHidden ? 'hidden' : 'visible'

    return <aside className={`app-aside ${status}`}>
      <div className="page-cover" onClick={this.toggleAside}></div>
      <button className="menu-btn" onClick={this.toggleAside}></button>
      <Route path="/email" component={EmailCompose} />
      <Route path="/email" component={EmailFolderList} />
      <Route path="/keep" component={KeepNavList} />
      <AppFooter />
    </aside>
  }
}

