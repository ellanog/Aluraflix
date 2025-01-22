import React, { useState } from 'react';
import EditModal from './EditModal';
import axios from 'axios';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const closeModal = () => setIsModalOpen(false);

  const fetchVideos = () => {
    // Lógica para buscar os vídeos
  };

  return (
    <header>
      <h1>Aluraflix</h1>
      <button onClick={() => setIsModalOpen(true)}>Editar Vídeo</button>
      <EditModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoData={selectedVideo}
        onSave={(updatedVideo) => {
          axios
            .put(`http://localhost:3000/videos/${updatedVideo.id}`, updatedVideo)
            .then(() => fetchVideos())
            .catch((error) => console.error(error));
        }}
      />
    </header>
  );
}

export default Header;
