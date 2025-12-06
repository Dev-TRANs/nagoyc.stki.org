<script lang="ts">
import Title from '$lib/components/Title.svelte';
</script>

<style>
.main-visual {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 100lvw;
  height: 100lvh;
  overflow: hidden;
}

.slide > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-hidden {
  display: none;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #eee5;
}


.main-visual > .slide-container {
  z-index: 100;
}

.main-visual > .arrow-down {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 400;
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
  <div class='slide-container'>
    <div class='slide slide-active'>
      <img src='https://dummyimage.com/1980x1080/000/fff' alt='DUMMY, main visual 1' />
    </div>
    <div class='slide slide-hidden'>
      <img src='https://dummyimage.com/1980x1080/ddd/aaa' alt='DUMMY, main visual 2' />
    </div>
    <div class='slide slide-hidden'>
      <img src='https://dummyimage.com/1980x1080/555/ccc' alt='DUMMY, main visual 3' />
    </div>
  </div>
  <div class="arrow-down"></div>
  <h1 class='catchphrase lang-ja'>高校生から発信する、新しい名護</h1>
</div>
