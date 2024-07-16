import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { IoIosLink } from 'react-icons/io';
import { useCinemaVision } from './use-cinema-vision';
import { IoIosEyeOff } from 'react-icons/io';
import clsx from 'clsx';
import { memo } from 'react';

const Cinema = memo(({ cinema, classNames }) => {
  const {
    content,
    setShowId,
    setShowAdult,
    setShowBelongs,
    setShowBudget,
    setShowGenres,
    setShowHomepage,
    setShowImdbId,
    setShowOriginalLanguage,
    setShowOriginalTitle,
    setShowOverview,
    setShowPopularity,
    setShowProductionCompanies,
    setShowProductionCountries,
    setShowRevenue,
    setShowRuntime,
    setShowSpokenLanguages,
    setShowStatus,
    setShowTagline,
    setShowTitle,
    setShowVoteAverage,
    setShowVoteCount,
    setShowReleaseDate,
  } = useCinemaVision();

  return (
    <ul
      className={clsx(
        styles.root,
        classNames?.map((style) => styles[style])
      )}
    >
      <li
        onClick={() => {
          setShowId(!content.id);
        }}
      >
        id: {content.id ? cinema.id : <IoIosEyeOff />}
      </li>
      <li
        onClick={() => {
          setShowAdult(!content.adult);
        }}
      >
        adults:{' '}
        {content.adult ? cinema.adults ? cinema.adults : `-` : <IoIosEyeOff />}
      </li>
      <li
        onClick={() => {
          setShowBelongs(!content.belongs);
        }}
      >
        belongs to collection:{' '}
        {content.belongs ? (
          cinema.belongs_to_collection ? (
            'Yes'
          ) : (
            'No'
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowBudget(!content.budget);
        }}
      >
        budget:{' '}
        {content.budget ? cinema.budget ? cinema.budget : `-` : <IoIosEyeOff />}
      </li>
      <li
        onClick={() => {
          setShowGenres(!content.genres);
        }}
      >
        genres:{' '}
        {content.genres ? (
          cinema.genres?.map((genre) => genre.name).join(', ')
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowHomepage(!content.homepage);
        }}
      >
        homepage:
        {content.homepage ? (
          cinema.homepage ? (
            <Link className={styles.link} to={cinema.homepage}>
              <IoIosLink />
            </Link>
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowImdbId(!content.imdbId);
        }}
      >
        imdb_id:{' '}
        {content.imdbId ? (
          cinema.imdb_id ? (
            cinema.imdb_id
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowOriginalLanguage(!content.originalLanguage);
        }}
      >
        original language:{' '}
        {content.originalLanguage ? (
          cinema.original_language ? (
            cinema.original_language
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowOriginalTitle(!content.originalTitle);
        }}
      >
        original title:{' '}
        {content.originalTitle ? (
          cinema.original_title ? (
            cinema.original_title
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowOverview(!content.overview);
        }}
      >
        overview:{' '}
        {content.overview ? (
          cinema.overview ? (
            cinema.overview
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowPopularity(!content.popularity);
        }}
      >
        popularity:{' '}
        {content.popularity ? (
          cinema.popularity ? (
            cinema.popularity
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowProductionCompanies(!content.productionCompanies);
        }}
      >
        production companies:{' '}
        {content.productionCompanies ? (
          cinema.production_companies
            ?.map((production_company) => production_company.name)
            .join(', ')
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowProductionCountries(!content.productionCountries);
        }}
      >
        production countries:{' '}
        {content.productionCountries ? (
          cinema.production_countries
            ?.map((production_country) => production_country.name)
            .join(', ')
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowReleaseDate(!content.releaseDate);
        }}
      >
        release_date:{' '}
        {content.releaseDate ? (
          cinema.release_date ? (
            cinema.release_date
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowRevenue(!content.revenue);
        }}
      >
        revenue:{' '}
        {content.revenue ? (
          cinema.revenue ? (
            cinema.revenue
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowRuntime(!content.runtime);
        }}
      >
        runtime:{' '}
        {content.runtime ? (
          cinema.runtime ? (
            cinema.runtime
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowSpokenLanguages(!content.spokenLanguages);
        }}
      >
        spoken languages:{' '}
        {content.spokenLanguages ? (
          cinema.spoken_languages
            ?.map((spoken_language) => spoken_language.name)
            .join(', ')
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowStatus(!content.status);
        }}
      >
        status:{' '}
        {content.status ? cinema.status ? cinema.status : `-` : <IoIosEyeOff />}
      </li>
      <li
        onClick={() => {
          setShowTagline(!content.tagline);
        }}
      >
        tagline:{' '}
        {content.tagline ? (
          cinema.tagline ? (
            cinema.tagline
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowTitle(!content.title);
        }}
      >
        title:{' '}
        {content.title ? cinema.title ? cinema.title : `-` : <IoIosEyeOff />}
      </li>
      <li
        onClick={() => {
          setShowVoteAverage(!content.voteAverage);
        }}
      >
        vote average:{' '}
        {content.voteAverage ? (
          cinema.vote_average ? (
            cinema.vote_average
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
      <li
        onClick={() => {
          setShowVoteCount(!content.voteCount);
        }}
      >
        vote count:{' '}
        {content.voteCount ? (
          cinema.vote_count ? (
            cinema.vote_count
          ) : (
            `-`
          )
        ) : (
          <IoIosEyeOff />
        )}
      </li>
    </ul>
  );
});

export default Cinema;
