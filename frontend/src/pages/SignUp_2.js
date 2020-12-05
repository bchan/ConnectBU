import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SignUpInfo from '../components/SignUpInfo';
import SignUpEdu from '../components/SignUpEdu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  stepper: {
    margin: '20px',
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

  const setStep = (index) => {
    setCurrentStep(index);
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
      >
        <Grid item xs={12}>
          <Stepper nonLinear activeStep={currentStep}>
            {steps.map((element, index) => {
              return (
                <Step 
                  key={element}
                  onClick={() => setStep(index)}
                  completed={completed[index]}
                >
                  <StepButton>
                    {element}
                  </StepButton>
                </Step>
              )
            })}
          </Stepper>
        </Grid>
      </Grid>

      <Grid container className={classes.stepper}>
        {getStepComponent(currentStep)}
      </Grid>

      <Grid container>
        <Button variant="contained" color="primary" style={{marginLeft: '20px'}} onClick={() => handleBack()}>Back</Button>
        <Button variant="contained" color="primary" style={{marginLeft: '10px'}} onClick={() => handleNext()}>Next</Button>
      </Grid>
      

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}
