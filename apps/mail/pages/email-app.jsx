import { emailService } from '../services/email.service.js'

import { EmailList } from '../cmps/email-list.jsx'

export class EmailApp extends React.Component {

  state = {
    emails: null,
    filter: null
  }

  loadEmails = () => {
    emailService.query(this.state.filter)
      .then(emails => this.setState({ emails }))
  }

  // onSetFilter = (filter) => {
  //   this.setState({ filter }, this.loadEmails)
  //   const urlSrcPrm = new URLSearchParams(filter)
  //   const searchStr = urlSrcPrm.toString()
  //   this.props.history.push(`/email?${searchStr}`)
  // }

  componentDidMount() {
    this.loadEmails()
  }

  render() {
    const { emails } = this.state

    if (!emails) return <h1>Loading...</h1>
    return <section className="email-app">
      <EmailList emails={emails} />
    </section>

  }
}