import { storageService } from "../../../services/storage.service.js"

export const keepService = {
    query,
}

const KEEP_STORAGE_KEY = 'keepBD'

const gKeeps = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    }
]

function query(filterBy){

    let keeps = _loadFromStorage()
    if(!keeps) {
        keeps = gKeeps
        _saveToStorage(keeps)
    }
    // let keeps = gKeeps
    

    return Promise.resolve(keeps)
}

function _saveToStorage(keeps) {
    storageService.saveToStorage(KEEP_STORAGE_KEY, keeps)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEEP_STORAGE_KEY)
}