

export function KeepImg({keep}) {
    console.log(keep.info.url)

    return <div clasName="img-Container">
        <span>{keep.info.title}</span>
        <img src={keep.info.url}/>
    </div>
}