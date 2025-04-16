import React, { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={'/marvel'} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        {/* HERO IMAGE */}
        <img
          src={`https://raw.githubusercontent.com/OscarFDiaz/react-heroes-app/gh-pages/heroes/${id}.jpg`}
          alt={hero.superhero}
          className=" card-img animate__animated animate__fadeInLeft"
        />
      </div>
      {/* HERO DATA */}
      <div className="heroData__page col-8 position-relative">
        <h3 className="mb-4">{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-dark">
            <b>Alter ego:</b>
            <br />
            {hero.alter_ego}
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>Publisher</b>
            <br /> {hero.publisher}
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>First appearance</b>
            <br /> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button
          style={{ marginBottom: 16 }}
          className="btn btn-light position-absolute bottom-0"
          onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
