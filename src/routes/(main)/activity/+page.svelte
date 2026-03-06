<!--
⑥ 活動報告（ACTIVITY）
    •    イベント参加  comming soon...
    •    撮影会
    •    企画会議
    •    地域団体との連携
    •    年単位のアーカイブ
-->

<script lang="ts">
import ComingSoon from '$lib/components/ComingSoon.svelte'
import Title from '$lib/components/Title.svelte';
</script>

<Title title='Activity' />

<h1>Activity</h1>

<div class="activity">

<h2 class='lang-ja'><a href="https://www.nagoyc.jp/Contact">Photo Contest</a></h2>
<p>地域ごとのテーマをもとに、</p>
<p>写真で名護の魅力を見つめ直す企画。</p>

<h2 class='lang-ja'><a href="/short-movies/">Short Movies</a></h2>
<p>映像表現を通して、</p>
<p>地域の風景や想いを発信する活動。</p>

<h2 class='lang-ja'><a href="/routes/">Routes</a></h2>
<p>地域のルートやスポットを通して、</p>
<p>名護の新たな見方を提案する発信。</p>

<h2 class='lang-ja'>Community</h2>
<p>地域や若者同士をつなぐ</p>
<p>連携型のクリエイティブプロジェクト。</p>

</div>

<style>
.activity {
  max-width: 720px;
  margin: 0 auto;
}

.activity h2 {
  margin-top: 2.5em;
  margin-bottom: 1em;
  font-size: 1.6rem;
}

.activity a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  transition: transform 0.15s ease, color 0.2s;
}

.activity a:hover {
  transform: translateY(-4px);
  color: #0ea5e9;
}

@media (max-width: 640px) {

  .activity {
    padding: 0 1rem;
  }

  .activity h2 {
    font-size: 1.4rem;
  }

}
</style>

