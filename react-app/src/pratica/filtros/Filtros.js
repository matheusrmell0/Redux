import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filtros.module.css';
import { filterData, selectUniqueColors } from './products';

const Filtros = () => {
  const color = useSelector(selectUniqueColors);
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');
  const [selectedColors, setSelectedColors] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(filterData({ name: 'colors', value: selectedColors }));
  }, [selectedColors, dispatch]);

  React.useEffect(() => {
    dispatch(
      filterData({
        name: 'prices',
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
      }),
    );
  }, [minPrice, maxPrice, dispatch]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => color !== target.value),
      );
    }
  }

  function handleChecked(color) {
    return selectedColors.includes(color);
  }

  return (
    <div className={styles.filter}>
      <input
        type="number"
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
        placeholder="min"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
        placeholder="max"
      />
      {color.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            onChange={handleChange}
            checked={handleChecked(color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default Filtros;
