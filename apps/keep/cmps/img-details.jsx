import { KeepTodo } from "./keep-todo";

export function ImgDetails({keep}){
    // console.log(keep)
    return <section className="keep-prev-dets" style={{backgroundColor: keep.style.bgc}}>
        <h2>{keep.subject ? keep.subject : 'Subject'}</h2>
        <h3>{keep.info.title}</h3>
        <div className="img-container">
            <img src={keep.info.url}/>
        </div>
    </section>
}