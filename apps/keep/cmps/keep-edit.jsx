// import {utilService} from '../../../services/util.service'

// export class KeepEdit extends React.Component{

//     state = {
//         keep: {
//             // id: utilService.makeId(),
//             subject: '',
//             type: 'note-txt',
//             isPinned: false,
//             body: 'Fullstack Me Baby!',
//             style:{
//                 // bgc: utilService.generateRandomColor()
//             }
//         }
//     }


//     handleChange = ({target}) => {
//         const field = target.name
//         const value = target.value
//         this.setState((prevState) => ({keep: {...prevState.keep, [field]:value}}))
//     }

//     onSaveKeep = (ev) => {
//         ev.preventDefault()
//         console.log(this.state.keep)
//     }

//     render() {
//         const {type, body, subject} = this.state.keep

//         return <section className="keep-edit">
//             <form onSubmite={this.onSaveKeep}>
//             <label>Subject
//                 <input name="subject" type="text" onChange={this.handleChange}
//                 value={subject} placeholder="Subject"></input>
//             </label>

//             <label>Type
//                 <select name="type" onChange={this.handleChange}>
//                     <option value={type}>Text</option>
//                 </select>
//             </label>
//             </form>
//         </section>
//     }
// }