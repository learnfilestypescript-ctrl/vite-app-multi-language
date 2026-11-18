
import { useTranslation } from 'react-i18next'
import './index.css'

function App() {
  const { t, i18n } = useTranslation()

  const isFa = i18n.language.startsWith('fa')

  return (
    <main dir={i18n.dir()}>

      {/* Navbar */}
      <header className="navbar">
        <nav className="container nav-content">

          <h1>{t("nav.username")}</h1>

          <a href="#" className="logo">
            Dev<span>Blog.</span>
          </a>

          <div className="nav-links">
            <a href="#home">{t('nav.home')}</a>
            <a href="#articles">{t('nav.articles')}</a>
            <a href="#about">{t('nav.about')}</a>
          </div>

          <button
            className="language-btn"
            onClick={() => i18n.changeLanguage(isFa ? 'en' : 'fa')}
          >
            {isFa ? 'English' : 'فارسی'}
          </button>

        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">

          <span className="hero-badge">
            {t('hero.welcome', { name: 'Sadegh' })}
          </span>

          <h1>{t('hero.title')}</h1>

          <p>
            {t('hero.description', {
              technology: 'React & TypeScript'
            })}
          </p>

          <a href="#articles" className="primary-btn">
            {t('hero.button')}
          </a>

        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="articles-section">
        <div className="container">

          <div className="section-heading">
            <span>DEV BLOG</span>
            <h2>{t('articles.title')}</h2>
            <p>{t('articles.description')}</p>
          </div>

          <div className="articles-grid">

            <article className="article-card">
              <div className="article-icon react-icon">R</div>
              <span className="article-category">REACT</span>
              <h3>{t('articles.react.title')}</h3>
              <p>{t('articles.react.description')}</p>
            </article>

            <article className="article-card">
              <div className="article-icon js-icon">JS</div>
              <span className="article-category">JAVASCRIPT</span>
              <h3>{t('articles.javascript.title')}</h3>
              <p>{t('articles.javascript.description')}</p>
            </article>

            <article className="article-card">
              <div className="article-icon ts-icon">TS</div>
              <span className="article-category">TYPESCRIPT</span>
              <h3>{t('articles.typescript.title')}</h3>
              <p>{t('articles.typescript.description')}</p>
            </article>

          </div>
        </div>
      </section>

      {/* Interpolation */}
      <section className="interpolation-section">
        <div className="container">

          <div className="interpolation-box">

            <span className="section-label">I18NEXT</span>

            <h2>{t('interpolation.title')}</h2>

            <div className="examples-grid">

              <div className="example-card">
                <span>NAME</span>
                <p>
                  {t('interpolation.name', {
                    name: 'Sadegh'
                  })}
                </p>
              </div>

              <div className="example-card">
                <span>TECHNOLOGY</span>
                <p>
                  {t('interpolation.technology', {
                    technology: 'React'
                  })}
                </p>
              </div>

              <div className="example-card">
                <span>COUNT</span>
                <p>
                  {t('interpolation.count', {
                    count: 5
                  })}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="footer">
        <div className="container footer-content">

          <h2 className="logo">
            Dev<span>Blog.</span>
          </h2>

          <p>{t('footer.description')}</p>

          <small>
            © 2026 DevBlog. {t('footer.copyright')}
          </small>

        </div>
      </footer>

    </main>
  )
}

export default App
