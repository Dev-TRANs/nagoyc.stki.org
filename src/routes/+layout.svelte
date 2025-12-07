<script lang="ts">
import favicon from '$lib/assets/favicon.png';
import Instagram_Glyph_White from '$lib/assets/Instagram_Glyph_White.svg';
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
  /* background-color: #77c5; */
}

header > .header-left {
  .gototop {
    display: block;
    width: 60px;
    height: 60px;

    enhanced\:img {
      width: 60px;
      height: 60px;
    }
  }

}

header > .header-right {
  background-color: #77c4;
  border-radius: 15px;
  height: 60px;

  transition: background-color 0.2s;

  &:hover {
    background-color: #77c6;
  }
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

  header > .header-right > nav {
    margin: 0 15px;

    & > ul {
    flex-flow: row;
    }
  }
}

@media (max-width: 1049px){
  .nav-toggle-label {
    height: 60px;
    width: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .hamburger {
      margin: auto;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      /* position: absolute; */
    }
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
    top: 100%;
    right: 0;

    li {
      height: 50px;
    }
  }
}

footer {
  background-color: #375; /* FIXME: 存在を認知するために色をつけた */
  height: var(--size-footer);

  display: grid;
  grid-template:
    "t s" 50%
    "c s" 50%
    / 50% 50%;

  .title {
    grid-area: t;
  }

  .sns {
    grid-area: s;
  }

  .copyright {
    grid-area: c;
  }

  .ig-icon {
    height: 50px;
    width: 50px;

    background-color: transparent;
    box-sizing: content-box;
    border: 25px solid transparent;
    border-radius: 7px;
    display: block;

    img {
      max-width: 50px;
      height: auto;
    }
  }
}
</style>

<!-- FIXME: モバイル対応、普通に文字のあるページでヘッダー分下げる -->
<header class='lang-en'>
  <div class='header-left'><a href='/' aria-label='トップページへ' class='gototop'><enhanced:img src='$lib/assets/favicon.png' alt='favicon'></enhanced:img></a></div>

  <div class='header-right'>
    <input type='checkbox' id='nav-toggle' />
    <label class='nav-toggle-label' for='nav-toggle' aria-label='メニューを開閉する'><div class='hamburger'></div></label>
    <nav class='lang-en'>
      <ul>
        <li><a href='/about/'>ABOUT</a></li> <!-- FIXME: 仮 -->
        <li><a href='/photo-contest/' title='フォトコンテストを見る'>PHOTO CONTEST</a></li>
        <li><a href='/short-movies/' title='動画を見る'>SHORT MOVIES</a></li>
        <li><a href='/routes/' title='観光ルートを見る'>ROUTES</a></li>
        <li><a href='/activity/'>ACTIVITY</a></li> <!-- FIXME: ヘッダーに含めるリンクじゃない? -->
        <li><a href='/contact/'>CONTACT</a></li>
        <li><a href='/news/' title='最新のお知らせ一覧'>NEWS</a></li>
      </ul>
    </nav>
  </div>
</header>

{@render children()}

<footer>
  <div class='lang-en title'>Nagocity Youth Creative</div>
  <div class='lang-en sns'>
    <a href='https://www.instagram.com/nagocity_yc' title='Instagramへ' target='_blank' rel='noopener noreferrer' class='ig-icon'>
      <img src={Instagram_Glyph_White} alt='Instagramのアイコン'  />
    </a>
  </div>
  <div class='lang-en copyright'>© 2025 <a href='https://trans.stki.org/'>TRANs</a>, Nagocity Youth Creative</div>
</footer>
