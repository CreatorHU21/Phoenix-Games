
document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("sherwood.ogg");

    audio.loop = true;
    audio.preload = "metadata";

    const savedVolume = localStorage.getItem("phoenixMusicVolume");
    audio.volume = savedVolume !== null
        ? Math.max(0, Math.min(1, Number(savedVolume) || 0))
        : 0.20;

    const player = document.createElement("div");
    player.id = "phoenix-music";

    player.innerHTML = `
        <div class="music-header">
            <span>♫ PHOENIX MUSIC</span>
        </div>

        <div class="music-track">
            Sherwood - zesona
        </div>

        <div class="music-controls">
            <button id="music-play" type="button">▶</button>

            <span>🔊</span>

            <input id="music-volume"
                type="range"
                min="0"
                max="100"
                value="${Math.round(audio.volume * 100)}">

            <span id="music-percent">
                ${Math.round(audio.volume * 100)}%
            </span>
        </div>

        <div id="music-status"></div>
    `;

    document.body.appendChild(player);

    const playButton = document.getElementById("music-play");
    const volumeSlider = document.getElementById("music-volume");
    const volumePercent = document.getElementById("music-percent");
    const status = document.getElementById("music-status");

    let playbackError = false;

    function updatePlayer() {
        const english = document.documentElement.lang === "en";

        playButton.textContent = audio.paused ? "▶" : "❚❚";

        playButton.setAttribute("aria-label",
            audio.paused
                ? (english ? "Play music" : "Zene indítása")
                : (english ? "Pause music" : "Zene szüneteltetése")
        );

        volumeSlider.setAttribute("aria-label",
            english ? "Volume" : "Hangerő"
        );

        status.textContent = playbackError
            ? (english ? "Playback unavailable" : "Lejátszási hiba")
            : audio.paused
                ? (english ? "Paused" : "Szüneteltetve")
                : (english ? "Now playing" : "Lejátszás folyamatban");
    }

    playButton.addEventListener("click", async () => {
        playbackError = false;

        if (audio.paused) {
            try {
                await audio.play();
            } catch (error) {
                playbackError = true;
            }
        } else {
            audio.pause();
        }

        updatePlayer();
    });

    volumeSlider.addEventListener("input", () => {
        audio.volume = Number(volumeSlider.value) / 100;

        volumePercent.textContent = volumeSlider.value + "%";

        localStorage.setItem("phoenixMusicVolume", audio.volume);
    });

    audio.addEventListener("play", updatePlayer);
    audio.addEventListener("pause", updatePlayer);

    new MutationObserver(updatePlayer).observe(
        document.documentElement,
        {
            attributes: true,
            attributeFilter: ["lang"]
        }
    );

    updatePlayer();
});
