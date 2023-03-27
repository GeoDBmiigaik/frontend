import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

export function SignInPage() {
  return (
    <Box
      className="container mx-auto max-w-2xl pt-5"
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr ' },
        gap: 2,
      }}
    >
      <CssTextField label="Login" id="custom-css-outlined-input" />
      <CssTextField label="Password" id="custom-css-outlined-input" />
      <Button variant="contained">Save</Button>
    </Box>
  );
}
