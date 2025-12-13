<!-- 多分外部リンク用のカードも作ることになる -->
<script lang="ts">
let { href, title, desc, date } = $props();
</script>

<style>
article {
  border-radius: 20px;
  background-color: #eee;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  text-align: left;

  border-left: 4px solid var(--color-main);
}

a {
  text-decoration: none;
}

.header {
  display: flex;
  align-items:flex-end;
}

.link-title {
  color: var(--color-main);
  font-size: large;
  font-weight: bold;
}

time {
  margin-left: 20px;
}

.desc {
  margin-top: 10px;
}
</style>

<article>
  <a href={href}>
    <div class='header'>
      <div class='link-title lang-ja'>{title}</div>
      <time class='lang-en'>{date}</time>
    </div>
    <div class='lang-ja desc'>{desc}</div>
  </a>
</article>
