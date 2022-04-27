import { emailService } from '../services/email.service.js'

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

  render() {
    const { email } = this.state
    if (!email) return <h1>Loading...</h1>

    const date = new Date(email.sentAt).toDateString()


    return <section className="email-details">

      <header>
        <div>
          <h1 className="subject">{email.subject}</h1>
          <div className="author-info">
            <h2 className="author-name">{email.authorName}</h2>
            <h3 className="author-email">{email.authorEmail}</h3>
          </div>
          <h4 className="sent-at">{date}</h4>
        </div>
        <button className="delete-btn"></button>
      </header>
      <p className="body">{email.body}</p>
    </section>
  }
}

