export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">LAB PROGRAMS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#content"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="content">
                <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">HOME</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">SEMESTER3</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">SEMESTER4</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">SEMESTER5</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">SEMESTER6</a>
                    </li>
                </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
