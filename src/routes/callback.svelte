<script lang="ts">
  const params = window.location.hash.substr(1).split('&');
  if (params[0].split('=')[0] != 'access_token') window.location.href = '/';
  localStorage.setItem('token', params[0].split('=')[1]);
  let timeNow = Date.now();
  let expiresTime = parseInt(params[2].split('=')[1])
  localStorage.setItem('expires', (timeNow + expiresTime).toString());

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('refresh') == 'true') {
      close();
  } else {
      window.location.href = '/';
  }
</script>
