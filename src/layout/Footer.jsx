export function Footer() {
  return (
    <footer className="page-footer" style={{ backgroundColor: 'var(--primary-color)' }}>
      <div className="footer-copyright">
        <div className="container" style={{ color: 'var(--dark-color)' }}>
          © {new Date().getFullYear()} Copyright Text
          <a className="right" href="#!" style={{ color: 'var(--dark-color)' }}>
            Repository
          </a>
        </div>
      </div>
    </footer>
  );
}