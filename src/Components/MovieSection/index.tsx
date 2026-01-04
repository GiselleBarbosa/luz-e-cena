import { FaSearch } from 'react-icons/fa';
import Button from '../Button';
import Fieldset from '../Fieldset';
import InputText from '../InputText';
import styles from './MovieSection.module.css';
import MovieList from '../MovieList';
import { MOVIES_MOCK } from '../../mocks/movies';

const MovieSection = () => {
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText placeholder="Buscar filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>

        <h1 className={styles.titulo}>Em cartaz</h1>
        <MovieList movies={MOVIES_MOCK} />
      </section>
    </main>
  );
};

export default MovieSection;
