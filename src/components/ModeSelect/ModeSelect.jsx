import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl"
import { useColorScheme } from "@mui/material/styles"
import InputLabel from "@mui/material/InputLabel"
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import SettingsBrightnessOutlined from "@mui/icons-material/SettingsBrightnessOutlined"
import Box from "@mui/material/Box"

const modes = [
  {
    value: "light",
    displayName: "Light",
    component: <LightModeOutlined />,
  },
  {
    value: "dark",
    displayName: "Dark",
    component: <DarkModeOutlined />,
  },
  {
    value: "system",
    displayName: "System",
    component: <SettingsBrightnessOutlined />,
  },
]
export default function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }
  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel>Mode</InputLabel>
      <Select
        value={mode}
        label="Mode"
        onChange={(event) => setMode(event.target.value)}
      >
        {modes.map((mode) => (
          <MenuItem key={mode.value} value={mode.value}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {mode.component} {mode.displayName}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
