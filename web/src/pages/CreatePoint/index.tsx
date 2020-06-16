import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet'

import './styles.css';
import logo from '../../assets/logo.svg';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/"><FiArrowLeft />Voltar para Home</Link>
      </header>

      <form action="">
        <h1>Cadrastro do <br /> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione endereço no mapa</span>
          </legend>

          <Map center={[-3.7401007, -38.5706562]} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={[-3.7401007, -38.5706562]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione um UF</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione um cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Lâmpadas" />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Lâmpadas" />
              <span>Lâmpadas</span>
            </li>
            <li className="selected">
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Lâmpadas" />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Lâmpadas" />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Lâmpadas" />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Lâmpadas" />
              <span>Lâmpadas</span>
            </li>
          </ul>

          <button type="submit">Cadastrar ponto de coleta</button>
        </fieldset>
      </form>
    </div>
  )
}

export default CreatePoint;