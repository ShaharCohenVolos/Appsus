import { emailUtilService } from '../services/email.util.service.js'

export function EmailPreview({ email }) {

  const className = email.isRead ? "read" : "unread"

  return <div className={`email-preview ${className}`} >
    <h1 className="author-name">{email.authorName}</h1>
    <h1 className="subject">{email.subject}</h1>
    <h3 className="body">{email.body}</h3>
    <h4 className="sent-at">{emailUtilService.getTimeToShow(email.sentAt)}</h4>
  </ div>
}