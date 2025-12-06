<script lang="ts">
let props: {
  title?: string
} = $props();

const SITE_NAME = 'Nagocity Youth Creative';
const SEPARATOR = ' | ';

let fullTitle = $state<string>(SITE_NAME);

if(props.title !== void 0 && props.title !== '') {
  fullTitle = props.title + SEPARATOR + SITE_NAME;
}

</script>

<svelte:head>
  <title>{fullTitle}</title>
</svelte:head>
