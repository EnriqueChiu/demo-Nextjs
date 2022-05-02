import Link from 'next/link'

export default function Layout({children}){
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/blog">
            <a className="navbar-brand">MyBlog</a>
          </Link>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link href="/blog/lista">
                  <a className="nav-link">Lista</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/blog/publicar">
                  <a className="nav-link">Publicar</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    {children}  
    </>
  )
}