import {KeepPreview} from './note-preview.jsx'

export function KeepList ({keeps, loadKeeps}){
    

        return <section className="keep-list">

            {keeps.map(keep => 
                <KeepPreview keep={keep} loadKeeps={loadKeeps} key={keep.id}/>)}
        </section>
}