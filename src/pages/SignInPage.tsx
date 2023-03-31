import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form';
import { formsRequest } from '../components/Users/UsersMethods';
import {useContext} from "react";
import {AppContext} from "../components/App/AppContext";


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
type Inputs = {
  email: string;
  username: string;
  password: string;
};
export function SignInPage() {
  const { control, handleSubmit } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    await formsRequest('signin', 'post', data);
    document.location.replace('/');
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto max-w-2xl pt-5"
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr ' },
        gap: 2,
      }}
    >
      <Controller
        render={({ field }) => <CssTextField label="Login" {...field} />}
        name="username"
        control={control}
        defaultValue=""
      />
      <Controller
        render={({ field }) => <CssTextField label="Password" {...field} />}
        name="password"
        control={control}
        defaultValue=""
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </Box>
  );
}
