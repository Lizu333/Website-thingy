const cover = document.getElementById("vinyl-cover");
const vinyl = document.querySelector(".vinyl");
const songs = document.querySelectorAll(".song-card");

const defaultCover = cover.src;

songs.forEach(song => {
    song.addEventListener("mouseenter", () => {
        cover.style.opacity = "0";

        setTimeout(() => {
            cover.src = song.dataset.cover;
            cover.style.opacity = "1";
        }, 150);

        vinyl.style.animationDuration = "2s";
    });

    song.addEventListener("mouseleave", () => {
        cover.style.opacity = "0";

        setTimeout(() => {
            cover.src = defaultCover;
            cover.style.opacity = "1";
        }, 150);

        vinyl.style.animationDuration = "10s";
    });
});


