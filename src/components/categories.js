import React from 'react';
import './categories.css';

function Categories({ videos, onEdit }) {
  return (
    <section className="categories">
      {videos.map(video => (
        <div key={video.id} className="video-card">
          <img src={video.image} alt={video.title} className="video-card-image" />
          <h3 className="video-card-title">{video.title}</h3>
          <button onClick={() => onEdit(video)}>Editar</button>
        </div>
      ))}
    </section>
  );
  const Categories = ({ videos }) => {
    if (!videos || videos.length === 0) {
      return <p>Sem vídeos para exibir</p>;
    }
  
    return (
      <div>
        {videos.map(video => (
          <div key={video.id}>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    );
  };
}

export default Categories;
