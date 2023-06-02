import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const steps = ["1", "2"];

export default function MultiStepForm(props) {
  const { closeForm, setUserData } = props;

  const [activeStep, setActiveStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const stepComponent = [
    <>
      <TextField
        label="Name"
        name="name"
        required
        onChange={(e) => setName(e.target.value)}
        fullWidth
        value={name}
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
    </>,
    <TextField
      label="Password"
      name="password"
      required
      fullWidth
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      margin="normal"
      type="password"
    />,
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = () => {
    setUserData({
      name,
      email,
      password,
    });
    closeForm();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // handle disable of Next & finish button incase of empty textfield found
  React.useEffect(() => {
    let isDisable = false;
    if (activeStep === 0) isDisable = !name || !email ? true : false;
    else if (activeStep === 1) isDisable = !password ? true : false;

    setDisabled(isDisable);
  }, [name, email, password, activeStep]);

  return (
    <Box sx={{ width: "100%", bgcolor: "#DDE6ED" }}>
      <Stepper
        activeStep={activeStep}
        sx={{
          width: "90%",
          paddingLeft: 4,
        }}
      >
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box sx={{ p: 4, height: 155 }}>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography>All steps Done.. User Created</Typography>
          </React.Fragment>
        ) : (
          stepComponent[activeStep]
        )}
      </Box>
      <React.Fragment>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2,
            marginTop: "10%",
          }}
        >
          {activeStep === steps.length ? (
            <>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={closeForm}
                sx={{ mr: 1 }}
              >
                Close
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                onClick={
                  activeStep === steps.length - 1 ? handleFinish : handleNext
                }
                disabled={disabled}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </>
          )}
        </Box>
      </React.Fragment>
    </Box>
  );
}
