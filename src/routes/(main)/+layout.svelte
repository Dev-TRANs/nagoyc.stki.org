<script lang="ts">
let { children } = $props();
</script>

<style>
main {
  margin: 100px var(--size-main-margin-lr);
  min-height: calc(100vh - 100px - var(--size-footer));
  text-align: center;
}
</style>

<main>{@render children()}</main>
