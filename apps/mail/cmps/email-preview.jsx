import { emailUtilService } from '../services/email.util.service.js'
import { emailService } from '../services/email.service.js'
import { EmailStar } from './email-star.jsx'
const { withRouter } = ReactRouterDOM

class _EmailPreview extends React.Component {

  openMail = () => {
    const { email, match } = this.props
    this.props.history.push(`/email/${match.params.folder}/${email.id}`)
  }

  render() {
    const { email } = this.props
    const readStatus = email.isRead ? 'read' : 'unread'
    const authorName = (email.authorName === emailService.getUserName()) ? `To: ${email.to}` : email.authorName

    return <section onClick={this.openMail}  >
      <article className={`email-preview ${readStatus}`} >
        <EmailStar email={email} onStarEmail={this.props.onStarEmail} />
        <h1 className="author-name">{authorName}</h1>
        <h1 className="subject">{email.subject}</h1>
        <h3 className="body">{email.body}</h3>
        <h4 className="sent-at">{emailUtilService.getTimeToShow(email.sentAt)}</h4>
        <div className="btn-container">
          <button className="read-btn" onClick={(ev) => this.props.onReadEmail(ev, email.id)}></button>
          <button className="delete-btn" onClick={(ev) => this.props.onDeleteEmail(ev, email.id)}></button>
        </div>
      </ article>
    </ section >
  }
}

export const EmailPreview = withRouter(_EmailPreview)