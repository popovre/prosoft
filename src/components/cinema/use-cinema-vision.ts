import { useCallback } from 'react';
import { useReducer } from 'react';

const INITIAL_STATE = {
  id: true,
  adult: true,
  belongs: true,
  budget: true,
  genres: true,
  homepage: true,
  imdbId: true,
  originalLanguage: true,
  originalTitle: true,
  overview: true,
  popularity: true,
  productionCompanies: true,
  productionCountries: true,
  releaseDate: true,
  revenue: true,
  runtime: true,
  spokenLanguages: true,
  status: true,
  tagline: true,
  title: true,
  voteAverage: true,
  voteCount: true,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setShowId':
      return {
        ...state,
        id: payload,
      };
    case 'setShowAdult':
      return {
        ...state,
        adult: payload,
      };
    case 'setShowBelongs':
      return {
        ...state,
        belongs: payload,
      };
    case 'setShowBudget':
      return {
        ...state,
        budget: payload,
      };
    case 'setShowGenres':
      return {
        ...state,
        genres: payload,
      };
    case 'setShowHomepage':
      return {
        ...state,
        homepage: payload,
      };
    case 'setShowImdbId':
      return {
        ...state,
        imdbId: payload,
      };
    case 'setShowOriginalLanguage':
      return {
        ...state,
        originalLanguage: payload,
      };
    case 'setShowOriginalTitle':
      return {
        ...state,
        originalTitle: payload,
      };
    case 'setShowOverview':
      return {
        ...state,
        overview: payload,
      };
    case 'setShowPopularity':
      return {
        ...state,
        popularity: payload,
      };
    case 'setShowProductionCompanies':
      return {
        ...state,
        productionCompanies: payload,
      };
    case 'setShowProductionCountries':
      return {
        ...state,
        productionCountries: payload,
      };
    case 'setShowReleaseDate':
      return {
        ...state,
        releaseDate: payload,
      };
    case 'setShowRevenue':
      return {
        ...state,
        revenue: payload,
      };
    case 'setShowRuntime':
      return {
        ...state,
        runtime: payload,
      };
    case 'setShowSpokenLanguages':
      return {
        ...state,
        spokenLanguages: payload,
      };
    case 'setShowStatus':
      return {
        ...state,
        status: payload,
      };
    case 'setShowTagline':
      return {
        ...state,
        tagline: payload,
      };
    case 'setShowTitle':
      return {
        ...state,
        title: payload,
      };
    case 'setShowVoteAverage':
      return {
        ...state,
        voteAverage: payload,
      };
    case 'setShowVoteCount':
      return {
        ...state,
        voteCount: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const useCinemaVision = (initialState = INITIAL_STATE) => {
  const [content, dispatch] = useReducer(reducer, initialState);

  const setShowId = useCallback((status) => {
    dispatch({ type: 'setShowId', payload: status });
  }, []);

  const setShowAdult = useCallback((status) => {
    dispatch({ type: 'setShowAdult', payload: status });
  }, []);

  const setShowBelongs = useCallback((status) => {
    dispatch({ type: 'setShowBelongs', payload: status });
  }, []);

  const setShowBudget = useCallback((status) => {
    dispatch({ type: 'setShowBudget', payload: status });
  }, []);
  const setShowGenres = useCallback((status) => {
    dispatch({ type: 'setShowGenres', payload: status });
  }, []);
  const setShowHomepage = useCallback((status) => {
    dispatch({ type: 'setShowHomepage', payload: status });
  }, []);
  const setShowImdbId = useCallback((status) => {
    dispatch({ type: 'setShowImdbId', payload: status });
  }, []);
  const setShowOriginalLanguage = useCallback((status) => {
    dispatch({ type: 'setShowOriginalLanguage', payload: status });
  }, []);
  const setShowOriginalTitle = useCallback((status) => {
    dispatch({ type: 'setShowOriginalTitle', payload: status });
  }, []);
  const setShowOverview = useCallback((status) => {
    dispatch({ type: 'setShowOverview', payload: status });
  }, []);
  const setShowPopularity = useCallback((status) => {
    dispatch({ type: 'setShowPopularity', payload: status });
  }, []);
  const setShowProductionCompanies = useCallback((status) => {
    dispatch({ type: 'setShowProductionCompanies', payload: status });
  }, []);
  const setShowProductionCountries = useCallback((status) => {
    dispatch({ type: 'setShowProductionCountries', payload: status });
  }, []);
  const setShowReleaseDate = useCallback((status) => {
    dispatch({ type: 'setShowReleaseDate', payload: status });
  }, []);
  const setShowRevenue = useCallback((status) => {
    dispatch({ type: 'setShowRevenue', payload: status });
  }, []);
  const setShowRuntime = useCallback((status) => {
    dispatch({ type: 'setShowRuntime', payload: status });
  }, []);
  const setShowSpokenLanguages = useCallback((status) => {
    dispatch({ type: 'setShowSpokenLanguages', payload: status });
  }, []);
  const setShowStatus = useCallback((status) => {
    dispatch({ type: 'setShowStatus', payload: status });
  }, []);
  const setShowTagline = useCallback((status) => {
    dispatch({ type: 'setShowTagline', payload: status });
  }, []);
  const setShowTitle = useCallback((status) => {
    dispatch({ type: 'setShowTitle', payload: status });
  }, []);
  const setShowVoteAverage = useCallback((status) => {
    dispatch({ type: 'setShowVoteAverage', payload: status });
  }, []);
  const setShowVoteCount = useCallback((status) => {
    dispatch({ type: 'setShowVoteCount', payload: status });
  }, []);

  return {
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
  };
};
