

export function NoteDetails({keep}){

    return <section className='keep-prev-dets' style={{backgroundColor: keep.style.bgc}}>
        <h2>{keep.subject ? keep.subject:'Subject'}</h2>
        <p>{keep.info.txt}</p>
    </section>
}