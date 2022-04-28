import {NoteDetails} from './keep-type/note-details.jsx'
import {ImgDetails} from './keep-type/img-details.jsx'
import {TodoDetails} from './keep-type/todo-details.jsx'


export function KeepDetailsPreview({keep}){
    return <section className="details">

        {(keep.type === 'note-txt') && <NoteDetails keep={keep}/>}
        {(keep.type === 'note-img') && <ImgDetails keep={keep}/>}
        {(keep.type === 'note-todos') && <TodoDetails keep={keep}/>}
    </section>
}