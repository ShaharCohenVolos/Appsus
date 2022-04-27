import { emailService } from '../services/email.service.js'

export class EmailDetails extends React.Component {

  state = {
    email: null
  }

  componentDidMount() {
    this.loadEmail()
  }

  loadEmail = () => {
    const { emailId } = this.props.match.params
    emailService.getById(emailId)
      .then(email => {
        if (!email) return this.props.history.push('/')
        this.setState({ email })
      })
  }

  render() {
    const { email } = this.state
    if (!email) return <h1>Loading...</h1>

    return <section className="email-details">
      <h1>{email.subject}</h1>
      <h2>{email.authorName}</h2>
    </section>
  }
}

