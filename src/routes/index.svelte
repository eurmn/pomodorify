<script lang="ts">
  import { faRandom, faPlay } from '@fortawesome/free-solid-svg-icons';
  // import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { library, dom } from '@fortawesome/fontawesome-svg-core';
  import '@fontsource/inter/800.css';
  import '@fontsource/poppins/300.css';

  // Inject the spotify player SDK
  let script = document.createElement('script');
  script.src = 'https://sdk.scdn.co/spotify-player.js';
  document.body.appendChild(script);

  let timerElement: HTMLElement;
  let shuffleElement: HTMLElement;
  let appElements: HTMLElement;
  let songImg: string, songName: string, songArtists: string, timerTime: string;
  /* let songImg = 'https://i.scdn.co/image/ab67616d00001e02b1f8da74f225fa1225cdface';
  let songName = 'Only Ones Who Know';
  let songArtists = 'Arctic Monkeys'; */
  let isBreak: boolean, shuffleState: boolean;
  let timerInterval: number, colorInterval: number;
  let timerColorHue = 125;
  let timer = 1500;
  let buttonText = 'START';
  let player: Spotify.Player;
  let playlists = new Array<string>();
  isBreak = shuffleState = false;
  timerTime = '25:00';

  function URLToURI(url: string) {
    return url
      .replace(/http?s:\/\/open./, '')
      .replace('.com', '')
      .replaceAll('/', ':')
      .split('?')[0];
  }

  function changeHue() {
    timerColorHue--;
    timerElement.style.color = `hsl(${timerColorHue}, 70%, 65%)`;
  }

  function play({
    context_uri,
    playerInstance: {
      _options: { getOAuthToken, id },
    },
  }) {
    if (!id) return;
    getOAuthToken((access_token: string) => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: 'PUT',
        body: JSON.stringify({ context_uri: context_uri }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      });
    });
  }

  function start() {
    if (playlists == []) return;
    if (!player) return;
    for (let i = 0; i < 2; i++) {
      if (playlists[i].includes('.com')) {
        playlists[i] = URLToURI(playlists[i]);
      }
    }
    localStorage.setItem('p1', playlists[0]);
    localStorage.setItem('p2', playlists[1]);
    if (timerInterval) {
      buttonText = 'START';
      player.pause();
      clearInterval(timerInterval);
      clearInterval(colorInterval);
      timerInterval = null;
      return;
    }
    buttonText = 'STOP';
    timerInterval = window.setInterval(() => {
      if (timer == 0) {
        clearInterval(colorInterval);
        timerColorHue = 125;
        timerElement.style.color = `hsl(${timerColorHue}, 70%, 65%)`;
        isBreak = !isBreak;
        timer = isBreak ? 300 : 1500;
        colorInterval = window.setInterval(changeHue, isBreak ? 2400 : 12000);
        play({
          playerInstance: player,
          context_uri: isBreak ? playlists[1] : playlists[0],
        });
      }
      timer -= 1;
      timerTime =
        Math.floor(timer / 60)
          .toString()
          .padStart(2, '0') +
        ':' +
        Math.floor(timer % 60)
          .toString()
          .padStart(2, '0');
    }, 1000);
    colorInterval = window.setInterval(changeHue, 12000);
    if (timer < 1500) {
      player.resume();
      return;
    }
    play({
      playerInstance: player,
      context_uri: isBreak ? playlists[1] : playlists[0],
    });
    appElements.onload = () => {
      appElements.classList.remove('hidden');
    };
  }

  function toggleShuffle() {
    shuffleState = !shuffleState;
    fetch('https://api.spotify.com/v1/me/player/shuffle' + `?state=${shuffleState}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    (shuffleElement.children[0] as HTMLElement).style.fill = shuffleState ? 'white' : 'staleblues';
  }

  window.onSpotifyWebPlaybackSDKReady = () => {
    console.log('ready');
    player = new Spotify.Player({
      name: 'Pomodorify Web Player',
      getOAuthToken: (callback) => {
        let token = localStorage.getItem('token');
        if (!token) {
          window.location.replace(
            'https://accounts.spotify.com/authorize' +
              '?client_id=be3d4b654a8347b8a805a6802eadce1b' +
              '&response_type=token' +
              `&redirect_uri=${encodeURIComponent(window.location.href)}callback` +
              '&scope=streaming%20user-read-email%20user-read-private%20user-modify-playback-state'
          );
        }
        callback(token);
      },
    });
    player.addListener('ready', ({ device_id }) => {
      player._options.id = device_id;
    });
    player.addListener('authentication_error', () => {
      localStorage.removeItem('token');
      window.location.reload();
    });
    player.addListener('player_state_changed', ({ track_window: { current_track } }) => {
      songImg = current_track.album.images[2].url;
      songName = current_track.name;
      songArtists = '';
      for (let i = 0; i < current_track.artists.length; i++) {
        songArtists += current_track.artists[i].name;
        if (i != current_track.artists.length - 1) {
          songArtists += ', ';
        }
      }
    });
    player.connect();
  };

  if (localStorage.getItem('p1')) {
    playlists[0] = localStorage.getItem('p1');
  }
  if (localStorage.getItem('p2')) {
    playlists[1] = localStorage.getItem('p2');
  }

  library.add(faRandom, faPlay);
  dom.watch();
</script>

<main
  class="antialiased w-full h-full bg-gradient-to-b from-indigo-900
    to-blue-900 text-white p-5"
>
  <div class="w-full text-center text-5xl">
    <span
      class="font-inter font-extrabold relative inline-block before:inline
    before:absolute before:-inset-1 before:-skew-y-3 before:bg-stone-900"
    >
      <span class="relative">Pomodorify</span>
    </span>
  </div>
  <div class="w-full h-full flex items-center justify-center">
    <div
      class="w-full md:w-1/3 bg-gradient-to-t shadow-lg
     from-stone-800 to-stone-900 p-4 font-poppins relative flex flex-col"
    >
      <div>Focus Playlist:</div>
      <input
        type="text"
        bind:value={playlists[0]}
        class="bg-stone-800 shadow-inner w-full text-center
        h-8  mb-4 p-1 focus:outline-none text-stone-500"
      />
      <div>Break Playlist:</div>
      <input
        type="text"
        bind:value={playlists[1]}
        class="bg-stone-800 shadow-inner w-full text-center
        h-8  p-1 focus:outline-none text-stone-500"
      />
      <div bind:this={appElements} class="flex flex-col w-full h-full">
        <hr class="bg-blue-900 h-[3px] border-none my-4 w-full" />
        <div
          bind:this={timerElement}
          class="text-slate-200 text-4xl transition-colors duration-[1500s]
            text-center">{timerTime}</div
        >
        <hr class="bg-blue-900 h-[3px] border-none my-4 w-full" />
        <div class="w-full h-full flex flex-col items-center">
          <span class="text-center flex flex-col items-center justify-center flex-1 h-full
            {songName ? '' : ' invisible'}">
            <img src={songImg} width="150px" height="150px" alt=" Album Cover"/>
            <div class="names my-2">
              <p id="title">{songName}</p>
              <p class="text-xs text-gray-400">{songArtists}</p>
            </div>
          </span>
        </div>
        <div class="text-center text-white drop-shadow-lg cursor-pointer
            active:scale-95 transition-transform duration-75" on:click={start}>
          <span>{buttonText}</span>
          <i class="fa-solid fa-play" />
        </div>
      </div>
    </div>
  </div>
</main>
