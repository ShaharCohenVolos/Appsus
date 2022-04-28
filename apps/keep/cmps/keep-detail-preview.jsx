import {NoteDetails} from './note-details.jsx'
import {ImgDetails} from './img-details.jsx'
import {TodoDetails} from './todo-details.jsx'


export function KeepDetailsPreview({keep}){
    return <section className="details">

        {(keep.type === 'note-txt') && <NoteDetails keep={keep}/>}
        {(keep.type === 'note-img') && <ImgDetails keep={keep}/>}
        {(keep.type === 'note-todos') && <TodoDetails keep={keep}/>}
    </section>
}