import { lazy, Suspense, useCallback, useMemo } from 'react';
import Loader from '../loader/component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCinemas } from '../../redux/cinema/thunks/get-cinemas';
import { cinemaSelectors } from '../../redux/cinema';
import { selectIsLoading } from '../../redux/ui/request';
import { selectOptions } from '../../redux/query-option';
import { selectSort } from '../../redux/sort';
const LazyCinemas = lazy(() => import('./component'));

const CinemasContainer = () => {
  const [cinemasRequestId, setCinemaRequestId] = useState(0);
  const [pagesQty, setPagesQty] = useState(0);
  const [page, setPage] = useState(1);

  const cinemas = useSelector((state) => cinemaSelectors.selectAll(state));
  const options = useSelector((state) => selectOptions(state));
  const sort = useSelector((state) => selectSort(state));

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
    setCinemaRequestId(dispatch(getCinemas(options)).requestId);
  }, [options, dispatch]);

  useEffect(() => {
    setPagesQty(Math.ceil(cinemas.length / 20));
    if (page > pagesQty) {
      setPage(1);
    }
  }, [cinemas.length, page, pagesQty]);

  const isCinemasLoading = useSelector(
    (state) => cinemasRequestId && selectIsLoading(state, cinemasRequestId)
  );

  return (
    <>
      {isCinemasLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <LazyCinemas
            pagesQty={pagesQty}
            page={page}
            setPage={setPage}
            cinemas={filteredCinemas}
          />
        </Suspense>
      )}
    </>
  );
};

export default CinemasContainer;
