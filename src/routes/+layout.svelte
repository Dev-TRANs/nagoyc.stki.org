<script lang="ts">
import favicon from '$lib/assets/favicon.png';
import Instagram_Glyph_White from '$lib/assets/Instagram_Glyph_White.svg';
import Instagram_Glyph_Gradient from '$lib/assets/Instagram_Glyph_Gradient.png?enhanced'
import '../app.css';

let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<style>
.main-header {
  width: 100%;
  background: white;
  border-bottom: 1px solid #eee;
  font-family: sans-serif;
  /* position: absolute; */
  /* z-index: 90; */
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  padding: 10px 20px;
}

/* ロゴエリア */
.logo-area {
  margin: auto;
}
.logo-area .logo-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  text-decoration: none;
  color: #005691;
  margin-right: 30px;
  min-width: 200px;
}
.logo-img {
  height: 60px;
  margin-bottom: 5px;
}
.site-name-jp {
  font-size: 10px;
  margin-top: 5px;
}

/* 右側コンテンツ全体 */
.nav-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
}

/* 上段ツールバー */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
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
  height: 25px;
  width: 300px;
}

/* 下段メインナビ */
.main-nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  overflow-x: scroll;
  max-width: 90%;
}

.main-nav li {
  flex: 1;
  text-align: center;
  border-left: 1px dashed #ccc;
}

.main-nav a {
  text-decoration: none;
  color: #005691;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  transition: background 0.2s;
  gap: 7px;
}

.main-nav a:hover {
  background-color: #f9f9f9;
}

.main-nav .icon {
  font-size: 20px;
  margin-bottom: 5px;
}

.main-nav .icon, .icon img, .icon enhanced\:img {
  /* アスペクト比を維持するための設定 */
  width: 30px;
  height: 30px;
  font-size: 23px;
}

.main-nav .icon {
  padding-bottom: 10px;
  /* 中央寄せにしたい場合（任意） */
  display: block;
  margin: auto;
  text-align:center;
  align-content: center;
}

/* =========================
   モバイル用レイアウト
========================= */
@media (max-width: 768px) {

  /* 全体を縦積みに */
  .header-container {
    flex-direction: column;
    padding: 0;
  }

  /* ===== 1段目 ===== */
  .logo-area {
    margin: 0;
    padding: 10px;
  }

  .logo-area .logo-link {
    min-width: auto;
    margin-right: 0;
  }

  .logo-img {
    height: 45px; /* 少し小さく */
  }

  .nav-content {
    width: 100%;
    gap: 0;
  }

  .top-bar {
    justify-content: center;
    padding: 5px 10px 10px;
  }

  .search-box input {
    width: 100%;
    max-width: 500px;
  }

  /* ===== 2段目 main-nav ===== */
  .main-nav {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .main-nav ul {
    max-width: 100%;
    overflow-x: auto;
    gap: 0;
  }

  .main-nav li {
    flex: 0 0 120px;  /* 固定幅で横スクロール */
    border-left: 1px dashed #ddd;
  }

  .main-nav a {
    font-size: 12px;
    padding: 12px 5px;
  }

  .main-nav .icon {
    width: 26px;
    height: 26px;
  }
}


</style>

<header class="main-header">
  <div class="header-container">
    <div class="logo-area">
      <a href="/" class="logo-link">
        <img src={favicon} alt="名護ユースクリエイティブ" class="logo-img" />
        <div class="logo-text">
          <div class="site-name-en">Nagocity Youth Creative</div>
          <div class="site-name-jp">名護ユースクリエイティブ</div>
        </div>
      </a>
    </div>

    <div class="nav-content">
      <div class="top-bar">
        <div class="search-box">
          <input type="text" placeholder="キーワードを入力" />
        </div>
      </div>

      <nav class="main-nav">
        <ul>
          <li><a href='/about/'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/2139.svg' /></span>About us</a></li> <!-- FIXME: 仮 -->
          <li><a href='/photo-contest/' title='フォトコンテストを見る'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f4f7.svg' /></span>Photo Contest</a></li>
          <li><a href='/short-movies/' title='動画を見る'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f39e.svg' /></span>Short Movies</a></li>
          <li><a href='/routes/' title='観光ルートを見る'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f5fa.svg' /></span>Routes</a></li>
          <li><a href='/activity/'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f6a9.svg' /></span>Activity</a></li> <!-- FIXME: ヘッダーに含めるリンクじゃない? -->
          <li><a href='/contact/'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f4de.svg' /></span>Contact</a></li>
          <li><a href='https://www.instagram.com/nagocity_yc'><span class="icon"><enhanced:img src={Instagram_Glyph_Gradient} alt='Instagramのアイコン' /></span>Instagram</a></li>
          <li><a href='/news/' title='最新のお知らせ一覧'><span class="icon"><img src='https://cdn.jsdelivr.net/gh/jdecked/twemoji@17.0.2/assets/svg/1f4f0.svg' /></span>News</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

{@render children()}
