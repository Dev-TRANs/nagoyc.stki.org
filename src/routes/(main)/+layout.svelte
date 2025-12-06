<script lang="ts">
let { children } = $props();
</script>

<style>
main {
  margin: 80px 30px 0;
  min-height: calc(100vh - 80px - var(--size-footer));
}
</style>

<main>{@render children()}</main>
