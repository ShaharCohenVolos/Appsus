import {keepService} from '../services/note.service.js'
import {utilService} from '../../../services/util.service.js'

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
  }
    
  handleChange = ({target}) => {
    const field = target.name
    const value = target.value
    this.setState((prevState) => ({keep: {...prevState.keep, [field]: value}}))
  }

  onAdd = (ev) =>{
    ev.preventDefault()
    keepService.saveKeep(this.state.keep)
      // .then(() => {
      //   this.props.heistory.push('/keep')
      // })
  }
  
  
  render() {
    const {keep} = this.state
      return <section className="keep-add">
        <form onSubmit={this.onAdd}>
          <input type="text" name="subject" 
          value={keep.subject} placeholder="Title" 
          onChange={this.handleChange}/>
          <button>Add</button>
        </form>
      </section>
    }
  }