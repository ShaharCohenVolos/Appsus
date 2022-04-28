import { emailUtilService } from '../services/email.util.service.js'
const { Link, withRouter } = ReactRouterDOM

function _EmailPreview({ email, match }) {

  const readStatus = email.isRead ? 'read' : 'unread'

  return <Link to={`/email/${match.params.folder}/${email.id}`} style={{ textDecoration: 'none' }} >
    <article className={`email-preview ${readStatus}`} >
      <h1 className="author-name">{email.authorName}</h1>
      <h1 className="subject">{email.subject}</h1>
      <h3 className="body">{email.body}</h3>
      <h4 className="sent-at">{emailUtilService.getTimeToShow(email.sentAt)}</h4>
    </ article>
  </ Link >
}

export const EmailPreview = withRouter(_EmailPreview)