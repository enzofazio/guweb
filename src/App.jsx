import React from 'react';
import './App.css';

const LibraryItem = ({ image, title, subtitle, type, count, isArtist }) => (
  <div className="library-item">
    <div className={`image-container ${isArtist ? 'circle' : ''}`}>
      <img src={image} alt={title} />
    </div>
    <div className="item-details">
      <h3>{title}</h3>
      <p>
        {type === 'playlist' && <span className="pin">📌</span>}
        {type.charAt(0).toUpperCase() + type.slice(1)} • {count}
      </p>
    </div>
  </div>
);

function App() {
  const data = [
    { id: 1, title: 'Musicas Curtidas', subtitle: '185 músicas', type: 'playlist', count: '185 songs', image: 'https://placehold.co/60x60/6157ff/white?text' },
    { id: 2, title: 'Seus Episodios', subtitle: '3 episodios', type: 'playlist', count: '3 episodes', image: 'https://placehold.co/60x60/006450/white?text' },
    { id: 3, title: 'Negão Original.', subtitle: 'Artista', type: 'artista', count: 'Artista', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT860K85R8mnqCTp0PDLDZ0vSGIgjzBFovs1A&s', isArtist: true },
    { id: 4, title: 'PodPah', subtitle: 'Podpah', type: 'podcast', count: 'Podpah', image: 'https://placehold.co/60x60/fec' },
    { id: 5, title: 'Chatão', subtitle: 'Lelé JP', type: 'album', count: 'Lelé JP', image: 'https://placehold.co/60x60/ddd' },
  ];

  return (
    <div className="spotify-container">
      <header className="header">
        <div className="header-top">
          <div className="profile-pic">A</div>
          <h1>Sua Biblioteca</h1>
          <div className="header-icons">
            <span>🔍</span>
            <span>+</span>
          </div>
        </div>
        <div className="filters">
          <button className="active">Playlists</button>
          <button>Artistas</button>
          <button>Albums</button>
          <button>Podcasts & Shows</button>
        </div>
      </header>

      <div className="sort-bar">
        <span>⇅ Tocado recentemente</span>
        <span>⊞</span>
      </div>

      <main className="library-list">
        {data.map(item => (
          <LibraryItem key={item.id} {...item} />
        ))}
      </main>
    </div>
  );
}

export default App;
