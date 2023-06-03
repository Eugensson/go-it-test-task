import { Grid } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Grid
      height="30"
      width="30"
      color="orangered"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
