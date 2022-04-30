import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const keepService = {
  query,
  getFromId,
  remove,
  saveKeep,
  bgcColor,
}

const KEEP_STORAGE_KEY = 'keepBD'

const gKeeps = [
  {
    id: "n101",
    type: "note-txt",
    isPinned: true,
    title: "JS",
    content: "Hello",
    style: {
      backgroundColor: "#B22222",
    }
  },
  {
    id: "n102",
    type: "note-img",
    title: "Bobby and I",
    content: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
    style: {
      backgroundColor: "#B0E0E6",
    }
  },
  {
    id: "n103",
    type: "note-todos",
    title: "todos",
    content: "to, do, an, hello",
    style: {
      backgroundColor: "#2E8B57",
    }
  }
]

function query(filterBy) {

  let keeps = _loadFromStorage()

  if (!keeps) {
    keeps = gKeeps
    _saveToStorage(keeps)
  }


  if (filterBy !== 'all' && filterBy) {

    let type = filterBy
    keeps = keeps.filter(keep => {
      return keep.type === type
    })
  }

  return Promise.resolve(keeps)
}

function getFromId(id) {
  const keeps = _loadFromStorage()
  const keep = keeps.find(keep => keep.id === id)
  return Promise.resolve(keep)
}

function remove(id) {
  let keeps = _loadFromStorage()
  keeps = keeps.filter(keep => keep.id !== id)
  _saveToStorage(keeps)

  return Promise.resolve()
}

function bgcColor(color, id) {
  let keeps = _loadFromStorage()
  let keep = keeps.find(keep => keep.id === id)
  keep.style.backgroundColor = color
  _saveToStorage(keeps)
  return Promise.resolve()
}

function saveKeep(keep) {

  return _add(keep)
}

function _add(keep) {
  let keeps = _loadFromStorage()
  keeps = [keep, ...keeps]
  _saveToStorage(keeps)
  return Promise.resolve()
}

function _saveToStorage(keeps) {
  storageService.saveToStorage(KEEP_STORAGE_KEY, keeps)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEEP_STORAGE_KEY)
}