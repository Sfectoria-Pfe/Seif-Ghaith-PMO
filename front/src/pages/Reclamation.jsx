import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { randomTraderName, randomEmail } from '@mui/x-data-grid-generator';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector} from "react-redux";
import { getreclamations } from "../store/reclamation";
import { useEffect } from 'react';


export default function QuickFilteringExcludeHiddenColumns() {
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExclugetclientdeHiddenColumns: true,
    quickFilterValues: [],
  });
  const reclamationStore = useSelector((state) => state.reclamation);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getreclamations());
  }, []);
  
  

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});



const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'clientId', headerName: 'ClientId', width: 150 },
  { field: 'clientName', headerName: 'ClientName', width: 150 },
  { field: 'title', headerName: 'title', width:150 },
  { field: 'description', headerName: 'description', width:300 },
];
const rows = reclamationStore.reclamations.map(reclamation => ({
  id: reclamation.id,
  clientId: reclamation.clientId,   
  clientName : reclamation.Client.first_name,
  title: reclamation.titel, 
  description: reclamation.description 
}));

console.log(rows); 





  return (
    <Box sx={{ width: 1 }}>
      <FormControlLabel
        checked={columnVisibilityModel.id !== false}
        onChange={(event) =>
          setColumnVisibilityModel(() => ({ id: event.target.checked }))
        }
        control={<Switch color="primary" />}
        label="Show ID column"
      />
      <FormControlLabel
        checked={filterModel.quickFilterExcludeHiddenColumns}
        onChange={(event) =>
          setFilterModel((model) => ({
            ...model,
            quickFilterExcludeHiddenColumns: event.target.checked,
          }))
        }
        control={<Switch color="primary" />}
        label="Exclude hidden columns"
      />
      <Box sx={{ height: 400 }}>
        <DataGrid
          columns={columns}
          rows={rows}
          disableColumnFilter
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
        />
      </Box>
    </Box>
  );
}