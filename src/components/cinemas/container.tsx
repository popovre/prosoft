import Cinemas from './component';
import Loader from '../../components/loader/component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCinemas } from '../../redux/cinema/thunks/get-cinemas';
import { cinemaSelectors } from '../../redux/cinema';
import { selectIsLoading } from '../../redux/ui/request';
import { selectOptions } from '../../redux/query-option';

const CinemasContainer = ({ showAll, getSortedArray }) => {
  const [cinemasRequestId, setCinemaRequestId] = useState(null);

  const cinemas = useSelector((state) =>
    getSortedArray(cinemaSelectors.selectAll(state).slice())
  );

  const options = useSelector((state) => selectOptions(state));

  const isCinemasLoading = useSelector(
    (state) => cinemasRequestId && selectIsLoading(state, cinemasRequestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setCinemaRequestId(dispatch(getCinemas(options)).requestId);
  }, [options, dispatch]);

  return (
    <>
      {isCinemasLoading ? (
        <Loader />
      ) : (
        <Cinemas showAll={showAll} cinemas={cinemas} />
      )}
    </>
  );
};

export default CinemasContainer;
