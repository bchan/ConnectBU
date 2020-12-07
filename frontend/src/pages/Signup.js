import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SignUpInfo from '../components/SignUpInfo';
import SignUpEdu from '../components/SignUpEdu';
import SignUpAct from '../components/SignUpAct';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '75px',
    paddingBottom: '350px',
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
  const [formData, setFormData] = React.useState({has_ipad: false});
  const numSteps = steps.length;

  const handleNext = () => {
    if (currentStep !== numSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Send request to backend
      fetch('http://localhost:5000/create_user', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          body: JSON.stringify(formData)
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error: ', error);
      })
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
        return <SignUpEdu completeHandler={(isComplete) => handleComplete(1, isComplete)} setFieldsHandler={setField} currentData={formData}/>;
      case 2:
        return <SignUpAct completeHandler={(isComplete) => handleComplete(2, isComplete)} setFieldsHandler={setField} currentData={formData}/>;
      default:
        return <div>nothing</div>;
    }
  }

  return (
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
                    color="secondary"
                    onClick={() => handleNext()}
                    className={classes.buttons}
                  >
                    {(currentStep !== numSteps - 1) ? 'Next' : 'Join connectBU'}
                  </Button>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
      </Grid>
    </Grid>
  )
}
