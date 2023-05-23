document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3001/artists')
      .then(response => response.json())
      .then(data => {
        displaySongs(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  function displaySongs(artists) {
    const songGrid = document.getElementById('songGrid');
  
    artists.forEach(artist => {
        
      artist.singles.forEach(single => {
            const songCard = createSongCard(single.song, artist.name);
            songGrid.appendChild(songCard); 
      });
  
      artist.albums.forEach(album => {
        album.songs.forEach(song => {
                const songCard = createSongCard(song, artist.name);
                songGrid.appendChild(songCard);
           
        });
      });
    });
  
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
      filterSongs(searchInput.value.toLowerCase());
    });
  }
  
  function createSongCard(song, artistName) {
    const songCard = document.createElement('div');
    songCard.classList.add('song-card');
  
    const songTitle = document.createElement('h2');
    songTitle.textContent = `${song.title}`;
  
    const artist = document.createElement('p');
    artist.textContent = `Artist: ${artistName}`;
  
    songCard.appendChild(songTitle);
    songCard.appendChild(artist);
  
    songCard.addEventListener('click', function() {
      openSongModal(song.title, artistName);
    });
  
    return songCard;
  }
  
  function openSongModal(songTitle, artistName) {
    const songModal = document.getElementById('songModal');
    const songModalTitle = document.getElementById('songModalTitle');
    const songArtist = document.getElementById('songArtist');
  
    songModalTitle.textContent = songTitle;
    songArtist.textContent = `Artist: ${artistName}`;
  
    songModal.style.display = 'block';
  }
  
  function filterSongs(searchText) {
    const songCards = document.getElementsByClassName('song-card');
  
    Array.from(songCards).forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const artist = card.querySelector('p').textContent.toLowerCase();
  
      if (title.includes(searchText) || artist.includes(searchText)) {
        card.style.display = 'inline-block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  const songModal = document.getElementById('songModal');
  const closeButtons = document.getElementsByClassName('close');
  
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
      songModal.style.display = 'none';
    });
  }
  