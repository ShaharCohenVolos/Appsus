import {utilService} from '../../../services/util.service.js'
import {keepService} from '../services/note.service.js'

export class KeepEdit extends React.Component{

    state = {
        keep: null
    }

    componentDidMount() {
        this.loadKeep()
    }

    loadKeep = () => {
        const {keepId} = this.props.match.params
        keepService.getFromId(keepId)
          .then(keep => {
              if(!keep) return this.props.history.push('/')
              this.setState({keep})
          })
          
    }

    handleChange = ({target}) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({keep: {...prevState.keep, [field]:value}}))
    }

    onSaveKeep = (ev) => {
        ev.preventDefault()
        console.log(this.state.keep)
    }

    render() {
        const {keep} = this.state
        if(!keep) return <img src="../../../assets/img/loader.gif"/>
        const subj = (!keep.subject) ? 'Subject' : keep.subject

        return <section className="keep-edit">
            <form onSubmit={this.onSaveKeep}>
            <label>Subject: 
                <input name="subject" type="text" onChange={this.handleChange}
                value={subj} placeholder={subj}></input>
            </label>

            

            <button>Update</button>
            </form>
        </section>
    }
}