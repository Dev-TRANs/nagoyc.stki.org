<script lang="ts">
  import Title from '$lib/components/Title.svelte';

  export let data;
  const { items } = data;
</script>

<Title title='News' />
<h1>News</h1>

{#if items.length === 0}
  <p class="empty">記事を取得できませんでした。</p>
{:else}
  <div class="card-container">
    {#each items as item}
      <a class="card" href={item.link} target="_blank" rel="noopener noreferrer">
        {#if item.image}
          <img src={item.image} alt={item.title} class="card-image" />
        {/if}
        <div class="card-body">
          <span class="card-date">{item.pubDate}</span>
          <h2 class="card-title">{item.title}</h2>
          <p class="card-desc">{item.description}</p>
        </div>
      </a>
    {/each}
  </div>
{/if}

<style>
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    text-align: left;
    margin-top: 2rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: box-shadow 0.2s;
  }

  .card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  .card-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .card-body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .card-date {
    font-size: 0.8rem;
    color: #888;
  }

  .card-title {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }

  .card-desc {
    font-size: 0.875rem;
    color: #555;
    margin: 10;
    line-height: 1.6;
  }

  .empty {
    color: #888;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
  
  h2::after {
    left: 0;
    transform: none;
    width: 5em;
  }
</style>