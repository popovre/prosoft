import { Container, Pagination, Stack } from '@mui/material';

const CustomPagination = ({ pagesQty, setPage }) => {
  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Stack spacing={2}>
        {pagesQty && (
          <Pagination
            sx={{ marginX: 'auto', marginY: 2 }}
            variant="outlined"
            color="secondary"
            onChange={(_, num) => {
              setPage(num);
            }}
            count={pagesQty}
          />
        )}
      </Stack>
    </Container>
  );
};

export default CustomPagination;
