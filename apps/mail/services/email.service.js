import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const emailService = {
  query,
  getById,
  changeReadStatus,
  deleteEmail,
}

const KEY = 'emailDB'
const loggedInUser = {
  email: 'user@appsus.com',
  fullName: 'Mahatma Appsus'
}

function query(filter) {
  let emails = _loadFromStorage()
  if (!emails) {
    emails = _makeEmails()
    _saveToStorage(emails)
  }
  if (filter) {
    const { search, option } = filter
    if (search) {
      emails = emails.filter(email => {
        return email.subject.toLowerCase().includes(search.toLowerCase()) ||
          email.authorName.toLowerCase().includes(search.toLowerCase())
      })
    }
    if (option) {
      switch (option) {
        case 'read':
          emails = emails.filter(email => email.isRead)
          break
        case 'unread':
          emails = emails.filter(email => !email.isRead)
      }
    }
  }
  return Promise.resolve(emails)
}

function getById(emailId) {
  const emails = _loadFromStorage()
  const email = emails.find(email => email.id === emailId)
  return Promise.resolve(email)
}

function changeReadStatus(emailId, isRead) {
  const emails = _loadFromStorage()
  const email = emails.find(email => email.id === emailId)
  email.isRead = isRead
  _saveToStorage(emails)
}

function deleteEmail(emailId) {
  let emails = _loadFromStorage()
  emails = emails.filter(email => email.id !== emailId)
  _saveToStorage(emails)
  return Promise.resolve()
}

function _makeEmail(subject, body, to, authorName, authorEmail, sentAt = Date.now()) {
  return {
    id: utilService.makeId(),
    subject,
    body,
    isRead: false,
    sentAt,
    to,
    authorName,
    authorEmail,
  }
}

function _makeEmails() {
  return [
    _makeEmail('Miss you!', 'Would love to catch up sometimes', 'momo@momo.com', loggedInUser.fullName, loggedInUser.email),
    _makeEmail('Hello World!', 'Say hello to the world', loggedInUser.fullName.email, 'John Smith', 'jsmith@gmail.com', 0),
    _makeEmail('Car Extended Warranty 1', 'We\'ve been trying to reach you concerning your vehicle\'s extended warranty...', loggedInUser.email, 'Warranty Master', 'warrantym@appsus.com', 1645701228),
    _makeEmail('Car Extended Warranty 2', 'We\'ve been trying to reach you concerning your vehicle\'s extended warranty...', loggedInUser.email, 'Warranty Master', 'warrantym@appsus.com', 1635701228),
    _makeEmail('Car Extended Warranty 3', 'We\'ve been trying to reach you concerning your vehicle\'s extended warranty...', loggedInUser.email, 'Warranty Master', 'warrantym@appsus.com', 1625701228),
    _makeEmail('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', loggedInUser.email, 'Mr. Ipsum', 'lorem@ipsum.com'),
  ]
}

function _saveToStorage(emails) {
  storageService.saveToStorage(KEY, emails)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}