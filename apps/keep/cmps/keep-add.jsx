import {keepService} from '../services/note.service.js'
import {utilService} from '../../../services/util.service.js'
import {KeepAddBar} from './keep-add-bar.jsx'

export class KeepAdd extends React.Component {
  state = {
    keep: {
      id: utilService.makeId(),
      subject: '',
      type: "note-txt",
      isPinned: true,
      info: {
      txt: "Fullstack Me Baby!"
      },
      style: {
        bgc: utilService.generateRandomColor()
      }
     },
     isFocused: false,
  }
    
  handleChange = ({target}) => {
    const field = target.name
    const value = target.value
    this.setState((prevState) => ({keep: {...prevState.keep, [field]: value}}))
  }

  onAdd = (ev) =>{
    ev.preventDefault()
    keepService.saveKeep(this.state.keep)

  }

  onCreate = (val) => {
    this.setState({isFocused: val})
  }
  
  
  render() {
    const {keep, isFocused} = this.state
      return <section className="keep-add">
        <form onSubmit={this.onAdd}>
          <div>

          <input type="text" name="subject" 
          value={keep.subject} placeholder="Title" 
          onChange={this.handleChange} 
          onFocus={() => this.onCreate(true)}
          />

          {isFocused && <KeepAddBar handleChange={this.handleChange}/>}
          </div>

          <button>Add</button>
        </form>
      </section>
    }
  }