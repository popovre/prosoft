import { useGetCinemasQuery } from '../../redux/services/api';
import Cinemas from './component';
import Loader from '../loader/component';

const CinemasContainer = () => {
  const parameter = {};
  const { data: cinemas, isLoading } = useGetCinemasQuery(parameter);

  if (isLoading) {
    return <Loader />;
  }

  return <Cinemas cinemas={cinemas?.data} />;
};

export default CinemasContainer;
