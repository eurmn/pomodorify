<script lang="ts">
    import { Router, metatags } from '@roxi/routify';
    metatags['theme-color'] = '#6a5acd';
    import { routes } from '../.routify/routes';
    import Serviceworker from './Serviceworker.svelte';
</script>

<Router {routes} />
<Serviceworker />

<style global lang="scss">
    @import '../assets/global.scss';
</style>
