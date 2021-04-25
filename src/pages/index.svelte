<script lang="ts" defer>
    import { metatags } from '@roxi/routify';
    import { slide } from 'svelte/transition';
    import { faRandom } from '@fortawesome/free-solid-svg-icons/faRandom';
    import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
    import Icon from 'fa-svelte';
    metatags.title = 'Pomofy';
    metatags.description = 'Pomodoro Timer with Spotify Integration';
    metatags.viewport = 'width=device-width, initial-scale=1.0';
    let timerElement: HTMLElement;
    let shuffleElement: HTMLElement;
    let songImg: string, songName: string, songArtists: string, timerTime: string;
    let isBreak: boolean, ready: boolean, shuffleState: boolean;
    let timerInterval: number, colorInterval: number;
    let timerColorHue = 125;
    let timer = 1500;
    let playCommand = 'START';
    let player: Spotify.SpotifyPlayer;
    let playlists = new Array<string>();
    isBreak = ready = shuffleState = false;
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
    function pomoButtonPress() {
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
            playCommand = 'START';
            player.pause();
            clearInterval(timerInterval);
            clearInterval(colorInterval);
            timerInterval = null;
            return;
        }
        playCommand = 'STOP';
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
        player = new Spotify.Player({
            name: 'Pomofy',
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
            ready = true;
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
</script>

<div id="title">
    <h1 id="pomo">
        Pomo<span id="fy">fy</span>
    </h1>
    <a href="https://github.com/euromoon/Pomofy" target="_blank">
        <Icon class="git-icon" icon={faGithub} />
    </a>
</div>
<main>
    <p id="timer" bind:this={timerElement}>{timerTime}</p>
    <input type="text" placeholder="Focus Playlist" bind:value={playlists[0]} />
    <input type="text" placeholder="Break Playlist" bind:value={playlists[1]} />
    <div id="start-stop">
        <button id="start" on:click={pomoButtonPress} disabled={!ready}>{playCommand}</button>
    </div>
    {#if timer < 1500}
        <div class="song-info" transition:slide>
            <img src={songImg} width="20%" height="auto" alt="Album Cover" />
            <div class="names">
                <p id="title">{songName}</p>
                <p>{songArtists}</p>
            </div>
            <div class="shuffle-toggle" on:click={toggleShuffle} bind:this={shuffleElement}>
                <Icon class="shuffle-icon{shuffleState ? ' active ' : ''}" icon={faRandom} />
            </div>
        </div>
    {/if}
    <script src="https://sdk.scdn.co/spotify-player.js" defer></script>
</main>

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
            color: palegreen;
        }
        &#pomo {
            height: 50%;
        }
    }
    main {
        width: min(500px, 100%);
        background: rgba($color: black, $alpha: 0.2);
        border-radius: 15px 15px 0 0;
        padding: 50px 50px 0 50px;
        color: white;
        position: relative;
        p {
            color: hsl(125, 70%, 65%);
            margin-bottom: 25px;
        }
        button {
            margin: 25px 0 25px 0;
            border: none;
            outline: none;
            background: white;
            color: slateblue;
            font-size: 1.2rem;
            font-weight: 800;
            padding: 10px;
            border-radius: 5px;
            transition: transform 200ms;
            box-shadow: -3px 3px 0 rgba($color: black, $alpha: 0.2);
            &:hover {
                cursor: pointer;
                transform: scale(1.1);
            }
            &:active {
                animation: click 200ms;
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
        .song-info {
            background: rgba($color: black, $alpha: 0.3);
            border-radius: 0 0 15px 15px;
            display: flex;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            transform: translateY(100%);
            padding: 5px;
            box-sizing: border-box;
            img {
                justify-self: start;
                border-radius: 15px;
            }
            p {
                text-align: left;
                width: 100%;
                color: white;
                font-size: 1em;
                margin: 0 0 0 5%;
            }
            .names {
                width: 100%;
                overflow-x: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                p#title {
                    font-size: 1.3em;
                }
            }
            div :global(.shuffle-icon) {
                font-size: 2em;
                color: slateblue;
                &.active {
                    color: white;
                }
            }
        }
        .shuffle-toggle {
            position: absolute;
            bottom: 0;
            right: 0;
            transition: transform 200ms;
            margin: 0 2% 1% 0;
            &:hover {
                cursor: pointer;
                transform: scale(1.1);
            }
            &:active {
                animation: click 200ms;
            }
        }
    }
    @keyframes click {
        0% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.1);
        }
    }
</style>
