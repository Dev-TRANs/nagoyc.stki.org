<script lang="ts">
import favicon from '$lib/assets/favicon.svg';
import '../app.css';

let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<style>
header {
  width: 100vw;
  height: 70px;
  box-sizing: border-box;

  padding: 0 30px;

  /* トップページは浮かせたいのでstickyではない */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* TODO: 消す*/
  color: white;
  background-color: #77c5;
}

header > .header-left {

}

header > .header-right {

}

header > .header-right > nav > ul {
  display: flex;
  padding: 0;

  li {
    list-style: none;
  }

  a {
    /* TODO: カラーコード直書きやめる */
    color: #eee;
    text-decoration: none;
    padding: 0 3px;
    margin: 0 2px;

    transition: color 0.3s ease;

    /* 下線のため */
    position: relative;
    display: inline-block;
    box-sizing: border-box;
  }

  a:link {
  }

  a:visited {
  }

  a:focus {
  }

  a:hover {
  }

  a:active {
  }

  /* 適当アニメーション、もっといいのができたら消す */
  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;

    width: 100%;
    height: 2px;
    background-color: currentColor;

    transition:
      transform 0.3s,
      height 0.2s,
      bottom 0.2s,
      color 0.3s;

    transform: scaleX(0);
    transform-origin: left;
  }

  a:hover::after {
      transform: scaleX(1);
      /* height: 4px; */
      /* bottom: -5px; */
  }

  a:hover {
    color: #fff;
  }
}

#nav-toggle {
  display: none;
}

@media (min-width: 1050px) {
  .nav-toggle-label {
    display: none;
  }

  header > .header-right > nav > ul {
    flex-flow: row;
  }
}

@media (max-width: 1049px){
  .nav-toggle-label {
    display: inline-block;
  }

  header > .header-right > nav > ul {
    flex-flow: column;
    padding: 0 30px;
  }

  header > .header-right > nav {
    display: none;
  }

  #nav-toggle:checked ~ nav {
    display: flex;
    background-color: #7c75; /* FIXME: */

    position: absolute;
    top: 70px;
    right: 0;

    li {
      height: 50px;
    }
  }
}
</style>

<!-- FIXME: モバイル対応、普通に文字のあるページでヘッダー分下げる -->
<header class='lang-en'>
  <div class='header-left'><a href='/'>GOTO /</a></div>

  <div class='header-right'>
    <input type='checkbox' id='nav-toggle' />
    <label class='nav-toggle-label' for='nav-toggle'>開く</label>
    <nav class='lang-en'>
      <ul>
        <li><a href='/about/'>ABOUT</a></li> <!-- FIXME: 仮 -->
        <li><a href='/photo-contest/' title='フォトコンテストを見る'>PHOTO CONTEST</a></li>
        <li><a href='/short-movies/' title='動画を見る'>SHORT MOVIES</a></li>
        <li><a href='/routes/' title='観光ルートを見る'>ROUTES</a></li>
        <li><a href='/activity/'>ACTIVITY</a></li> <!-- FIXME: ヘッダーに含めるリンクじゃない? -->
        <li><a href='/contact/'>CONTACT</a></li>
        <li><a href='/news/' title='最新のお知らせ一覧'>NEWS</a></li>
        <li><a href='https://www.instagram.com/[ここにユーザー名]' title='Instagramへ' target="_blank" rel="noopener noreferrer">[Instagram LOGO]</a></li>
      </ul>
    </nav>
  </div>
</header>

{@render children()}
