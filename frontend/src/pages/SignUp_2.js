import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SignUpInfo from '../components/SignUpInfo';
import SignUpEdu from '../components/SignUpEdu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  buttons: {
    marginTop: '10px',
    marginLeft: '5px',
  },
}));

const steps = [
  'General Information',
  'Education',
  'Extracurricular Activities',
];

export default function SignUp() {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [formData, setFormData] = React.useState({});
  const numSteps = steps.length;

  const handleNext = () => {
    if (currentStep !== numSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = (index, isComplete) => {
    let newDictionary = completed;
    newDictionary[index] = isComplete;
    setCompleted(newDictionary);
  };

  const setField = (newData) => {
    let newDictionary = formData;
    for (let key of Object.keys(newData)) {
      newDictionary[key] = newData[key];
    }
    setFormData(newDictionary);
  }

  const getStepComponent = (step) => {
    switch (step) {
      case 0:
        return <SignUpInfo completeHandler={(isComplete) => handleComplete(0, isComplete)} setFieldsHandler={setField} currentData={formData} />;
      case 1:
        return <SignUpEdu completeHandler={(isComplete) => handleComplete(1, isComplete)} />;
      case 2:
        return <div>nothing</div>;
      default:
        return <div>nothing</div>;
    }
  }

  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12}>
          <Stepper nonLinear activeStep={currentStep} orientation="vertical">
            {steps.map((element, index) => {
              return (
                <Step 
                  key={element}
                  completed={completed[index]}
                >
                  <StepLabel>
                    {element}
                  </StepLabel>
                  <StepContent>
                    {getStepComponent(currentStep)}
                    <Button 
                      color="primary" 
                      onClick={() => handleBack()}
                      disabled={currentStep === 0}
                      className={classes.buttons}
                    >
                      Back
                    </Button>
                    <Button 
                      variant="contained"
                      color="primary"
                      onClick={() => handleNext()}
                      className={classes.buttons}
                    >
                      {(currentStep !== numSteps - 1) ? 'Next' : 'Finish'}
                    </Button>
                  </StepContent>
                </Step>
              )
            })}
          </Stepper>
        </Grid>
      </Grid>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}
