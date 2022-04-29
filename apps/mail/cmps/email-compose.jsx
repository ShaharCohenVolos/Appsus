import { eventBusService } from '../../../services/event-bus-service.js'

export class EmailCompose extends React.Component {

  state = {
    email: null
  }

  componentDidMount() {
    if (!this.props.location.search) return
    const urlSrcPrm = new URLSearchParams(this.props.location.search)
    this.setState({ email: { to: '', subject: urlSrcPrm.get('subject'), body: urlSrcPrm.get('body') } })
  }

  handleChange = ({ target }) => {
    this.setState(({ email }) => ({
      email: { ...email, [target.name]: target.value }
    }))
  }

  onStartComposing = () => {
    this.setState({ email: { to: '', subject: '', body: '' } })
  }

  onStopComposing = () => {
    this.setState({ email: null })

  }

  onSendMail = (ev) => {
    ev.preventDefault()
    console.log(this.state.email)
    eventBusService.emit('send-email', this.state.email)
    this.setState({ email: null })
  }

  render() {
    const { email } = this.state

    return <section className="email-compose">
      <button className="compose-btn" onClick={this.onStartComposing}><h1 className="plus"></h1><h1>Compose</h1></button>
      {email && <form onSubmit={this.onSendMail} >
        <header className="form-header">
          <h1>New Email</h1>
          <button className="close-btn" type="button" onClick={this.onStopComposing}></button>
        </header>
        <main className="form-body">
          <input className="to" type="email" name="to" placeholder="Recipients" onChange={this.handleChange} autoFocus={true} />
          <input className="subject" type="text" name="subject" placeholder="Subject" onChange={this.handleChange} value={email.subject} />
          <textarea className="body" name="body" onChange={this.handleChange} value={email.body} />
        </main>
        <button className="send-btn">Send</button>
      </form>}
    </section>
  }
}