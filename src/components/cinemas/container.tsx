import Cinemas from './component';
import Loader from '../../components/loader/component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCinemas } from '../../redux/cinema/thunks/get-cinemas';
import { cinemaSelectors } from '../../redux/cinema';
import { selectIsLoading } from '../../redux/ui/request';
import { selectOptions } from '../../redux/query-option';

const CinemasContainer = ({ showAll, getSortedArray }) => {
  const [cinemasRequestId, setCinemaRequestId] = useState(0);
  const [pagesQty, setPagesQty] = useState(0);
  const [page, setPage] = useState(1);

  const cinemas = useSelector((state) => cinemaSelectors.selectAll(state));

  const filteredCinemas = getSortedArray([...cinemas]);

  const options = useSelector((state) => selectOptions(state));

  const isCinemasLoading = useSelector(
    (state) => cinemasRequestId && selectIsLoading(state, cinemasRequestId)
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

  return (
    <>
      {isCinemasLoading ? (
        <Loader />
      ) : (
        <Cinemas
          pagesQty={pagesQty}
          page={page}
          setPage={setPage}
          showAll={showAll}
          cinemas={filteredCinemas}
        />
      )}
    </>
  );
};

export default CinemasContainer;
