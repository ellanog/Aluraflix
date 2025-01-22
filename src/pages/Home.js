import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Categories from '../components/categories';
import EditModal from '../components/EditModal';

function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    axios.get('http://localhost:3000/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.error('Erro ao carregar vídeos:', error));
  };

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <Banner />
      <main>
        <Categories videos={videos} onEdit={handleEdit} />
      </main>
      <Footer />
      <EditModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoData={selectedVideo}
        onUpdate={fetchVideos}
      />
    </>
  );
}

export default Home;
