

const { Link } = ReactRouterDOM

export function Home() {

  return <main className="app-home no-aside-layout">
    <section className="welcome-banner">
      {/* <h2 className="greet">Welcome to</h2> */}
      <div className="logo">
        <img className="icon" src="../assets/img/logo.svg" alt="logo" />
        <h1 className="appsus">Appsus</h1>
      </div>
      {/* <nav className="links">
        <Link to="/email/inbox" className="email-link"> Email </Link>
        <Link to="/keep/all" className="keep-link"> Keep </Link>
        <Link to="/book" className="book-link"> Book </Link>
      </nav> */}
    </section>
    <section className="card-container">
      <div className="card">
        <div className="img-container"><img src="../assets/img/uri.jpg" alt="uri" /></div>
        <h1>Uri Gruda</h1>
        <h2>Lead Email Designer</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa mollitia fugit, animi ex tempora commodi quo natus dolore tempore, accusamus repellendus optio distinctio magnam qui? Excepturi nihil ut facilis pariatur?
          Vero minus voluptatem velit facilis id nihil. Consequatur eos sit quidem id maxime. Ea, quisquam ut molestias enim quos dignissimos! Accusantium molestias saepe minima qui, quibusdam possimus eaque ratione eos.
          Maiores quia porro, dignissimos eligendi quam iusto eaque tempora consectetur reiciendis illum aut blanditiis consequuntur nemo quo inventore id doloremque natus recusandae laboriosam dolore. Non nihil ipsam eligendi nulla consequatur?</p>
      </div>
      <div className="card">
        <div className="img-container"><img src="../assets/img/shahar.jpg" alt="uri" /></div>
        <h1>Shahar Cohen</h1>
        <h2>Lead Keep Designer</h2>
        <p>Shahar Cohen Volos, age 29, from Haifa. I am merried +2 dogs. Before coming to Coding Academy
          I used to work for HP Computers.
          <br/> 
          <br/> 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa mollitia fugit, animi ex tempora commodi quo natus dolore tempore, accusamus repellendus optio distinctio magnam qui? Excepturi nihil ut facilis pariatur?
          Vero minus voluptatem velit facilis id nihil. Consequatur eos sit quidem id maxime. Ea, quisquam ut molestias enim quos dignissimos! Accusantium molestias saepe minima qui, quibusdam possimus eaque ratione eos.
          Maiores quia porro, dignissimos eligendi quam iusto eaque tempora consectetur reiciendis illum aut blanditiis consequuntur nemo quo inventore id doloremque natus recusandae laboriosam dolore. Non nihil ipsam eligendi nulla consequatur?</p>
      </div>

    </section>
  </main>
}