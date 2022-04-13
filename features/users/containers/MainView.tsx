import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  useGetEventsByUserQuery,
  useGetUsersQuery,
} from "../services/users.service";
import CardUser from "shared/components/cardUser";

const MainView = () => {
  const [name, setName] = useState("bue221");

  const { data: user, isError: userError } = useGetUsersQuery({ name });
  const { data: events, isError: eventsError } = useGetEventsByUserQuery({
    name,
  });

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            Busca usuarios de Github
          </Typography>
        </Toolbar>
      </AppBar>
      <Box py={10} px={20}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          label="Ingresa el nombre de usuario de github"
          id="name"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 10,
          }}
        >
          {userError ? (
            <Typography variant="h5" color="text.primary">
              El usuario ingresado no existe
            </Typography>
          ) : (
            <CardUser {...user} events={events} eventsError={eventsError} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MainView;
