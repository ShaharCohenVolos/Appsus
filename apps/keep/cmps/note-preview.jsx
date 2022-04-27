import {KeepTxt} from './keep-txt.jsx'
import {KeepImg} from './keep-img.jsx'
import {KeepTodo} from './keep-todo.jsx'


export function KeepPreview({keep, key}){
    console.log(key)
    console.log(keep)
    console.log(keep.type)
    console.log(keep.info)
    console.log(keep.info.txt)
    console.log(keep.info.url)
    console.log(keep.info.todos)

    return <article className='keep=preview' >
        <section className="keep-content" >
           {
           (keep.type === 'note-txt')? <KeepTxt keep={keep}/>: 
            (keep.type === 'note-img') ? <KeepImg keep={keep}/>:
            (keep.type === 'note-todos') ? <KeepTodo keep={keep}/>: ''}
        </section>
    </article>
}