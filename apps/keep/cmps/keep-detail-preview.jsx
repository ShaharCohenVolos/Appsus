

export function KeepDetailsPreview({keep}){

    return <section className="details">
        <h2>{(keep.subject) ? keep.subject : 'Subject'}</h2>
        
    </section>
}