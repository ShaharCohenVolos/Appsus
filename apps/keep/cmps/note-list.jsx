import {KeepPreview} from './note-preview.jsx'

export function KeepList ({keeps}){
    

        return <section className="keep-list">
            {keeps.map(keep => 
                <KeepPreview keep={keep} key={keep.id}/>)}
        </section>
}