import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import { IoShare } from "react-icons/io5";
import { Events, User } from "shared/types";
import { parseDate } from "shared/utils/dateParser";
import ListActivities from "../ListActivities";

interface IProps extends User {
  eventsError: boolean;
  events: Events[];
}

const CardUser = ({
  name,
  created_at,
  avatar_url,
  followers,
  following,
  bio,
  html_url,
  eventsError,
  events,
}: IProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        sx={{ textAlign: "center" }}
        title={name}
        subheader={parseDate(created_at)}
      />
      <CardMedia component="img" height="194" image={avatar_url} alt={name} />
      <CardContent>
        <Typography variant="body2" color="text.primary" display="flex">
          <Typography variant="body2" fontWeight="bold" color="text.primary">
            Seguidores:
          </Typography>
          {`  ${followers}`}
        </Typography>
        <Typography variant="body2" color="text.primary" display="flex">
          <Typography variant="body2" fontWeight="bold" color="text.primary">
            Seguidos:
          </Typography>
          {`  ${following}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <a href={html_url} target="_blank" rel="noreferrer">
          <IconButton aria-label="share">
            <IoShare />
          </IconButton>
        </a>

        <Button onClick={handleExpandClick}>
          {expanded ? "Ocultar actividad" : "Ver actividad"}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph fontWeight="bold">
            Actividad:
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            {eventsError ? (
              <Typography variant="h5" color="text.primary">
                El usuario no tiene actividad disponible
              </Typography>
            ) : (
              <>
                {events?.map((i, index: number) => (
                  <>
                    <ListActivities {...i} key={i.id} />
                    <Divider variant="inset" component="li" key={index} />
                  </>
                ))}
              </>
            )}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardUser;
