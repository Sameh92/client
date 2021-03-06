import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
interface Props {
  isDarkMode: boolean;
  ChangThemeMode: () => void;
}
export default function Header({ isDarkMode, ChangThemeMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={isDarkMode} onChange={ChangThemeMode} />
      </Toolbar>
    </AppBar>
  );
}
