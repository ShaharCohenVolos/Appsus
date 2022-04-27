import { emailService } from '../services/email.service.js'

import { EmailHeader } from '../cmps/email-header.jsx'
import { EmailList } from '../cmps/email-list.jsx'

export class EmailApp extends React.Component {

  state = {
    emails: null
  }

  componentDidMount() {
    emailService.query()
      .then(emails => this.setState({ emails }))
  }

  render() {
    const { emails } = this.state

    if (!emails) return <React.Fragment />
    return <section className="email-app">
      <EmailHeader />
      <EmailList emails={emails} />
    </section>

  }
}