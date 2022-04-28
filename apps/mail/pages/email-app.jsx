import { emailService } from '../services/email.service.js'
import { eventBusService } from '../../../services/event-bus-service.js'

import { EmailList } from '../cmps/email-list.jsx'
import { EmailFolderList } from '../cmps/email-folder-list.jsx'

const { Route, Switch } = ReactRouterDOM

export class EmailApp extends React.Component {

  state = {
    emails: null,
    filter: null
  }

  removeEvent

  componentDidMount() {
    this.loadEmails()
    this.removeEvent = eventBusService.on('email-filter', (filter) => {
      this.setState({ filter },
        this.loadEmails)
    })
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  loadEmails = () => {
    emailService.query(this.state.filter)
      .then(emails => this.setState({ emails }))
  }

  render() {
    const { emails } = this.state

    if (!emails) return <h1>Loading...</h1>
    return <section className="email-app">
      <EmailFolderList />
      <EmailList emails={emails} />
    </section>

  }
}
