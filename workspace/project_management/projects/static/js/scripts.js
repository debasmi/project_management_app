document.addEventListener('DOMContentLoaded', function() {
    const shuffleButton = document.querySelector('.shuffle-button');
    const playAllButton = document.querySelector('.play-all-button');
    const playPauseButton = document.querySelector('#play-pause-button');
    const trackList = document.querySelector('.track-list tbody');
    const audioTracks = Array.from(document.querySelectorAll('audio'));
    let currentTrackIndex = 0;
    let isPlaying = false;

    function shuffleArray(array) 
    {
        for (let i = array.length - 1; i > 0; i--) 
        {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffleTracks() 
    {
        const shuffledTracks = shuffleArray(Array.from(trackList.querySelectorAll('tr')));
        trackList.innerHTML = '';
        shuffledTracks.forEach(function(track) 
        {
            trackList.appendChild(track);
        });
    }

    function playTrack(index) 
    {
        if (index >= 0 && index < audioTracks.length) 
        {
            console.log("Playing track index:", index);
            audioTracks[index].play();
            audioTracks[index].addEventListener('ended', playNextTrack);
            isPlaying = true;
        }
    }

    function playNextTrack() 
    {
        currentTrackIndex++;
        if (currentTrackIndex < audioTracks.length) 
        {
            playTrack(currentTrackIndex);
        }
        else 
        {
            currentTrackIndex = 0;
            isPlaying = false;
            playPauseButton.textContent = 'Play';
        }
    }

    function playAllTracks() 
    {
        currentTrackIndex = 0;
        console.log("Play All =>", audioTracks.length);
        if (audioTracks.length > 0) 
        {
            playTrack(currentTrackIndex);
        }
    }

    playPauseButton.addEventListener('click', function() {
        if (isPlaying) 
        {
            audioTracks[currentTrackIndex].pause();
            isPlaying = false;
            playPauseButton.textContent = 'Play';
        } 
        else
        {
            playTrack(currentTrackIndex);
            playPauseButton.textContent = 'Pause';
        }
    });

    shuffleButton.addEventListener('click', shuffleTracks);

    playAllButton.addEventListener('click', playAllTracks);
});