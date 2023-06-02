import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import MultiStepRegisterForm from "./MultiStepRegisterForm";
import { Typography } from "@mui/material";

export default function FormDialog(props) {
  const { onClose, selectedValue, open, setUserData } = props;

  /**
   * handle close of popup
   */
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle sx={{ p: 2, bgcolor: "#DDE6ED" }}>
        <Typography variant="h6" color="#27374D">
          Register User
        </Typography>
      </DialogTitle>
      <MultiStepRegisterForm
        closeForm={handleClose}
        setUserData={setUserData}
      />
    </Dialog>
  );
}
