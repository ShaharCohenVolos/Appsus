import { emailService } from '../services/email.service.js'
import { eventBusService } from '../../../services/event-bus-service.js'

import { EmailList } from '../cmps/email-list.jsx'

const { Route, Switch } = ReactRouterDOM

export class EmailApp extends React.Component {

  state = {
    emails: null,
    filter: null,
    folder: this.props.match.params.folder
  }

  removeFilterEvent
  removeComposeEvent

  componentDidMount() {
    this.loadEmails()
    this.removeFilterEvent = eventBusService.on('email-filter', (filter) => {
      this.setState({ filter },
        this.loadEmails)

    })

    this.removeComposeEvent = eventBusService.on('send-email', (email) => {
      emailService.addEmail(email)
      this.loadEmails()
    })
  }

  componentDidUpdate({ match }) {
    if (match.params.folder !== this.props.match.params.folder) {
      this.setState({ folder: this.props.match.params.folder }, this.loadEmails)
    }
  }

  componentWillUnmount() {
    this.removeFilterEvent()
    this.removeComposeEvent()
  }

  loadEmails = () => {
    emailService.query(this.state.folder, this.state.filter)
      .then(emails => this.setState({ emails }))
  }

  render() {
    const { emails } = this.state

    if (!emails) return <h1>Loading...</h1>
    return <section className="email-app main-layout">
      <EmailList emails={emails} />
    </section>

  }
}
