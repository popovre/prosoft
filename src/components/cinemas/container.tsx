import { lazy, Suspense, useCallback, useMemo } from 'react';
import Loader from '../loader/component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCinemas } from '../../redux/cinema/thunks/get-cinemas';
import { cinemaSelectors, getLoadingState } from '../../redux/cinema';
import { selectOptions } from '../../redux/query-option';
import { selectSort } from '../../redux/sort';
import { getViewState } from '../../redux/view';
const LazyCinemas = lazy(() => import('./component'));

const CinemasContainer = () => {
  const [pagesQty, setPagesQty] = useState(0);
  const [page, setPage] = useState(1);

  const cinemas = useSelector((state) => cinemaSelectors.selectAll(state));
  const cinemasLength = cinemas.length;
  const options = useSelector((state) => selectOptions(state));
  const sort = useSelector((state) => selectSort(state));
  const view = useSelector((state) => getViewState(state));
  const loadingState = useSelector((state) => getLoadingState(state));

  const getSortedArray = useCallback(
    (arrayToSort) => {
      if (sort.direction === 'asc') {
        return arrayToSort.sort((a, b) =>
          a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
        );
      }
      return arrayToSort.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
      );
    },
    [sort.direction, sort.keyToSort]
  );

  const filteredCinemas = useMemo(
    () => getSortedArray([...cinemas]),
    [cinemas, getSortedArray]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(getCinemas(options));

    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort();
    };
  }, [options, dispatch]);

  useEffect(() => {
    setPagesQty(Math.ceil(cinemasLength / 20));
    if (page > pagesQty) {
      setPage(1);
    }
  }, [cinemasLength, page, pagesQty]);

  return (
    <>
      {loadingState === 'pending' ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <LazyCinemas
            view={view}
            pagesQty={pagesQty}
            page={page}
            setPage={setPage}
            cinemas={filteredCinemas}
            cinemasLength={cinemasLength}
          />
        </Suspense>
      )}
    </>
  );
};

export default CinemasContainer;
