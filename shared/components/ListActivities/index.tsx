import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import React from "react";
import { Events } from "shared/types";
import { IoChevronDown } from "react-icons/io5";

const ListActivities = ({ actor, repo, type, payload }: Events) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={actor?.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        primary={repo?.name}
        secondary={
          <>
            <Typography fontWeight="bold" variant="body2" color="text.primary">
              Tipo: {type}
            </Typography>
            <Typography component="span" variant="body2" color="text.primary">
              {`${payload?.commits?.length || 0} commits`}
            </Typography>
            <Typography variant="body2" color="text.primary" noWrap>
              {repo?.url}
            </Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<IoChevronDown fontSize={20} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                disabled={payload?.commits?.length === 0}
              >
                <Typography>Lista de commits</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {payload?.commits?.map((i, index) => (
                  <>
                    <Typography sx={{ maxWidth: "280px", overflow: "hidden" }}>
                      {i?.message}
                    </Typography>
                    <Divider />
                  </>
                ))}
              </AccordionDetails>
            </Accordion>
          </>
        }
      />
    </ListItem>
  );
};

export default ListActivities;
