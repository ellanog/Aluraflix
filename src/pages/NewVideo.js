import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import './NewVideo.css';

function NewVideo() {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Frontend',
    image: '',
    description: '',
    url: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Faz a requisição POST para criar um novo vídeo
    axios.post('http://localhost:3000/videos', formData)
      .then(() => {
        alert('Vídeo adicionado com sucesso!');
        setFormData({ title: '', category: 'Frontend', image: '', description: '', url: '' });
      })
      .catch((error) => {
        console.error('Erro ao adicionar vídeo:', error);
        alert('Erro ao adicionar vídeo. Tente novamente.');
      });
  };

  return (
    <>
      <Header />
      <main className="new-video">
        <h1>Novo Vídeo</h1>
        <form onSubmit={handleSubmit} className="new-video-form">
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Inovação">Inovação</option>
              <option value="Gestão">Gestão</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">URL da Imagem</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL do Vídeo</label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Salvar</button>
            <button type="reset" onClick={() => setFormData({ title: '', category: 'Frontend', image: '', description: '', url: '' })}>
              Limpar
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default NewVideo;
