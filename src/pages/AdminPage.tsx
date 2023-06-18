import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form';
import { databaseMergeRequest, Action } from '../components/Admin/AdminMethods';
import { useEffect, useState } from 'react';
import { tablesRequest } from '../components/Tables/TablesMethods';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const roles = ['a', 'b', 'c'];
const tables = ['1', '2', '3'];

type Inputs = {
  first_host: string;
  first_port: string;
  first_db_name: string;
  first_username: string;
  first_password: string;
  second_host: string;
  second_port: string;
  second_db_name: string;
  second_username: string;
  second_password: string;
};

type data = {
  roles: string[];
  tables: string[];
};

export function AdminPage() {
  const { control, handleSubmit } = useForm<Inputs>();
  const onSubmitMerging = async (data: Inputs) => {
    await databaseMergeRequest('merging', 'post', data);
    document.location.replace('/admin');
  };

  const [checked_roles, setCheckedRoles] = useState<string[]>([]);

  const handleToggleRoles = (value: string) => () => {
    const currentIndex = checked_roles.indexOf(value);
    const newChecked = [...checked_roles];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedRoles(newChecked);
    console.log(checked_roles);
  };

  const [checked_tables, setCheckedTables] = useState<string[]>([]);

  const handleToggleTables = (value: string) => () => {
    const currentIndex = checked_tables.indexOf(value);
    const newChecked = [...checked_tables];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedTables(newChecked);
    console.log(checked_tables);
  };

  const onSubmitRole = async () => {
    await databaseMergeRequest('giverole', 'post', { roles: checked_roles, tables: checked_tables });
    document.location.replace('/admin');
  };

  const getData = async () => await databaseMergeRequest('giverole', 'get');

  const [data, setData] = useState<data>({ roles: [], tables: [] });

  useEffect(() => {
    getData().then((arr) => setData(arr));
    console.log(data);
  }, []);

  return (
    <>
      <Box
        onSubmit={handleSubmit(onSubmitMerging)}
        className="container mx-auto max-w-2xl pt-5"
        component="form"
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr ' },
          gap: 2,
        }}
      >
        <div>Интегрировать базу данных</div>
        <div>Откуда</div>
        <Controller
          render={({ field }) => <CssTextField label="DB host" {...field} />}
          name="first_host"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <CssTextField label="Port" {...field} />}
          name="first_port"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <CssTextField label="Db name" {...field} />}
          name="first_db_name"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <CssTextField label="Username" {...field} />}
          name="first_username"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <CssTextField label="Password" {...field} />}
          name="first_password"
          control={control}
          defaultValue=""
        />
        <div>Куда</div>
        <Controller
          render={({ field }) => <CssTextField label="DB host" {...field} />}
          name="second_host"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <CssTextField label="Port" {...field} />}
          name="second_port"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <CssTextField label="Db name" {...field} />}
          name="second_db_name"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <CssTextField label="Username" {...field} />}
          name="second_username"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <CssTextField label="Password" {...field} />}
          name="second_password"
          control={control}
          defaultValue=""
        />
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
      <Box
        onSubmit={handleSubmit(onSubmitRole)}
        className="container mx-auto max-w-2xl pt-5"
        component="form"
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr ' },
          gap: 2,
        }}
      >
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {data['roles'].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem key={value} disablePadding>
                <ListItemButton role={undefined} onClick={handleToggleRoles(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked_roles.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {data['tables'].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem key={value} disablePadding>
                <ListItemButton role={undefined} onClick={handleToggleTables(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked_tables.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </>
  );
}
