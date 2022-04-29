import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const emailService = {
  query,
  getById,
  changeReadStatus,
  addEmail,
  deleteEmail,
  getUserName,
  getUnreadCount,
}

const KEY = 'emailDB'
const loggedInUser = {
  email: 'user@appsus.com',
  fullName: 'Mahatma Appsus'
}

function query(folder, filter, sortBy) {
  let emails = _loadFromStorage()

  if (!emails) {
    emails = _makeEmails()
    _saveToStorage(emails)
  }

  emails = _getEmailsFromFolder(emails, folder)

  if (filter) emails = _getFilteredEmails(emails, filter)

  emails = _sortEmails(emails, sortBy)

  return Promise.resolve(emails)
}


function getUserName() {
  return loggedInUser.fullName
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
  return Promise.resolve()
}

function getUnreadCount() {
  const emails = _loadFromStorage()
  const unreads = emails.filter(email => !email.isRead)
  return Promise.resolve(unreads.length)
}

function addEmail({ subject, body, to }) {
  let emails = _loadFromStorage()
  const email = _makeEmail(subject, body, to, loggedInUser.fullName, loggedInUser.email)
  email.isRead = true
  emails = [email, ...emails]
  _saveToStorage(emails)
  return Promise.resolve()
}

function deleteEmail(emailId) {
  let emails = _loadFromStorage()
  const email = emails.find(email => email.id === emailId)
  email.isDeleted = true
  _saveToStorage(emails)
  return Promise.resolve()
}

function _makeEmail(subject, body, to, authorName, authorEmail, sentAt = Date.now()) {
  return {
    id: utilService.makeId(),
    subject,
    body,
    isRead: false,
    isDeleted: false,
    sentAt,
    to,
    authorName,
    authorEmail,
  }
}

function _makeEmails() {
  return [
    _makeEmail('Miss you!', 'Would love to catch up sometimes', 'momo@momo.com', loggedInUser.fullName, loggedInUser.email),
    _makeEmail('Miss you!', 'Would love to catch up sometimes', 'momo@momo.com', loggedInUser.fullName, loggedInUser.email),
    _makeEmail('Miss you!', 'Would love to catch up sometimes', 'momo@momo.com', loggedInUser.fullName, loggedInUser.email),
    _makeEmail('Miss you!', 'Would love to catch up sometimes', 'momo@momo.com', loggedInUser.fullName, loggedInUser.email),
    _makeEmail('Miss you!', 'Would love to catch up sometimes', 'momo@momo.com', loggedInUser.fullName, loggedInUser.email),
    _makeEmail('Miss you!', 'Would love to catch up sometimes', 'momo@momo.com', loggedInUser.fullName, loggedInUser.email),
    _makeEmail('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', loggedInUser.email, 'Mr. Ipsum', 'lorem@ipsum.com'),
    _makeEmail('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', loggedInUser.email, 'Mr. Ipsum', 'lorem@ipsum.com'),
    _makeEmail('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', loggedInUser.email, 'Mr. Ipsum', 'lorem@ipsum.com'),
    _makeEmail('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', loggedInUser.email, 'Mr. Ipsum', 'lorem@ipsum.com'),
    _makeEmail('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', loggedInUser.email, 'Mr. Ipsum', 'lorem@ipsum.com'),
    _makeEmail('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', loggedInUser.email, 'Mr. Ipsum', 'lorem@ipsum.com'),
    _makeEmail('Car Extended Warranty 1', 'We\'ve been trying to reach you concerning your vehicle\'s extended warranty...', loggedInUser.email, 'Warranty Master', 'warrantym@appsus.com', 1641146016652),
    _makeEmail('Car Extended Warranty 2', 'We\'ve been trying to reach you concerning your vehicle\'s extended warranty...', loggedInUser.email, 'Warranty Master', 'warrantym@appsus.com', 1631146016652),
    _makeEmail('Car Extended Warranty 3', 'We\'ve been trying to reach you concerning your vehicle\'s extended warranty...', loggedInUser.email, 'Warranty Master', 'warrantym@appsus.com', 1621146016652),
    _makeEmail('Hello World!', 'Hello World!', loggedInUser.email, 'John Smith', 'jsmith@gmail.com', 0),
  ]
}

function _sortEmails(emails, sortBy) {
  let key
  if (sortBy.date !== undefined) key = 'date'
  else key = 'title'

  switch (key) {
    case 'date':
      emails = _sortByDate(emails, sortBy[key])
      break
    case 'title':
      emails = _sortByTitle(emails, sortBy[key])
      break
  }
  return emails
}

function _sortByDate(emails, isAsc) {
  return emails.sort((a, b) => { return isAsc ? b.sentAt - a.sentAt : a.sentAt - b.sentAt })
}

function _sortByTitle(emails, isAsc) {
  return emails.sort((a, b) => {
    return isAsc ?
      (b.subject > a.subject) ? 1 : -1
      :
      (a.subject > b.subject) ? 1 : -1
  })
}

function _getEmailsFromFolder(emails, folder) {
  switch (folder) {
    case 'inbox':
      emails = emails.filter(email => email.to === loggedInUser.email && !email.isDeleted)
      break
    case 'sent':
      emails = emails.filter(email => email.authorEmail === loggedInUser.email && !email.isDeleted)
      break
    case 'trash':
      emails = emails.filter(email => email.isDeleted)
      break
  }
  return emails
}

function _getFilteredEmails(emails, filter) {
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
  return emails
}


function _saveToStorage(emails) {
  storageService.saveToStorage(KEY, emails)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}