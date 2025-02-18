import { Typography } from "@mui/material"
import { useColorScheme } from '@mui/material/styles'
import Button from "@mui/material/Button"


function App() {
  const { mode, setMode } = useColorScheme()
  return (
    <>
      <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>Toggle Mode</Button>
      <div>Current mode: {mode} </div>
      <Typography variant="body2" color="primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Perferendis minima rerum quia modi, delectus facere maiores doloribus, rem accusamus incidunt sint omnis quaerat debitis autem placeat dicta optio! 
        Ratione, inventore?
      </Typography>
      <Typography variant="body2" color="secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Perferendis minima rerum quia modi, delectus facere maiores doloribus, rem accusamus incidunt sint omnis quaerat debitis autem placeat dicta optio! 
        Ratione, inventore?
      </Typography>
    </>
  )
}

export default App
