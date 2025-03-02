import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyIcon from "@mui/icons-material/Reply";

export default function Comment() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="form"
      // onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 2,
      }}
    >
      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="comment">Comment</FormLabel>
        <TextField
          size="small"
          id="comment"
          type="text"
          name="comment"
          variant="outlined"
          required
          multiline
          // value={data.title}
          // onChange={handleChange}
        />
      </FormControl>
      <button
        type="submit"
        className="bg-green-600  text-white font-medium py-2 px-2 rounded-md w-2/4 m-auto uppercase"
      >
        New Comment
      </button>
    </Box>
  );
}

{
  /* Comment 1 */
}
{
  /* <Box sx={{ p: 3, borderRadius: 2, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              sx={{ mr: 2 }}
            />
            <Typography variant="body1" fontWeight="bold" sx={{ mr: 2 }}>
              Michael Gough
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Feb. 8, 2022
            </Typography>
          </Box>
          <div className="border border-black p-1 cursor-pointer dark:border-white ">
            <MoreVertIcon onClick={handleClick} />
          </div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Remove</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools are as important as the creation of the design
          strategy.
        </Typography>
        <Button startIcon={<ReplyIcon />} sx={{ color: "text.secondary" }}>
          Reply
        </Button>
      </Box> */
}

{
  /* Comment 2 */
}
{
  /* <Box
        sx={{
          p: 3,
          borderRadius: 2,
          mb: 3,
          ml: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              sx={{ mr: 2 }}
            />
            <Typography variant="body1" fontWeight="bold" sx={{ mr: 2 }}>
              Jese Leos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Feb. 12, 2022
            </Typography>
          </Box>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Much appreciated! Glad you liked it ☺️
        </Typography>
        <Button startIcon={<ReplyIcon />} sx={{ color: "text.secondary" }}>
          Reply
        </Button>
      </Box> */
}

{
  /* Comment 3 */
}
{
  /* <Box sx={{ p: 3, borderRadius: 2, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              sx={{ mr: 2 }}
            />
            <Typography variant="body1" fontWeight="bold" sx={{ mr: 2 }}>
              Bonnie Green
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mar. 12, 2022
            </Typography>
          </Box>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          The article covers the essentials, challenges, myths and stages the UX
          designer should consider while creating the design strategy.
        </Typography>
        <Button startIcon={<ReplyIcon />} sx={{ color: "text.secondary" }}>
          Reply
        </Button>
      </Box> */
}

{
  /* Comment 4 */
}
{
  /* <Box sx={{ p: 3, borderRadius: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              sx={{ mr: 2 }}
            />
            <Typography variant="body1" fontWeight="bold" sx={{ mr: 2 }}>
              Helene Engels
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Jun. 23, 2022
            </Typography>
          </Box>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Thanks for sharing this. I do came from the Backend development and
          explored some of the tools to design my Side Projects.
        </Typography>
        <Button startIcon={<ReplyIcon />} sx={{ color: "text.secondary" }}>
          Reply
        </Button>
      </Box> */
}
