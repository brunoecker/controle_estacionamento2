import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../src/styles/style.css'

function Cadastro() {

    
  const [formData, setFormData] = useState({
    placa: '',
    nome: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: '',
  });
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const { placa, nome, apartamento, bloco, modelo, cor, vaga } = formData;

    if (!placa || !nome || !apartamento || !bloco || !modelo || !cor || !vaga) {
      alert('Preencha os campos corretamente!');
      return;
    }

    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservas.push(formData);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    alert('Cadastro realizado com sucesso!');

    setSubmittedData(formData);
    console.log(formData.placa, formData.nome, formData.apartamento, formData.bloco, formData.modelo, formData.cor, formData.vaga);
    
  };

  return (
    <div className="container">
      <h1>Cadastro de Reserva de Vaga</h1>
      <label htmlFor="placa">Placa do veículo:</label>
      <input type="text" id="placa" value={formData.placa} onChange={handleChange} required />

      <label htmlFor="nome">Nome do proprietário:</label>
      <input type="text" id="nome" value={formData.nome} onChange={handleChange} required />

      <label htmlFor="apartamento">Número do apartamento:</label>
      <input type="text" id="apartamento" value={formData.apartamento} onChange={handleChange} required />

      <label htmlFor="bloco">Bloco do apartamento:</label>
      <input type="text" id="bloco" value={formData.bloco} onChange={handleChange} required />

      <label htmlFor="modelo">Modelo do veículo:</label>
      <input type="text" id="modelo" value={formData.modelo} onChange={handleChange} required />

      <label htmlFor="cor">Cor do veículo:</label>
      <input type="text" id="cor" value={formData.cor} onChange={handleChange} required />

      <label htmlFor="vaga">Número da vaga de estacionamento:</label>
      <input type="text" id="vaga" value={formData.vaga} onChange={handleChange} required />

      <div className="row-btn">
        <button type="button" onClick={handleSubmit}>Cadastrar</button>
      </div>

      {submittedData && (
        <div className="submitted-data">
          <h2>Dados Cadastrados</h2>
          <p>Placa: {submittedData.placa}</p>
          <p>Nome: {submittedData.nome}</p>
          <p>Apartamento: {submittedData.apartamento}</p>
          <p>Bloco: {submittedData.bloco}</p>
          <p>Modelo: {submittedData.modelo}</p>
          <p>Cor: {submittedData.cor}</p>
          <p>N° vaga: {submittedData.vaga}</p>
          <hr></hr>
          <Link to={"/ListaVagas"}><button><h1>Ir para Listagem</h1></button></Link>
        </div>
      )}
    </div>
  );
}

export default Cadastro;