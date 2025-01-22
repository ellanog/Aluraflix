import React from 'react';
import './VideoCard.css'; // Arquivo de estilos do VideoCard

function VideoCard({ video, onEdit, onDelete }) {
  return (
    <div className="video-card">
      <img className="video-image" src={video.image} alt={video.title} />
      <h3 className="video-title">{video.title}</h3>
      <div className="card-actions">
        <button className="edit-btn" onClick={() => onEdit(video)}>Editar</button>
        <button className="delete-btn" onClick={() => onDelete(video.id)}>Excluir</button>
      </div>
    </div>
  );
}

export default VideoCard;
