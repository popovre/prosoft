import { useGetCinemasQuery } from '../../redux/services/api';
import Cinemas from './component';
import Loader from '../../components/loader/component';

const CinemasContainer = ({ showAll, getSortedArray }) => {
  const { data: cinemas, isLoading, error } = useGetCinemasQuery({});

  if (isLoading) return <Loader />;

  if (error) return <div>Error</div>;

  return <Cinemas getSortedArray={getSortedArray} cinemas={cinemas?.data} />;
};

export default CinemasContainer;
