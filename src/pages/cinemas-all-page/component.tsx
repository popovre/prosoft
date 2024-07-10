import Cinemas from '../../components/cinemas/component';
import { useGetCinemasQuery } from '../../redux/services/api';
import Loader from '../../components/loader/component';
import styles from './style.module.scss';

const CinemasAllPage = () => {
  const parameter = {};
  const { data: cinemas, isLoading } = useGetCinemasQuery(parameter, {
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.root}>
      <Cinemas cinemas={cinemas?.data} />
    </div>
  );
};

export default CinemasAllPage;
