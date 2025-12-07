<script lang="ts">
let { children } = $props();
</script>

<style>
main {
  margin: 100px 30px 0;
  min-height: calc(100vh - 100px - var(--size-footer));
}
</style>

<main>{@render children()}</main>
