import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { photosCache } from './cachefetch';
import { getOverFiveKg } from './cachefetch';

const Cache = () => {
  const dispatch = useDispatch();
  const data = useSelector(getOverFiveKg);

  return (
    <>
      <button onClick={() => dispatch(photosCache())}>Buscar</button>
      {data && (
        <ul>
          {data.map((photo) => (
            <li key={photo.id}>
              {photo.title} | {photo.peso} pounds
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cache;
