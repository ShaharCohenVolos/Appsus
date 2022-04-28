export function KeepImg({ keep }) {

  return (
    <section className="note-img">
      <span>{keep.info.title}</span>
      <div className="img-container">
        <img src={keep.info.url} />
      </div>
    </section>
  );
}
