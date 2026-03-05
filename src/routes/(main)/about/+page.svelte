<script lang="ts">
  import Title from '$lib/components/Title.svelte';
</script>

<Title title='About us' />

<div class="about">

<h2 class='lang-ja'>団体の目的</h2>
<p>Nagocity Youth Creative は、名護市の魅力を高校生の視点で発信し、</p>
<p>観光促進・地域活性化・若者の地域参画を推進することを目的とした学生団体です。</p>
<p>写真、動画、観光ルート制作など、クリエイティブな手法を活用し、</p>
<p>名護の新しい魅力を市内外へ届ける活動を行っています。 </p>

<h2 class='lang-ja'>設立背景</h2>
<p>Nago City Youth Creative PROJECTsは、副代表が学校の授業で</p>
<p>名護市の観光について学んだことがきっかけで生まれました。</p>

<p>授業の中で、名護市は観光客が多く通る地域でありながら、</p>
<p>目的地ではなく通過地点として</p>
<p>「素通り」されてしまうことが多いという課題があると知りました。</p>

<p>そこで、</p>
<p>「地域に住む若者の視点で名護の魅力をもう一度見つけて発信できれば、</p>
<p>地域をもっと盛り上げられるのではないか」</p>
<p>という話が出たことから、</p>
<p>このプロジェクトを立ち上げることになりました。</p>

<p>現在は、写真企画や地域発信などの活動を通して、</p>
<p>名護の魅力を若い世代の視点で発信する取り組みを進めています。</p>

<h2 class='lang-ja'>ビジョン（目指す姿）</h2>
<p>若者のアイデアが名護を動かす。</p>
<p>中高生が地域と関わることが「当たり前」になる。</p>
<p>そして、名護がもっとワクワクするまちになる。</p>
<p>Nagocity Youth Creativeは、そんな未来をつくるために活動を続けています。</p>

<h2 class='lang-ja'>活動内容</h2>

<h3>観光・地域PR</h3>
<ul>
<li>若者が作る名護の観光マップ</li>
<li>SNSによる魅力発信</li>
<li>名護市内スポットの紹介企画</li>
</ul>

<h3>イベント・企画運営</h3>
<ul>
<li>名護フォトコンテストの実施</li>
<li>地域参加型イベントの企画立案</li>
<li>商店街・企業との共同プロジェクト</li>
</ul>

<h3>協働・連携</h3>
<ul>
<li>名護市内の学校との連携</li>
<li>地域団体・企業・メディア（FM局 等）との協力</li>
<li>地域の人の声を聞くまちづくり活動</li>
</ul>

<h2 class='lang-ja'>🌊 Nagocity Youth Creative ロゴの由来</h2>
<p>このロゴは、名護の自然・若者のエネルギー・未来への広がりを表現しています。</p>
<p>中央に描かれた波は、名護の海を象徴すると同時に、</p>
<p>高校生一人ひとりの小さな行動が、やがて大きなうねりとなって</p>
<p>地域全体へ広がっていく姿を表しています。</p>
<p>これは、若者の挑戦が名護の未来を動かす力になるという想いを込めています。</p>

<p>背景の太陽と空は、名護の明るさや希望、そしてこれから始まる新しい挑戦を意味しています。</p>

<p>また、どこまでも広がる空は、固定概念にとらわれず、</p>
<p>自由な発想で名護の魅力を発信していく団体の姿勢を表現しています。</p>

<p>全体を囲む円形は、人と人、地域と若者がつながり、</p>
<p>協力しながら一つの輪をつくっていくことを象徴しています。</p>

<p>名護市内だけでなく、市外・県内外へとつながっていく広がりも意識したデザインです。</p>

<p>このロゴには、</p>
<p>「高校生の視点で名護の魅力を掘り起こし、波のように広げていく」</p>
<p>という Nagocity Youth Creative の想いが込められています。</p>

</div>

<style>
.about {
  max-width: 720px;
  margin: 0 auto;
  text-align: left;
}

.about h2::after,
.about h3::after {
  left: 0;
  transform: none;
  width: 3em;
}

.about p {
  line-height: 1.9;
  margin-bottom: 0.8em;
}

.about h2 {
  margin-top: 2.5em;
  margin-bottom: 1em;
  font-size: 1.6rem;
}

.about h3 {
  margin-top: 1.6em;
  margin-bottom: 0.6em;
  font-size: 1.2rem;
}

.about ul {
  padding-left: 1.2em;
  margin-bottom: 1em;
}

.about li {
  margin-bottom: 0.4em;
}

@media (max-width: 640px) {

  .about {
    padding: 0 1rem;
  }

  .about h2 {
    font-size: 1.4rem;
  }

  .about h3 {
    font-size: 1.1rem;
  }

}
</style>
