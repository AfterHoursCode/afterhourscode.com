import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="text-6xl font-black font-sans mb-10 mt-0">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="text-2xl font-sans font-black mt-0">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <>
        <main>{children}</main>
        <footer className="p-12">
          A project by <a className="text-blue-500 font-bold" href="https://www.brandonklotz.co">Brandon Klotz</a> - {new Date().getFullYear()}
        </footer>
      </>
    )
  }
}

export default Layout
