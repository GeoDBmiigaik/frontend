import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface TableInterface {
  columns: GridColDef[];
  rows: object[];
}

export function Table(props: TableInterface) {
    console.log(props['columns'][0]['field'])
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props['rows']}
        columns={props['columns']}
        getRowId={(row) => row.gid}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
