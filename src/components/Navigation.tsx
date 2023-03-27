import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';

export function Navigation() {
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
            <Button color="inherit" href="/signin">
              SignIn
            </Button>
            <Button color="inherit" href="/signup">
              SignUp
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
