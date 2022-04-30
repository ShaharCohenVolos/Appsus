import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const emailService = {
  query,
  getById,
  changeReadStatus,
  addEmail,
  deleteEmail,
  toggleStar,
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
  const unreads = emails.filter(email => {
    return !email.isRead &&
      !email.removedAt &&
      email.authorEmail !== loggedInUser.email
  })
  return Promise.resolve(unreads.length)
}

function addEmail({ subject, body, to }) {
  let emails = _loadFromStorage()
  const email = _makeEmail(subject, body, true, false, false, Date.now(), to, loggedInUser.fullName, loggedInUser.email)
  email.isRead = true
  emails = [email, ...emails]
  _saveToStorage(emails)
  return Promise.resolve()
}

function deleteEmail(emailId) {
  let emails = _loadFromStorage()
  const email = emails.find(email => email.id === emailId)
  if (email.removedAt) emails = emails.filter(email => email.id !== emailId)
  else email.removedAt = Date.now()
  _saveToStorage(emails)
  return Promise.resolve()
}

function toggleStar(emailId) {
  const emails = _loadFromStorage()
  const email = emails.find(email => email.id === emailId)
  email.isStarred = !email.isStarred
  _saveToStorage(emails)
  return Promise.resolve()
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
      a.subject.localeCompare(b.subject) :
      b.subject.localeCompare(a.subject)
  })
}

function _getEmailsFromFolder(emails, folder) {
  switch (folder) {
    case 'inbox':
      emails = emails.filter(email => email.to === loggedInUser.email && !email.removedAt)
      break
    case 'starred':
      emails = emails.filter(email => email.isStarred)
      break
    case 'sent':
      emails = emails.filter(email => email.authorEmail === loggedInUser.email && !email.removedAt)
      break
    case 'trash':
      emails = emails.filter(email => email.removedAt)
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

function _makeEmail(subject, body, isRead, removedAt, isStarred, sentAt, to, authorName, authorEmail) {
  return {
    id: utilService.makeId(),
    subject,
    body,
    isRead,
    removedAt,
    isStarred,
    sentAt,
    to,
    authorName,
    authorEmail,
  }
}

function _makeEmails() {
  return [
    _makeEmail(
      'Miss you!',
      'Would love to catch up sometimes',
      true,
      null,
      true,
      Date.now(),
      'momo@momo.com',
      loggedInUser.fullName,
      loggedInUser.email
    ),
    _makeEmail(
      'How are you?',
      'How are you doing',
      true,
      null,
      false,
      1641146016652, 'bob@gmail.com',
      loggedInUser.fullName,
      loggedInUser.email
    ),
    _makeEmail(
      'Check out new APIs on RapidAPI',
      "We're constantly adding new APIs to the RapidAPI Hub. Search the Hub and see what you're missing out on!",
      false,
      null,
      false,
      1644346016652,
      loggedInUser.email,
      'Team RapidAPI',
      'support@rapidapi.com'
    ),
    _makeEmail(
      'There’s a podcast for everyone. Find yours.',
      "Want to know what's good when it comes to podcasts?",
      false,
      null,
      false,
      1611146016652,
      loggedInUser.email,
      'Spotify ',
      'no-reply@spotify.com'
    ),
    _makeEmail(
      'Car Extended Warranty',
      'We\'ve been trying to reach you concerning your vehicle\'s extended warranty',
      false,
      Date.now(),
      false,
      1574346016652,
      loggedInUser.email,
      'Warranty Master',
      'warrantym@appsus.com'
    ),
    _makeEmail(
      'Lorem Ipsum',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      true,
      Date.now(),
      false,
      0,
      loggedInUser.email,
      'Mr. Lorem',
      'lorem@ipsum.com'
    ),
    _makeEmail(
      'Your Dropbox is lonely. Add some files!',
      "Add files to your Dropbox Once your files are in Dropbox, they’ll be waiting for you anywhere you install the app—like your computer, phone, or tablet. Your files will also be securely backed up and easy to share, no matter what type of files they are.",
      true,
      null,
      true,
      1574346016652,
      loggedInUser.email,
      'Dropbox',
      'no-reply@dropbox.com'
    ),
    _makeEmail(
      'Important policy updates coming to Discord',
      "Hey there, Some important changes are coming to Discord: we’re updating our Terms of Service, Privacy Policy, and Community Guidelines. These changes will take effect on March 28, 2022. We’re letting you know ahead of time so you can learn what’s changing. Here are the main things to know:  How we use your information We’ve updated our Privacy Policy to provide better clarity on what information we collect and how we use and share it.How we describe our services As Discord has evolved, it has become clear that not all communities on Discord are the same. We want users to understand the difference between posting in public and private spaces on Discord and to choose the appropriate space, features, and settings for them and their messages. New and clearer rules for prohibited content Our Community Guidelines now officially prohibit misinformation and disinformation, malicious impersonation, and better define spam and platform manipulation. We encourage you to read the updated documents in full. We’ve also summarized some of the most important changes in a post on the Discord Blog.These policies will be in effect on March 28, 2022. Using Discord on or after that date means you agree to these changes. Thanks for helping us build a place where everyone can belong.Discord",
      true,
      null,
      true,
      Date.now() - 100000,
      loggedInUser.email,
      'Discord ',
      'no-reply@dropbox.com'
    ),

    _makeEmail(
      'Hello!',
      "Hello there",
      true,
      false,
      false,
      0,
      'world@universe.all',
      loggedInUser.fullName,
      loggedInUser.email
    ),
  ]
}