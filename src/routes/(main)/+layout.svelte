<script lang="ts">
let { children } = $props();
</script>

<style>
main {
  margin: 100px var(--size-main-margin-lr);
  text-align: center;
}
</style>

<main>{@render children()}</main>
