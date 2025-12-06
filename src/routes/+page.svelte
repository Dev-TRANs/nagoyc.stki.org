<script lang="ts">
import Title from '$lib/components/Title.svelte';

let slideElm: HTMLDivElement|undefined = $state();
let totalSlides = $derived<number>(slideElm?.children.length ?? 0);
let slideIndex = $state(0);
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

.slide > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  height: 100lvh;
  width: 70px;
  position: absolute;
  top: 0;

  background-color: unset;
  border: unset;
  padding: unset;

  &:has(.arrow-left) {
    left: 0;
  }

  &:has(.arrow-right) {
    right: 0;
  }

  &:hover {
    background-color: #7775;
  }
}

.main-visual .arrow-left,.arrow-right {
  position: absolute;
  margin: auto;
  z-index: 420;
  --color: #999;
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
  border: 2px solid #55a; /* FIXME: 適当な色 */

  &.active {
    border-color: #5a5;
    background-color: #373;
  }
}

.main-visual > .catchphrase {
  position: absolute;
  top: 20%;
  bottom: 20%;
  left: 5%;
  right: 5%;
  /* margin: auto; */
  /* transform: translate(-50%, -50%); */
  width: 90%;
  z-index: 500;

  font-size: xxx-large;
  color: #eee;
  text-shadow: 0 0 5px var(--color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<Title />

<!-- TODO: 画像入れる、スライドショー -->
<div class='main-visual'>
  <div class='slide-container' bind:this={slideElm}>
    <div class='slide'>
      <img src='https://dummyimage.com/1980x1080/000/fff' alt='DUMMY, main visual 1' />
    </div>
    <div class='slide'>
      <img src='https://dummyimage.com/1980x1080/ddd/aaa' alt='DUMMY, main visual 2' />
    </div>
    <div class='slide'>
      <img src='https://dummyimage.com/1980x1080/555/ccc' alt='DUMMY, main visual 3' />
    </div>
  </div>
  <div class='arrow-down'><!-- スクロールのマーカー --></div>
  <!-- スライド用 -->
  <button type='button' class='slide-move' onclick={() => { slideElm?.style.setProperty('--current-slide', String(slideIndex > 0 ? --slideIndex : slideIndex=totalSlides-1)) }} aria-label='前の画像に移動'><div class='arrow-left'></div></button>
  <button type='button' class='slide-move' onclick={() => { slideElm?.style.setProperty('--current-slide', String(slideIndex < totalSlides-1 ? ++slideIndex : slideIndex=0)) }} aria-label='次の画像に移動'><div class='arrow-right'></div></button>
  <div class='slide-sel'>{#each Array(totalSlides) as _, i}
    <button class={[i === slideIndex && 'active']} onclick={() => slideElm?.style.setProperty('--current-slide', String(slideIndex=i))} aria-label={`${i + 1}枚目の画像へ移動`}></button>

  {/each}</div>

  <h1 class='catchphrase lang-ja'>高校生から発信する、新しい名護</h1>
</div>
