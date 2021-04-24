<script lang="ts" defer>
    import { metatags } from '@roxi/routify';
    import Serviceworker from './Serviceworker.svelte';
    metatags.title = 'Pomofy';
    metatags.description = 'Pomodoro Timer with Spotify Integration';
    let timerElement: HTMLElement;
    let timerColorHue = 125;
    let timerTime = '25:00';
    let playCommand = 'Start';
    let timer = 1500;
    let player: Spotify.SpotifyPlayer;
    let timerInterval: number;
    let colorInterval: number;
    let isBreak = false;
    let playlists = new Array<string>();
    function URLToURI(url: string) {
        return url
            .replace(/http?s:\/\/open./, '')
            .replace('.com', '')
            .replaceAll('/', ':')
            .split('?')[0];
    }
    function changeHue() {
        timerColorHue--;
        timerElement.style.color = `hsl(${timerColorHue}, 100%, 50%)`;
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
    function pomoButtonPress() {
        if (playlists == []) return;
        for (let i = 0; i < 2; i++) {
            if (playlists[i].includes('.com')) {
                playlists[i] = URLToURI(playlists[i]);
            }
        }
        if (timerInterval) {
            playCommand = 'Start';
            player.pause();
            clearInterval(timerInterval);
            clearInterval(colorInterval);
            timerInterval = null;
            return;
        }
        playCommand = 'Stop';
        timerInterval = setInterval(() => {
            if (timer == 0) {
                clearInterval(colorInterval);
                timerColorHue = 125;
                isBreak = !isBreak;
                timer = isBreak ? 300 : 1500;
                colorInterval = setInterval(changeHue, isBreak ? 2400 : 12000);
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
        colorInterval = setInterval(changeHue, 12000);
        if (timer < 1500) {
            player.resume();
            return;
        }
        play({
            playerInstance: player,
            context_uri: isBreak ? playlists[1] : playlists[0],
        });
    }
    window.onSpotifyWebPlaybackSDKReady = () => {
        player = new Spotify.Player({
            name: 'Pomofy',
            getOAuthToken: (callback) => {
                let token = localStorage.getItem('token');
                if (!token) {
                    window.location.replace(
                        'https://accounts.spotify.com/authorize' +
                            '?client_id=be3d4b654a8347b8a805a6802eadce1b' +
                            '&response_type=token' +
                            '&redirect_uri=http://localhost:5000/callback' +
                            '&scope=streaming%20user-read-email%20user-read-private'
                    );
                }
                callback(token);
            },
        });
        player.addListener('ready', ({ device_id }) => {
            console.log(device_id);
            player._options.id = device_id;
        });
        player.addListener('authentication_error', () => {
            localStorage.removeItem('token');
            window.location.reload();
        });
        player.connect();
    };
</script>

<h1 id="pomo">Pomo<span id="fy">fy</span></h1>
<main>
    <p id="timer" bind:this={timerElement}>{timerTime}</p>
    <input type="text" placeholder="Focus Playlist" bind:value={playlists[0]} />
    <input type="text" placeholder="Break Playlist" bind:value={playlists[1]} />
    <div id="start-stop">
        <button id="start" on:click={pomoButtonPress}>{playCommand}</button>
    </div>
    <script src="https://sdk.scdn.co/spotify-player.js"></script>
</main>
<Serviceworker />

<style lang="scss">
    h1,
    p {
        margin: auto;
        padding: auto;
        color: white;
        font-size: 5em;
        align-self: start;
    }
    h1 {
        #fy {
            color: aquamarine;
        }
        &#pomo {
            height: 50%;
        }
    }
    main {
        width: min(500px, 100%);
        background: rgba($color: black, $alpha: 0.2);
        border-radius: 15px;
        padding: 50px 50px 0 50px;
        color: white;
        p {
            color: hsl(125, 100%, 50%);
            margin-bottom: 25px;
        }
        button {
            margin: 25px 0 25px 0;
            border: none;
            outline: none;
            background: white;
            font-size: 2rem;
            padding: 5px;
            border-radius: 5px;
            transition: transform 200ms;
            &:hover {
                cursor: pointer;
                transform: scale(1.1);
            }
        }
        input {
            border-radius: 5px;
            border: none;
            outline: none;
            background-color: slateblue;
            color: white;
            margin: 5px;
            padding: 5px;
            text-align: center;
            font-size: 2em;
            &:focus {
                &::placeholder {
                    color: transparent;
                }
            }
            &::placeholder {
                color: white;
            }
        }
    }
</style>
