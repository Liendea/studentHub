import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Buttons from "../Button/Buttons";

export default function RegistrationModal({
  open,
  courseTitle,
  name,
  email,
  onNameChange,
  onEmailChange,
  handleClose,
  handleRegister,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Registrera dig till {courseTitle}</DialogTitle>
      <DialogContent>
        <TextField
          label="Kurs"
          fullWidth
          margin="normal"
          value={courseTitle}
          disabled
        />
        <TextField
          label="Ditt namn"
          fullWidth
          margin="normal"
          value={name}
          onChange={onNameChange}
        />
        <TextField
          label="Din e-post"
          fullWidth
          margin="normal"
          value={email}
          onChange={onEmailChange}
        />
      </DialogContent>
      <DialogActions>
        <Buttons variant="outlined" onClick={handleClose}>
          Avbryt
        </Buttons>
        <Buttons variant="contained" onClick={handleRegister}>
          Registrera
        </Buttons>
      </DialogActions>
    </Dialog>
  );
}
