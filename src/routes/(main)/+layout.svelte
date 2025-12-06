<script lang="ts">
let { children } = $props();
</script>

<style>
main {
  margin: 80px 30px 0;
}
</style>

<main>{@render children()}</main>
