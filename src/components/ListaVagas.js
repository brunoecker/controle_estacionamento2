import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../src/styles/style.css'

function ListaVagas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const storedReservas = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(storedReservas);
  }, []);

  const removerReserva = (index) => {
    const updatedReservas = reservas.filter((_, i) => i !== index);
    localStorage.setItem('reservas', JSON.stringify(updatedReservas));
    setReservas(updatedReservas);
    alert('Reserva removida com sucesso!');
  };

  return (
    <div className="container">
      <h1>Listagem de Vagas</h1>
      {reservas.length === 0 ? (
        <p>Nenhuma reserva cadastrada.</p>
      ) : (
        reservas.map((reserva, index) => (
          <div key={index}>
            <p>Placa: {reserva.placa}</p>
            <p>Nome: {reserva.nome}</p>
            <p>Apartamento: {reserva.apartamento}</p>
            <p>Bloco: {reserva.bloco}</p>
            <p>Modelo: {reserva.modelo}</p>
            <p>Cor: {reserva.cor}</p>
            <p>N° vaga: {reserva.vaga}</p>
            <button onClick={() => removerReserva(index)}>Remover</button>
            <hr />
          </div>
        ))
      )}
      <Link to={'/Cadastro'}>Voltar</Link>
    </div>
  );
}

export default ListaVagas;