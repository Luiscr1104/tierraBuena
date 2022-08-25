import './App.css';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
function App() {
  return (
    <CssVarsProvider>
      <Sheet
  sx={{
    maxWidth: 400,
    mx: 'auto', // margin left & right
    my: 10, // margin top & botom
    py: 3, // padding top & bottom
    px: 2, // padding left & right
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    borderRadius: 'sm',
    boxShadow: 'md',
  }}
>
  Bienvenidos!
  <TextField
    // html input attribute
    name="email"
    type="email"
    placeholder="johndoe@email.com"
    // pass down to FormLabel as children
    label="Correo electrónico"
  />
  <TextField
    name="password"
    type="password"
    placeholder="contraseña"
    label="Contraseña"
  />
  <Button
    sx={{
      mt: 1, // margin top
    }}
  >
    Log in
  </Button>
  <Typography
    endDecorator={<Link href="/sign-up">Regístrate</Link>}
    fontSize="sm"
    sx={{ alignSelf: 'center' }}
  >
    ¿No tienes una cuenta?
  </Typography>
</Sheet>
    </CssVarsProvider>
    
  );
}

export default App;

