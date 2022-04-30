import { eventBusService } from '../../../services/event-bus-service.js'

const { NavLink } = ReactRouterDOM

export class EmailFolderList extends React.Component {

  state = {
    unread: 0
  }

  removeUnreadEvent

  componentDidMount() {
    this.removeUnreadEvent = eventBusService.on('unread-count', unread => {
      unread.then((unread) => this.setState({ unread }))
    })
  }

  componentWillUnmount() {
    this.removeUnreadEvent()
  }

  render() {
    const { unread } = this.state

    return <nav className="email-folder-list">
      <NavLink to="/email/inbox" className="inbox">Inbox <h1 className="unread-count">{unread}</h1></NavLink>
      <NavLink to="/email/starred" className="starred">Starred</NavLink>
      <NavLink to="/email/sent" className="sent">Sent</NavLink>
      <NavLink to="/email/trash" className="trash">Trash</NavLink>
      {/* <NavLink to="/email/draft" className="draft">Draft</NavLink> */}
      <NavLink to="/email/all" className="all-mail">All Mail</NavLink>
    </nav>
  }
}