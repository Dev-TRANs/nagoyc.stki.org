<script lang="ts">
import favicon from '$lib/assets/favicon.png';
import Instagram_Glyph_Gradient from '$lib/assets/Instagram_Glyph_Gradient.png';
import '../app.css';

let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<style>
/* =============================
   HEADER BASE
============================= */
.main-header {
  width: 100%;
  background: white;
  border-bottom: 1px solid #e5e5e5;
  font-family: sans-serif;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 40px;
}

/* =============================
   LOGO
============================= */
.logo-area {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #005691;
}

.logo-img {
  height: 60px;
  margin-bottom: 6px;
}

.site-name-en {
  font-size: 14px;
  font-weight: bold;
}

.site-name-jp {
  font-size: 10px;
  margin-top: 4px;
}

/* =============================
   RIGHT CONTENT
============================= */
.nav-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
}

/* =============================
   TOP BAR (検索用 - 今は非表示)
============================= */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search-box {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
}

.search-box input {
  border: none;
  outline: none;
  background-image: url('https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f50d.svg');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px;
  padding-left: 40px;
  height: 28px;
  width: 260px;
}

/* =============================
   NAV (PC)
============================= */
.main-nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;
}

.main-nav li {
  flex: 1;
  text-align: center;
  border-left: 1px dashed #ddd;
}

.main-nav li:first-child {
  border-left: none;
}

.main-nav a {
  text-decoration: none;
  color: #005691;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 5px;
  transition: background 0.2s;
  gap: 6px;
}

.main-nav a:hover {
  background-color: #f5f9fc;
}

.main-nav .icon,
.main-nav .icon img,
.main-nav .icon enhanced\:img {
  width: 30px;
  height: 30px;
}

.main-nav .icon {
  display: block;
  margin: 0 auto;
}

/* =============================
   MOBILE
============================= */
@media (max-width: 768px) {

  .header-container {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0;
  }

  .logo-area {
    margin: 10px auto;
  }

  .logo-img {
    height: 45px;
  }

  .nav-content {
    width: 100%;
  }

  /* 復活しても自然に中央寄せになる */
  .top-bar {
    justify-content: center;
    padding: 5px 10px;
  }

  .search-box input {
    width: 100%;
    max-width: 400px;
  }

  .main-nav {
    border-top: 1px solid #eee;
    border-bottom: none;
  }

  .main-nav ul {
    overflow-x: auto;
    justify-content: flex-start;
  }

  .main-nav li {
    flex: 0 0 120px;
    border-left: 1px dashed #eee;
  }

  .main-nav a {
    font-size: 12px;
    padding: 14px 5px;
  }

  .main-nav .icon {
    width: 26px;
    height: 26px;
  }
}

.pad {
  flex-grow: 1;
}

/* =============================
   FOOTER BASE
============================= */

.footer-inner {
  margin-bottom: 5rem; /* mb-20 */
  font-family: 'Inter', sans-serif;
  font-weight: 300;
}

.footer-credit {
  width: 100%;
  text-align: center;
}

.footer-link {
  text-decoration: none;
}

.footer-brand {
  font-family: 'Allerta Stencil', sans-serif;
  text-decoration: underline;
  font-weight: 400;
}

</style>

<header class="main-header">
  <div class="header-container">

    <div class="logo-area">
      <a href="/" class="logo-link">
        <img src={favicon} alt="名護ユースクリエイティブ" class="logo-img" />
        <div class="site-name-en">Nagocity Youth Creative</div>
        <div class="site-name-jp">名護ユースクリエイティブ</div>
      </a>
    </div>

    <div class="nav-content">

      <!-- 🔽 検索バー（将来復活用） -->
      <!--
      <div class="top-bar">
        <div class="search-box">
          <input type="text" placeholder="キーワードを入力" />
        </div>
      </div>
      -->

      <nav class="main-nav">
        <ul>
          <li><a href='/about/'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/2139.svg' /></span>About Us</a></li>
          <li><a href='https://www.nagoyc.jp/' target="_blank" rel="noopener"><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f4f7.svg' /></span>Photo Contest</a></li>
          <li><a href='/short-movies/'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f39e.svg' /></span>Short Movies</a></li>
          <li><a href='/routes/'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f5fa.svg' /></span>Routes</a></li>
          <li><a href='/activity/'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f6a9.svg' /></span>Activity</a></li>
          <li><a href='https://www.nagoyc.jp/Contact' target="_blank" rel="noopener"><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f4de.svg' /></span>Contact</a></li>
          <li><a href='https://www.instagram.com/nagocity_yc' target="_blank" rel="noopener"><span class="icon"><enhanced:img src={Instagram_Glyph_Gradient} alt='Instagramのアイコン' /></span>Instagram</a></li>
          <li><a href='/news/'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f4f0.svg' /></span>News</a></li>
        </ul>
      </nav>

    </div>

  </div>
</header>

{@render children()}
<div class='pad'></div>

<footer>
  <div class="footer-inner">
    <p class="footer-credit">
      Created by
      <a href="https://trans.stki.org/" class="footer-link" target="_blank" rel="noopener">
        <span class="footer-brand">TRANs</span>
      </a>
    </p>
  </div>
</footer>
