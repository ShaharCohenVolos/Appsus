import { storageService } from "../../../services/storage.service.js"

export const keepService = {
    query,
    getFromId,
    remove,
}

const KEEP_STORAGE_KEY = 'keepBD'

const gKeeps = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
        bgc: "#B22222"
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
            bgc: "#B0E0E6"
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
        },
        style: {
        bgc: "#2E8B57"
        }
    }
]

function query(filterBy){

    let keeps = _loadFromStorage()
    if(!keeps) {
        keeps = gKeeps
        _saveToStorage(keeps)
    }
    
    if(filterBy) {
        let type = filterBy
        keeps = keeps.filter(keep => {
            return keep.type === type
        })
    }

    return Promise.resolve(keeps)
}

function getFromId(id){
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

function _saveToStorage(keeps) {
    storageService.saveToStorage(KEEP_STORAGE_KEY, keeps)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEEP_STORAGE_KEY)
}