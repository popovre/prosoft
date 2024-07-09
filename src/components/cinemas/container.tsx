import { useGetCinemasQuery } from '../../redux/services/api';
import Cinemas from './component';
import Loader from '../../components/loader/component';

const CinemasContainer = ({ showAll, getSortedArray }) => {
  const {
    data: cinemas,
    isLoading,
    error,
  } = useGetCinemasQuery({}, { skip: !showAll });

  if (isLoading) return <Loader />;

  if (error) return <div>Error</div>;

  return (
    <Cinemas
      getSortedArray={getSortedArray}
      showAll={showAll}
      cinemas={cinemas?.data}
    />
  );
};

export default CinemasContainer;
