import HeaderBarBrand from '../HeaderBarBrand/HeaderBarBrand'
import '../../styles.scss'

export default function HeaderBar() {
  return (
    <header data-cy="header-bar">
      <nav
        className="navbar has-background-dark is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <HeaderBarBrand />
      </nav>
    </header>
  )
}
