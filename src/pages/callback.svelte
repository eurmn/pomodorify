<script lang="ts">
    const params = window.location.hash.substr(1).split('&');
    if (params[0].split('=')[0] != 'access_token') window.location.href = '/';
    localStorage.setItem('token', params[0].split('=')[1]);
    window.location.href = '/';
</script>
