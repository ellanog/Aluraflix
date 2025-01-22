import React, { useState } from 'react';
import axios from 'axios';
import './EditModal.css';

function EditModal({ isOpen, onClose, videoData, onSave }) {
    const [formData, setFormData] = useState(videoData || {});
  
    if (!isOpen) return null;
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSave = (event) => {
      event.preventDefault();
      if (onSave) {
        onSave(formData);
      }
      onClose();
    };
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Editar Card</h2>
          <form onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                name="category"
                value={formData.category || ''}
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
                value={formData.image || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                value={formData.description || ''}
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
                value={formData.url || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="modal-actions">
              <button type="submit">Salvar</button>
              <button type="button" onClick={onClose}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
export default EditModal;
