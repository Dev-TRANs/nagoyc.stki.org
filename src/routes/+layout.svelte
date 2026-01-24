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
:root {
  --header-height: 120px;
  --brand-color: #00a1ab; /* テナント登録ボタンなどの色 */
}

.main-header {
  width: 100%;
  background: white;
  border-bottom: 1px solid #eee;
  font-family: sans-serif;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  padding: 10px 20px;
}

/* ロゴエリア */
.logo-area .logo-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  text-decoration: none;
  color: #005691;
  margin-right: 30px;
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
  border: none; outline: none;
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
}

.main-nav a:hover {
  background-color: #f9f9f9;
}

.main-nav .icon {
  font-size: 20px;
  margin-bottom: 5px;
}

.main-nav .icon img,enhanced:img {
  /* 親要素に対しての最大サイズを指定 */
  max-width: 60%;
  max-height: 80%;

  /* アスペクト比を維持するための設定 */
  width: auto;
  height: auto;

  /* 中央寄せにしたい場合（任意） */
  display: block;
  margin: auto;
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
          <button class="search-icon">🔍</button>
        </div>
      </div>

      <nav class="main-nav">
        <ul>
          <li><a href='/about/'><span class="icon">🔰</span>ABOUT</a></li> <!-- FIXME: 仮 -->
          <li><a href='/photo-contest/' title='フォトコンテストを見る'><span class="icon">📷</span>PHOTO CONTEST</a></li>
          <li><a href='/short-movies/' title='動画を見る'><span class="icon">🎞️</span>SHORT MOVIES</a></li>
          <li><a href='/routes/' title='観光ルートを見る'><span class="icon">🗺</span>ROUTES</a></li>
          <li><a href='/activity/'><span class="icon">🚩</span>ACTIVITY</a></li> <!-- FIXME: ヘッダーに含めるリンクじゃない? -->
          <li><a href='/contact/'><span class="icon">📞</span>CONTACT</a></li>
          <li><a href='https://www.instagram.com/nagocity_yc'><span class="icon"><enhanced:img src={Instagram_Glyph_Gradient} alt='Instagramのアイコン' /></span>Instagram</a></li>
          <li><a href='/news/' title='最新のお知らせ一覧'><span class="icon">📰</span>NEWS</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

{@render children()}
