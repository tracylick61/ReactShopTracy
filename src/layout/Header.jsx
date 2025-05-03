export function Header() {
  return (
    <nav style={{ backgroundColor: 'var(--primary-color)' }}>
      <div className="container">
        <div className="nav-wrapper">
          <a href="https://github.com/tracylick61/ReactShopTracy" className="brand-logo" style={{ color: 'var(--dark-color)' }}>
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/tracylick61/ReactShop!" style={{ color: 'var(--dark-color)' }}>
                Repository
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}