import {keepService} from '../services/note.service.js'
import {KeepDetailsPreview} from '../cmps/keep-detail-preview.jsx'



export class KeepDetails extends React.Component{

    state = {
        keep: null,
    }

    componentDidMount(){
        this.loadKeep()
    }

    loadKeep = () => {
        const {keepId} = this.props.match.params
        keepService.getFromId(keepId).then(keep => this.setState({keep}))
    }

    render(){
        const {keep} =this.state
        return <section className="keep-detail">
            <KeepDetailsPreview keep={keep}/>
        </section>
    }
}