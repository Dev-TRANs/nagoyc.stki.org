<script lang="ts">
import Title from '$lib/components/Title.svelte';
import InternalLinkCard from '$lib/components/InternalLinkCard.svelte';
</script>

<Title title='News' />

<h1>最新のお知らせ</h1>

<div class="card-container">
  <InternalLinkCard href='/' title='Webサイトを作成しました' date='2025/12/14' desc='これからの情報発信における1つの拠点になるでしょう' />
  <InternalLinkCard href='/' title='2つ目の記事' date='2025/12/15' desc='ここに説明文が入ります' />
  <InternalLinkCard href='/' title='3つ目の記事' date='2025/12/16' desc='さらに続く記事' />
</div>

<style>
  .card-container {
    display: grid;
    /* 1fr（均等幅）を2つ並べる設定 */
    grid-template-columns: repeat(2, 1fr);
    /* カード同士の隙間 */
    gap: 1.5rem;
    /* mainがtext-align: centerなので、左寄せに戻したい場合は指定 */
    text-align: left;
    margin-top: 2rem;
  }

  /* レスポンシブ対応：画面が狭いときは1列にする */
  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
</style>
