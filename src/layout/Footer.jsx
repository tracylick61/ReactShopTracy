export function Footer() {
  return (
    <footer className="page-footer" style={{ backgroundColor: 'var(--primary-color)' }}>
      <div className="footer-copyright">
        <div className="container" style={{ color: 'var(--dark-color)' }}>
          © {new Date().getFullYear()} TRACY ©
          <a className="right" href="https://github.com/tracylick61/ReactShopTracy" style={{ color: 'var(--dark-color)' }}>
            Repository
          </a>
        </div>
      </div>
    </footer>
  );
}