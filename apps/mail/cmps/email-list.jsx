import { EmailPreview } from './email-preview.jsx'

export function EmailList({ emails, onStarEmail }) {
  return <section className="email-list">
    {emails.map(email => <EmailPreview key={email.id} email={email} onStarEmail={onStarEmail} />)}
  </section>
}