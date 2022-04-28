import { emailService } from '../services/email.service.js'

const { Link } = ReactRouterDOM

export class EmailDetails extends React.Component {

  state = {
    email: null
  }

  componentDidMount() {
    this.loadEmail()
      .then(() => {
        const { email } = this.state
        emailService.changeReadStatus(email.id, true)
      })
  }

  loadEmail = () => {
    const { emailId } = this.props.match.params
    return emailService.getById(emailId)
      .then(email => {
        if (!email) return this.props.history.push('/')
        this.setState({ email })
      })
  }

  onDeleteEmail = () => {
    emailService.deleteEmail(this.props.match.params.emailId)
      .then(() => this.props.history.push('/email'))
  }

  render() {
    const { email } = this.state
    if (!email) return <h1>Loading...</h1>

    const date = new Date(email.sentAt).toDateString()

    return <section className="email-details">
      <section className="btn-container">
        <button className="back-btn" > <Link to="/email/inbox"></Link></button>
        <button className="delete-btn" onClick={this.onDeleteEmail}></button>
      </section>
      <header>
        <div>
          <h1 className="subject">{email.subject}</h1>
          <div className="author-info">
            <h2 className="author-name">{email.authorName}</h2>
            <h3 className="author-email">{email.authorEmail}</h3>
          </div>
          <h4 className="sent-at">{date}</h4>
        </div>
      </header>
      <p className="body">{email.body}</p>
    </section>
  }
}

