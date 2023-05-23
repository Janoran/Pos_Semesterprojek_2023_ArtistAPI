document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3001/artists')
      .then(response => response.json())
      .then(data => {
        displayArtists(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  function displayArtists(artists) {
    const artistGrid = document.getElementById('artistGrid');
  
    artists.forEach(artist => {
      const artistCard = createArtistCard(artist);
      artistGrid.appendChild(artistCard);
    });
  }
  
  function createArtistCard(artist) {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');
  
    const artistName = document.createElement('h2');
    artistName.textContent = `${artist.name}`;
  
    const artistGenre = document.createElement('p');
    artistGenre.textContent = `Genre: ${artist.genre}`;
  
    const albumList = document.createElement('ul');
    albumList.classList.add('album-list');
    artist.albums.forEach(album => {
      const albumItem = document.createElement('li');
      albumItem.textContent = album.name;
      albumItem.addEventListener('click', function() {
        openAlbumModal(album);
      });
      albumList.appendChild(albumItem);
    });
  
    const singleList = document.createElement('ul');
    singleList.classList.add('single-list');
    artist.singles.forEach(single => {
      const singleItem = document.createElement('li');
      singleItem.textContent = single.name;
      singleItem.addEventListener('click', function() {
        openSingleModal(single);
      });
      singleList.appendChild(singleItem);
    });
  
    artistCard.appendChild(artistName);
    artistCard.appendChild(artistGenre);
    artistCard.appendChild(document.createTextNode('List of Albums:'));
    artistCard.appendChild(albumList);
    artistCard.appendChild(document.createTextNode('List of Singles:'));
    artistCard.appendChild(singleList);
  
    return artistCard;
  }
  
  function openAlbumModal(album) {
    const albumModal = document.getElementById('albumModal');
    const albumModalTitle = document.getElementById('albumModalTitle');
    const albumSongs = document.getElementById('albumSongs');
  
    albumModalTitle.textContent = album.name;
    albumSongs.innerHTML = '';
  
    album.songs.forEach(song => {
      const songItem = document.createElement('li');
      songItem.textContent = song.title;
      albumSongs.appendChild(songItem);
    });
  
    albumModal.style.display = 'block';
  }
  
  function openSingleModal(single) {
    const singleModal = document.getElementById('singleModal');
    const singleModalTitle = document.getElementById('singleModalTitle');
    const singleSong = document.getElementById('singleSong');
  
    singleModalTitle.textContent = single.name;
    singleSong.textContent = single.song.title;
  
    singleModal.style.display = 'block';
  }
  
  const albumModal = document.getElementById('albumModal');
  const singleModal = document.getElementById('singleModal');
  const closeButtons = document.getElementsByClassName('close');
  
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
      albumModal.style.display = 'none';
      singleModal.style.display = 'none';
    });
  }
  