import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  useTheme,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const FormData = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDown = (event) => event.preventDefault();
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiButton-root": { width: "15ch" },
        "& .MuiTextField-root": { width: "50ch" },
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ mt: 3 }}
        align="center"
        color={theme.palette.primary.side}
        variant="h5"
      >
        Please Login to your Account!
      </Typography>

      <TextField
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        align="center"
      ></TextField>
      <TextField
        onBlur={(event) => event}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        name="password"
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={showPassword ? "hide password" : "show password"}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDown}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff sx={{ fontSize: "20px" }} />
                ) : (
                  <Visibility sx={{ fontSize: "20px" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        margin="normal"
        align="center"
        fullWidth
        required
      ></TextField>
      <Button
        type="submit"
        align="center"
        variant="contained"
        color="primary"
        sx={{ backgroundColor: theme.palette.primary.main }}
        onClick={() => {
          resetForm();
          alert("You have Successfully Loged in!");
        }}
      >
        LOGIN
      </Button>
    </Box>
  );
};

export default FormData;
