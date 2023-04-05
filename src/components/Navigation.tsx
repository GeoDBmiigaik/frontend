import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { formsRequest } from './Users/UsersMethods';
import { useContext } from 'react';
import { AppContext } from './App/AppContext';

export function Navigation() {
  const { userContext } = useContext(AppContext);
  const onSubmit = async () => {
    await formsRequest('session', 'delete');
    document.location.replace('/');
  };
  return (
    <Box className="container mx-auto max-w-2xl pt-12">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GeoDB
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/tables">
              My tables
            </Button>
            {userContext.credentials[0] == 'anonymous' ? (
              <>
                <Button color="inherit" href="/signin">
                  SignIn
                </Button>
                <Button color="inherit" href="/signup">
                  SignUp
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={onSubmit}>
                Exit
              </Button>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
