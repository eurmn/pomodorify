<script lang="ts">
    import { Router } from '@roxi/routify';
    import { routes } from '../.routify/routes';
    import Serviceworker from './Serviceworker.svelte';
</script>

<Router {routes} />
<Serviceworker />

<style global lang="scss">
    @import '../assets/global.scss';
</style>
