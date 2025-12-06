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

header {
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
</style>

<!-- FIXME: モバイル対応、普通に文字のあるページでヘッダー分下げる -->
<header class='lang-en'>
headerの中身

  <div class='lang-en'>
    <a href='/'>ABOUT</a> <!-- FIXME: 仮 -->
    <a href='/photo-contest/' title='フォトコンテストを見る'>PHOTO CONTEST</a>
    <a href='/short-movies/' title='動画を見る'>SHORT MOVIES</a>
    <a href='/routes/' title='観光ルートを見る'>ROUTES</a>
    <a href='/activity/'>ACTIVITY</a> <!-- FIXME: ヘッダーに含めるリンクじゃない? -->
    <a href='/contact/'>CONTACT</a>
    <a href='/news/' title='最新のお知らせ一覧'>NEWS</a>
    <a href='https://www.instagram.com/[ここにユーザー名]' title='Instagramへ'>[Instagram LOGO]</a>
  </div>
</header>

{@render children()}
