<!--
① トップページ（HOME）
    •    メインビジュアル（名護の海・夕日・自然）
    •    キャッチコピー：「高校生から発信する、新しい名護」
    •    NYCの紹介（簡易）
    •    ヘッダーボタン⬇️
　・フォトコンを見る
     ・動画を見る
　・観光ルートを見る
　・Instagramへ
    •    最新のお知らせ一覧
⬆️までボタン
-->

<script lang="ts">
import Title from '$lib/components/Title.svelte';

let slideElm: HTMLDivElement|undefined = $state();
let totalSlides = $derived<number>(slideElm?.children.length ?? 0);
let slideIndex = $state(0);

setInterval(() => {
  slideElm?.style.setProperty('--current-slide', String(slideIndex < totalSlides-1 ? ++slideIndex : slideIndex=0));
}, 5000);
</script>

<style>
.main-visual {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slide-container {
  z-index: 100;
  --current-slide: 0; /* JavaScriptから変更される */
  display: flex;
  transition: transform 0.5s;
  transform: translateX(calc(var(--current-slide) * -100%));
}

.slide {
  width: 100lvw;
  height: 100lvh;
  overflow: hidden;
  flex-shrink: 0;
}

.slide > img, .slide-mov > enhanced\:img { /* ここで警告に釣られてimgを削除すると壊れる */
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

.main-visual > .arrow-down {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 400;
  --color: #eee5;
}

.slide-move {
  height: 50lvh;
  width: 70px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 15px;

  background-color: unset;
  border: unset;
  padding: unset;

  transition: background-color 0.3s;

  &:has(.arrow-left) {
    left: 15px;
  }

  &:has(.arrow-right) {
    right: 15px;
  }

  &:hover {
    background-color: #7775;

    .arrow-left,.arrow-right {
      --color: #999;
    }
  }
}

.main-visual .arrow-left,.arrow-right {
  position: absolute;
  margin: auto;
  z-index: 420;
  --color: #9997;
  transition: border-color 0.3s;
}

.main-visual .arrow-left {
  left: 20px;
  top: 0;
  bottom: 0;
}

.main-visual .arrow-right {
  right: 20px;
  top: 0;
  bottom: 0;
}

.slide-sel {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-sel button {
  background-color: unset;
  padding: unset;
  margin: 7px;
  border-radius: 50%;
  height: 13px;
  width: 13px;
  border: 2px solid #66b9; /* FIXME: 適当な色 */

  &.active {
    border-color: #66be;
    background-color: #66b7;
  }
}

.main-visual > .catchphrase {
  position: absolute;
  top: 35%;
  bottom: 35%;
  left: 5%;
  right: 5%;
  /* margin: auto; */
  /* transform: translate(-50%, -50%); */
  width: 90%;
  z-index: 500;

  font-size: 4rem;
  font-weight: bold;
  color: #eee;
  text-shadow: 0 0 1.5rem var(--color-accent);
  /* background-color: #0007; */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

main {
  /* (main)/+lauout.svelteと重複してる */
  margin: 50px var(--size-main-margin-lr);
  text-align: center;
}
</style>

<Title />

<!-- TODO: 画像入れる、スライドショー -->
<div class='main-visual'>
  <div class='slide-container' bind:this={slideElm}>
    <div class='slide'>
      <enhanced:img src='$lib/assets/hero-images/1000001838.jpg' alt='main visual 1' />
    </div>
    <div class='slide'>
      <enhanced:img src='$lib/assets/hero-images/IMG_0139.jpg' alt='main visual 2' />
    </div>
    <div class='slide'>
      <enhanced:img src='$lib/assets/hero-images/IMG_0231.jpg' alt='main visual 3' />
    </div>
    <div class='slide'>
      <enhanced:img src='$lib/assets/hero-images/IMG_0260.jpg' alt='main visual 4' />
    </div>
    <div class='slide'>
      <enhanced:img src='$lib/assets/hero-images/IMG_0308.jpg' alt='main visual 5' />
    </div>
    <div class='slide'>
      <enhanced:img src='$lib/assets/hero-images/IMG_0574.jpg' alt='main visual 6' />
    </div>
    <div class='slide'>
      <enhanced:img src='$lib/assets/hero-images/IMG_0576.jpg' alt='main visual 7' />
    </div>

  </div>
  <div class='arrow-down'><!-- スクロールのマーカー --></div>
  <!-- スライド用、TODO: 自動切り替え -->
  <button type='button' class='slide-move' onclick={() => { slideElm?.style.setProperty('--current-slide', String(slideIndex > 0 ? --slideIndex : slideIndex=totalSlides-1)) }} aria-label='前の画像に移動'><div class='arrow-left'></div></button>
  <button type='button' class='slide-move' onclick={() => { slideElm?.style.setProperty('--current-slide', String(slideIndex < totalSlides-1 ? ++slideIndex : slideIndex=0)) }} aria-label='次の画像に移動'><div class='arrow-right'></div></button>
  <div class='slide-sel'>{#each Array(totalSlides) as _, i}
    <button class={[i === slideIndex && 'active']} onclick={() => slideElm?.style.setProperty('--current-slide', String(slideIndex=i))} aria-label={`${i + 1}枚目の画像へ移動`}></button>
  {/each}</div>

  <div class='catchphrase lang-ja'>高校生から発信する、新しい名護</div>
</div>

<main>
<div class='lang-en'>
<h2>私たちについて</h2>
<p><span class='lang-en'>Nagocity Youth Creative</span> は、名護市の魅力を高校生の視点で発信し、</p>
<p>観光促進・地域活性化・若者の地域参画を推進することを目的とした学生団体です。</p>
<p>写真、動画、観光ルート制作など、クリエイティブな手法を活用し、</p>
<p>名護の新しい魅力を市内外へ届ける活動を行っています。</p>
</div>
</main>
