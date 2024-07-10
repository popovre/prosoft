import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { IoIosLink } from 'react-icons/io';

const Cinema = ({ cinema }) => {
  return (
    <div className={styles.root}>
      <p>id: {cinema.id}</p>
      <p>adults: {cinema.adults ? cinema.adults : `-`}</p>
      <p>
        belongs to collection: {cinema.belongs_to_collection ? 'Yes' : 'No'}
      </p>
      <p>budget: {cinema.budget ? cinema.budget : `-`}</p>
      <p>genres: {cinema.genres?.map((genre) => genre.name).join(', ')}</p>
      <p>
        homepage:
        {cinema.homepage ? (
          <Link to={cinema.homepage}>
            <IoIosLink />
          </Link>
        ) : (
          `-`
        )}
      </p>
      <p>imdb_id: {cinema.imdb_id ? cinema.imdb_id : `-`}</p>
      <p>
        original language:{' '}
        {cinema.original_language ? cinema.original_language : `-`}
      </p>
      <p>
        original title: {cinema.original_title ? cinema.original_title : `-`}
      </p>
      <p>overview: {cinema.overview}</p>
      <p>popularity: {cinema.popularity}</p>
      <p>
        production companies:{' '}
        {cinema.production_companies
          ?.map((production_company) => production_company.name)
          .join(', ')}
      </p>
      <p>
        production countries:{' '}
        {cinema.production_countries
          ?.map((production_country) => production_country.name)
          .join(', ')}
      </p>
      <p>revenue: {cinema.revenue ? cinema.revenue : `-`}</p>
      <p>runtime: {cinema.runtime ? cinema.runtime : `-`}</p>
      <p>
        spoken languages:{' '}
        {cinema.spoken_languages
          ?.map((spoken_language) => spoken_language.name)
          .join(', ')}
      </p>
      <p>status: {cinema.status ? cinema.status : `-`}</p>
      <p>tagline: {cinema.tagline ? cinema.tagline : `-`}</p>
      <p>title: {cinema.title ? cinema.title : `-`}</p>
      <p>vote average: {cinema.vote_average ? cinema.vote_average : `-`}</p>
      <p>vote count: {cinema.vote_count ? cinema.vote_count : `-`}</p>
    </div>
  );
};

export default Cinema;
