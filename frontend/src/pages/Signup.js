
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  
    root: {
        width: '100%',
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingTop: 30, 
        paddingBottom: 1, 
      },
      rootText: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      button: {
        marginRight: theme.spacing(1),
      },
      completed: {
        display: 'inline-block',
      },
      instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    screen: {
        paddingLeft: 40, 
        paddingRight: 40, 
        paddingTop: 1, 
        paddingBottom: 1, 
        backgroundColor: "rgb(240,240,240)"
      },
    boxes: {
        border: "1px solid grey", 
        padding: 30, 
        width: "70%",
        borderRadius: 20, 
        backgroundColor: "rgb(255,255,255)", 
        marginBottom: 20,
        marginTop: 10
    },
    formControl: {
     margin: theme.spacing(5),
     marginTop: theme.spacing(-2),
     marginLeft: theme.spacing(30),
     marginBottom: theme.spacing(12),
     minWidth: 150,
     },
    selectEmpty: {
      marginTop: theme.spacing(0),
    },
    separation: {
        width: "100%", 
        height: 0, 
        borderTop: "1px solid grey", 
        borderColor: "grey", 
        marginTop: 10, 
        marginBottom: 20
      },
      editButton: {
        backgroundColor: '#EB5757',
        color: 'white',
        '&:hover': {
          backgroundColor: '#B03E3E',
          color: 'white'
        },
        marginLeft: 10
      }
}));
function getSteps() {
    return ['General Information', 'Education', 'Extracurricular Activities'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return ( <h1>Step 1: Tell us more about you</h1>
        )
      case 1:
        return <h1>Step 2: Tell us more about your Education</h1>
       // 'Step 2: Tell us more about your Extracurricular Activities';
      case 2:
        return <h1>Step 3: Tell us more about your Extracurricular Activities</h1>
      default:
        return 'Unknown step';
    }
  }
  
export default function Signup()  {
    const classes = useStyles();
    //const [Major, setMajor] = React.useState('');

  //  const handleChange = (event) => {
    //  setMajor(event.target.value);
    //};

    const Majors = {
        options: major,
        getOptionLabel: (option) => option.title,
      };

      const flatMajors = {
        options: major.map((option) => option.title),
      };
      const Minors = {
        options: minor,
        getOptionLabel: (option) => option.title,
      };
      const flatMinors = {
        options: minor.map((option) => option.title),
      };
      const Clubs = {
        options: club,
        getOptionLabel: (option) => option.title,
      };
      const flatClubs = {
        options: club.map((option) => option.title),
      };
      const Research = {
        options: research,
        getOptionLabel: (option) => option.title,
      };

      const flatResearch = {
        options: research.map((option) => option.title),
      };
      
      const Interests = {
        options: Interest,
        getOptionLabel: (option) => option.title,
      };
      const flatInterests = {
        options: club.map((option) => option.title),
      };
      const Closses = {
        options: closses,
        getOptionLabel: (option) => option.title,
      };
      const flatClosses = {
        options: club.map((option) => option.title),
      };
      const Countries = {
        options: countries,
        getOptionLabel: (option) => option.title,
      };

      const flatCountries = {
        options: countries.map((option) => option.title),
      };
      const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const steps = getSteps();

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
        isLastStep() && !allStepsCompleted()
            ? 
            steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (


     <div className={classes.root}>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)} completed={completed[index]}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
     <div>
       {allStepsCompleted() ? (
         <div>
           <Typography className={classes.instructions}>
             All steps completed - you&apos;re finished
           </Typography>
           <Button onClick={handleReset}>Reset</Button>
         </div>
       ) : (
         <div>
           <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

           {
            {
          '0':
          <Grid
              container
              direction="row"
              justify="flex-start"
              //alignItems="center"
              className={classes.boxes}>
              
              <Grid 
                  direction="column"
                  justify="flex-start">
                    <div className={classes.screen}>
                    <h2>First Name</h2>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>


                    <h2>BU ID</h2>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>


                    <h2>Country</h2>
                    </div>
              </Grid>
              <Grid item xs={30} sm={20}>
                        <div className={classes.formControl}>

                        
                        <form className={classes.root} noValidate autoComplete="off">
                           <TextField id="standard-basic" label="First Name" variant="outlined" />
                           <TextField id="standard-basic" label="Last Name" variant="outlined" />
                         </form>
                        </div>
                        <div className={classes.formControl}>

                        
                        <TextField id="standard-basic" label="Your BU ID" variant="outlined"/>
                          </div>
                          <div className={classes.formControl}>

                        
                              <Autocomplete
                              {...Countries}
                              id="Countries"
                              style={{ width: 300 }}
                              debug
                              renderInput={(params) => <TextField {...params} label="Where Are You From?" margin="normal" />}

                              />
                            </div>
                </Grid>


        </Grid>,

          '1':             
          <Grid
              container
              direction="row"
              justify="flex-start"
              //alignItems="center"
              className={classes.boxes}>
              
              <Grid 
                  direction="column"
                  justify="flex-start">
                    <div className={classes.screen}>
                    <h2>Major</h2>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>


                    <h2>Minor</h2>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                    <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>


                    <h2>Classes</h2>
                    </div>
              </Grid>
              <Grid item xs={30} sm={20}>
                        <div className={classes.formControl}>

                        
                        <Autocomplete
                        {...Majors}
                        id="Major"
                        style={{ width: 300 }}
                        debug
                        renderInput={(params) => <TextField {...params} label="Major" margin="normal" />}

                        />
                        </div>
                        <div className={classes.formControl}>

                        
                            <Autocomplete
                            {...Minors}
                            id="Minor"
                            style={{ width: 300 }}
                            debug
                            renderInput={(params) => <TextField {...params} label="Minor" margin="normal" />}

                            />
                          </div>
                          <div className={classes.formControl}>

                        
                              <Autocomplete
                              {...Closses}
                              id="Classes"
                              style={{ width: 300 }}
                              debug
                              renderInput={(params) => <TextField {...params} label="Classes" margin="normal" />}

                              />
                            </div>
                </Grid>


        </Grid>,
          '2': 
          <Grid
          container
          direction="row"
          justify="flex-start"
          //alignItems="center"
          className={classes.boxes}>
          
          <Grid 
              direction="column"
              justify="flex-start">
                <div className={classes.screen}>
                <h2>Clubs</h2>
                <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>


                <h2>Research</h2>
                <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
                <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>


                <h2>Interest</h2>
                </div>
          </Grid>
          <Grid item xs={30} sm={30}>
                    <div className={classes.formControl}>

                    
                    <Autocomplete
                    {...Clubs}
                    id="Clubs"
                    style={{ width: 300 }}
                    debug
                    renderInput={(params) => <TextField {...params} label="Clubs" margin="normal" />}

                    />
                    </div>
                    <div className={classes.formControl}>

                    
                        <Autocomplete
                        {...Research}
                        id="Minor"
                        style={{ width: 300 }}
                        debug
                        renderInput={(params) => <TextField {...params} label="Research Group" margin="normal" />}

                        />
                      </div>
                      <div className={classes.formControl}>

                    
                          <Autocomplete
                          {...Interests}
                          id="Interest"
                          style={{ width: 300 }}
                          debug
                          renderInput={(params) => <TextField {...params} label="Interest" margin="normal" />}

                          />
                        </div>
            </Grid>


    </Grid>,
            }[activeStep]
             }

 
     
           <div>

             <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
               Back
             </Button>
             <Button
               variant="contained"
               color="primary"
               onClick={handleNext}
               className={classes.button}
             >
               Next
             </Button>
             {activeStep !== steps.length &&
               (completed[activeStep] ? (
                 <Typography variant="caption" className={classes.completed}>
                   Step {activeStep + 1} already completed
                 </Typography>
               ) : (
                 <Button variant="contained" color="primary" onClick={handleComplete}>
                   {completedSteps() === totalSteps() - 1 ? 'Join ConnectBU' : 'Complete Step'}
                 </Button>
               ))}
           </div>
         </div>
       )}
     </div>
   </div>
    );
  }


  const major = [
    { title: 'CAS American Studies'},
    { title: 'CAS Ancient Greek'},
    { title: 'CAS Ancient Greek & Latin'},
    { title: 'CAS Anthropology'},
    { title: 'CAS Anthropology & Religion'},
    { title: 'CAS Archaeology'},
    { title: 'CAS Architectural Studies'},
    { title: 'CAS Astronomy'},
    { title: 'CAS Astronomy and Physics'},
    { title: 'CAS Biochemistry & Molecular Biology'},
    { title: 'CAS Biology'},
    { title: 'CAS Biology with Specialization in Behavioral Biology'},
    { title: 'CAS Biology with Specialization in Cell Biology, Molecular Biology & Genetics'},
    { title: 'CAS Biology with Specialization in Ecology & Conservation Biology'},
    { title: 'CAS Biology with Specialization in Neurobiology'},
    { title: 'CAS Chemistry'},
    { title: 'CAS Chemistry: Biochemistry'},
    { title: 'CAS Chemistry: Concentration in Teaching'},
    { title: 'CAS Chinese Language & Literature'},
    { title: 'CAS Cinema & Media Studies'},
    { title: 'CAS Classical Civilization'},
    { title: 'CAS Classics & Archaeology'},
    { title: 'CAS Classics & Philosophy'},
    { title: 'CAS Classics & Religion'},
    { title: 'CAS Comparative Literature'},
    { title: 'CAS Computer Science'},
    { title: 'CAS Earth & Environmental Sciences'},
    { title: 'CAS Economics'},
    { title: 'CAS Economics & Mathematics'},
    { title: 'CAS English'},
    { title: 'CAS Environmental Analysis & Policy'},
    { title: 'CAS French & Linguistics'},
    { title: 'CAS French Studies'},
    { title: 'CAS Geophysics & Planetary Sciences'},
    { title: 'CAS German Language & Literature'},
    { title: 'CAS History'},
    { title: 'CAS History of Art & Architecture'},
    { title: 'CAS Italian & Linguistics'},
    { title: 'CAS Italian Studies'},
    { title: 'CAS Japanese & Linguistics'},
    { title: 'CAS Japanese Language & Literature'},
    { title: 'CAS Latin'},
    { title: 'CAS Linguistics'},
    { title: 'CAS Linguistics & African Languages'},
    { title: 'CAS Linguistics & Computer Science'},
    { title: 'CAS Linguistics & Philosophy'},
    { title: 'CAS Linguistics and Speech, Language & Hearing Sciences'},
    { title: 'CAS Marine Science'},
    { title: 'CAS Mathematics & Computer Science'},
    { title: 'CAS Mathematics & Mathematics Education'},
    { title: 'CAS Mathematics & Philosophy'},
    { title: 'CAS Mathematics (includes Statistics)'},
    { title: 'CAS Middle Eastern and South Asian Languages & Literatures'},
    { title: 'CAS Neuroscience'},
    { title: 'CAS Philosophy'},
    { title: 'CAS Philosophy & Neuroscience'},
    { title: 'CAS Philosophy & Physics'},
    { title: 'CAS Philosophy & Political Science'},
    { title: 'CAS Philosophy & Psychology'},
    { title: 'CAS Philosophy & Religion'},
    { title: 'CAS Physics'},
    { title: 'CAS Political Science'},
    { title: 'CAS Psychology'},
    { title: 'CAS Religion'},
    { title: 'CAS Russian Language and Literature'},
    { title: 'CAS Seven-Year Liberal Arts/Medical Education Program'},
    { title: 'CAS Sociology'},
    { title: 'CAS Spanish'},
    { title: 'CAS Spanish & Linguistics'},
    { title: 'CAS Statistics & Computer Science'},
    { title: 'CFA Acting/Theatre Arts (Performance Core)'},
    { title: 'CFA Art'},
    { title: 'CFA Art Education'},
    { title: 'CFA Composition & Theory'},
    { title: 'CFA Costume Design'},
    { title: 'CFA Graphic Design'},
    { title: 'CFA Lighting Design'},
    { title: 'CFA Music (Nonperformance)'},
    { title: 'CFA Music (Performance)'},
    { title: 'CFA Music Education'},
    { title: 'CFA Painting'},
    { title: 'CFA Printmaking'},
    { title: 'CFA Scene Design'},
    { title: 'CFA Sculpture'},
    { title: 'CFA Sound Design'},
    { title: 'CFA Stage Management'},
    { title: 'CFA Theatre Arts'},
    { title: 'CFA Theatre Production (Costume)'},
    { title: 'CFA Theatre Production (Technical)'},
    { title: 'CGS General Studies'},
    { title: 'COM Advertising'},
    { title: 'COM Film & Television'},
    { title: 'COM Journalism'},
    { title: 'COM Media Science'},
    { title: 'COM Public Relations'},
    { title: 'ENG Aerospace Engineering Concentration'},
    { title: 'ENG Biomedical Engineering'},
    { title: 'ENG Computer Engineering'},
    { title: 'ENG Electrical Engineering'},
    { title: 'ENG Energy Technologies Concentration'},
    { title: 'ENG Manufacturing Engineering Concentration'},
    { title: 'ENG Mechanical Engineering'},
    { title: 'ENG Nanotechnology Concentration'},
    { title: 'QST Business Administration & Management (Business Analytics)'},
    { title: 'QST Business Administration & Management (Independent Concentration)'},
    { title: 'QST Business Administration & Management (Information Systems Concentration)'},
    { title: 'QST Business Administration & Management'},
    { title: 'QST Business Administration & Management (Accounting Concentration)'},
    { title: 'QST Business Administration & Management (Finance Concentration)'},
    { title: 'QST Business Administration & Management (Global Business Concentration)'},
    { title: 'QST Business Administration & Management (Innovation & Entrepreneurship)'},
    { title: 'QST Business Administration & Management (Law Concentration)'},
    { title: 'QST Business Administration & Management (Marketing Concentration)'},
    { title: 'QST Business Administration & Management (Operations & Technology Management)'},
    { title: 'QST Business Administration & Management (Organizational Behavior)'},
    { title: 'QST Business Administration & Management (Real Estate)'},
    { title: 'QST Business Administration & Management (Retailing)'},
    { title: 'QST Business Administration & Management (Strategy)'},
    { title: 'QST Business Administration (Health & Life Sciences)'},
    { title: 'SAR Behavior and Health'},
    { title: 'SAR Dietetics'},
    { title: 'SAR Health Science'},
    { title: 'SAR Human Physiology'},
    { title: 'SAR Linguistics and Speech, Language & Hearing Sciences'},
    { title: 'SAR Nutrition'},
    { title: 'SAR Physical Therapy (Six-Year Program)'},
    { title: 'SAR Speech, Language & Hearing Sciences'},
    { title: 'SHA Hospitality Administration'},
    { title: 'SHA Hospitality Administration & Communication'},
    { title: 'SHA Hospitality Administration (Event Management Concentration)'},
    { title: 'SHA Hospitality Administration (Marketing Concentration)'},
    { title: 'SHA Hospitality Administration (Real Estate Development Concentration)'},
    { title: 'SHA Hospitality Administration (Revenue Management & Analytics Concentration)'},
];

const minor = [
    { title: 'CAS American Studies'},
    { title: 'CAS Ancient Greek'},
    { title: 'CAS Ancient Greek & Latin'},
    { title: 'CAS Anthropology'},
    { title: 'CAS Anthropology & Religion'},
    { title: 'CAS Archaeology'},
    { title: 'CAS Architectural Studies'},
    { title: 'CAS Astronomy'},
    { title: 'CAS Astronomy and Physics'},
    { title: 'CAS Biochemistry & Molecular Biology'},
    { title: 'CAS Biology'},
    { title: 'CAS Biology with Specialization in Behavioral Biology'},
    { title: 'CAS Biology with Specialization in Cell Biology, Molecular Biology & Genetics'},
    { title: 'CAS Biology with Specialization in Ecology & Conservation Biology'},
    { title: 'CAS Biology with Specialization in Neurobiology'},
    { title: 'CAS Chemistry'},
    { title: 'CAS Chemistry: Biochemistry'},
    { title: 'CAS Chemistry: Concentration in Teaching'},
    { title: 'CAS Chinese Language & Literature'},
    { title: 'CAS Cinema & Media Studies'},
    { title: 'CAS Classical Civilization'},
    { title: 'CAS Classics & Archaeology'},
    { title: 'CAS Classics & Philosophy'},
    { title: 'CAS Classics & Religion'},
    { title: 'CAS Comparative Literature'},
    { title: 'CAS Computer Science'},
    { title: 'CAS Earth & Environmental Sciences'},
    { title: 'CAS Economics'},
    { title: 'CAS Economics & Mathematics'},
    { title: 'CAS English'},
    { title: 'CAS Environmental Analysis & Policy'},
    { title: 'CAS French & Linguistics'},
    { title: 'CAS French Studies'},
    { title: 'CAS Geophysics & Planetary Sciences'},
    { title: 'CAS German Language & Literature'},
    { title: 'CAS History'},
    { title: 'CAS History of Art & Architecture'},
    { title: 'CAS Italian & Linguistics'},
    { title: 'CAS Italian Studies'},
    { title: 'CAS Japanese & Linguistics'},
    { title: 'CAS Japanese Language & Literature'},
    { title: 'CAS Latin'},
    { title: 'CAS Linguistics'},
    { title: 'CAS Linguistics & African Languages'},
    { title: 'CAS Linguistics & Computer Science'},
    { title: 'CAS Linguistics & Philosophy'},
    { title: 'CAS Linguistics and Speech, Language & Hearing Sciences'},
    { title: 'CAS Marine Science'},
    { title: 'CAS Mathematics & Computer Science'},
    { title: 'CAS Mathematics & Mathematics Education'},
    { title: 'CAS Mathematics & Philosophy'},
    { title: 'CAS Mathematics (includes Statistics)'},
    { title: 'CAS Middle Eastern and South Asian Languages & Literatures'},
    { title: 'CAS Neuroscience'},
    { title: 'CAS Philosophy'},
    { title: 'CAS Philosophy & Neuroscience'},
    { title: 'CAS Philosophy & Physics'},
    { title: 'CAS Philosophy & Political Science'},
    { title: 'CAS Philosophy & Psychology'},
    { title: 'CAS Philosophy & Religion'},
    { title: 'CAS Physics'},
    { title: 'CAS Political Science'},
    { title: 'CAS Psychology'},
    { title: 'CAS Religion'},
    { title: 'CAS Russian Language and Literature'},
    { title: 'CAS Seven-Year Liberal Arts/Medical Education Program'},
    { title: 'CAS Sociology'},
    { title: 'CAS Spanish'},
    { title: 'CAS Spanish & Linguistics'},
    { title: 'CAS Statistics & Computer Science'},
    { title: 'CFA Acting/Theatre Arts (Performance Core)'},
    { title: 'CFA Art'},
    { title: 'CFA Art Education'},
    { title: 'CFA Composition & Theory'},
    { title: 'CFA Costume Design'},
    { title: 'CFA Graphic Design'},
    { title: 'CFA Lighting Design'},
    { title: 'CFA Music (Nonperformance)'},
    { title: 'CFA Music (Performance)'},
    { title: 'CFA Music Education'},
    { title: 'CFA Painting'},
    { title: 'CFA Printmaking'},
    { title: 'CFA Scene Design'},
    { title: 'CFA Sculpture'},
    { title: 'CFA Sound Design'},
    { title: 'CFA Stage Management'},
    { title: 'CFA Theatre Arts'},
    { title: 'CFA Theatre Production (Costume)'},
    { title: 'CFA Theatre Production (Technical)'},
    { title: 'CGS General Studies'},
    { title: 'COM Advertising'},
    { title: 'COM Film & Television'},
    { title: 'COM Journalism'},
    { title: 'COM Media Science'},
    { title: 'COM Public Relations'},
    { title: 'ENG Aerospace Engineering Concentration'},
    { title: 'ENG Biomedical Engineering'},
    { title: 'ENG Computer Engineering'},
    { title: 'ENG Electrical Engineering'},
    { title: 'ENG Energy Technologies Concentration'},
    { title: 'ENG Manufacturing Engineering Concentration'},
    { title: 'ENG Mechanical Engineering'},
    { title: 'ENG Nanotechnology Concentration'},
    { title: 'QST Business Administration & Management (Business Analytics)'},
    { title: 'QST Business Administration & Management (Independent Concentration)'},
    { title: 'QST Business Administration & Management (Information Systems Concentration)'},
    { title: 'QST Business Administration & Management'},
    { title: 'QST Business Administration & Management (Accounting Concentration)'},
    { title: 'QST Business Administration & Management (Finance Concentration)'},
    { title: 'QST Business Administration & Management (Global Business Concentration)'},
    { title: 'QST Business Administration & Management (Innovation & Entrepreneurship)'},
    { title: 'QST Business Administration & Management (Law Concentration)'},
    { title: 'QST Business Administration & Management (Marketing Concentration)'},
    { title: 'QST Business Administration & Management (Operations & Technology Management)'},
    { title: 'QST Business Administration & Management (Organizational Behavior)'},
    { title: 'QST Business Administration & Management (Real Estate)'},
    { title: 'QST Business Administration & Management (Retailing)'},
    { title: 'QST Business Administration & Management (Strategy)'},
    { title: 'QST Business Administration (Health & Life Sciences)'},
    { title: 'SAR Behavior and Health'},
    { title: 'SAR Dietetics'},
    { title: 'SAR Health Science'},
    { title: 'SAR Human Physiology'},
    { title: 'SAR Linguistics and Speech, Language & Hearing Sciences'},
    { title: 'SAR Nutrition'},
    { title: 'SAR Physical Therapy (Six-Year Program)'},
    { title: 'SAR Speech, Language & Hearing Sciences'},
    { title: 'SHA Hospitality Administration'},
    { title: 'SHA Hospitality Administration & Communication'},
    { title: 'SHA Hospitality Administration (Event Management Concentration)'},
    { title: 'SHA Hospitality Administration (Marketing Concentration)'},
    { title: 'SHA Hospitality Administration (Real Estate Development Concentration)'},
    { title: 'SHA Hospitality Administration (Revenue Management & Analytics Concentration)'},
];

const club = [
    { title: '10 Buick Street Hall Council'},
    { title: '1019 Commonwealth Avenue Hall Council'},
    { title: '180 Degrees Consulting'},
    { title: '33 Harry Agganis Way Hall Council'},
    { title: '575 Commonwealth Avenue Hall Council'},
    { title: 'Above the Haze: a Chi Alpha Campus Ministry'},
    { title: 'Accounting Association'},
    { title: 'Action BU'},
    { title: 'Active Minds'},
    { title: 'Ad Club'},
    { title: 'African Students Organization'},
    { title: 'Alianza Latina'},
    { title: 'Allegrettos'},
    { title: 'Allocations Board'},
    { title: 'Alpha Chi Sigma'},
    { title: 'Alpha Delta Pi'},
    { title: 'Alpha Epsilon Delta'},
    { title: 'Alpha Epsilon Phi'},
    { title: 'Alpha Epsilon Pi Fraternity'},
    { title: 'Alpha Eta Mu Beta'},
    { title: 'alpha Kappa Delta Phi'},
    { title: 'Alpha Kappa Psi'},
    { title: 'Alpha Phi'},
    { title: 'Alpha Phi Alpha'},
    { title: 'Alpha Phi Omega'},
    { title: 'Alpha Sigma Kappa - Women in Technical Studies'},
    { title: 'American & New England Studies Program Graduate Student Association (Graduate)'},
    { title: 'American Cancer Society on Campus'},
    { title: 'American Constitution Society (Graduate)'},
    { title: 'American Hotel & Lodging Association'},
    { title: 'American Institute of Aeronautics & Astronautics'},
    { title: 'American Society for Quality'},
    { title: 'American Society of Biochemistry and Molecular Biology'},
    { title: 'American Society of Mechanical Engineers'},
    { title: 'Amnesty International at Boston University'},
    { title: 'Analytics Club'},
    { title: 'Anime Club'},
    { title: 'Anthropology In The Works'},
    { title: 'Archaeology Society'},
    { title: 'Armenian Students Association'},
    { title: 'Art Club'},
    { title: 'Art for the Heart'},
    { title: 'Art History Association'},
    { title: 'Arts Administration Student Association'},
    { title: 'Asian American Christian Fellowship'},
    { title: 'Asian Baptist Student Koinonia'},
    { title: 'Asian Pacific American Law Students Association (Graduate)'},
    { title: 'Asian Politics and Economics'},
    { title: 'Asian Student Union'},
    { title: 'Asian Studies Initiative at BU'},
    { title: 'ASM International (Graduate)'},
    { title: 'Association of Latino Professionals for America'},
    { title: 'Augmented Reality/Virtual Reality'},
    { title: 'Aural Fixation'},
    { title: 'Automotive Club'},
    { title: "Bangladeshi Students'Association"},
    { title: 'Be the Match on Campus'},
    { title: 'Beekeepers'},
    { title: 'Belly Dance Society'},
    { title: 'Best Buddies'},
    { title: 'Beta Psi Omega'},
    { title: 'Bhangra'},
    { title: 'Biology and Business Club'},
    { title: 'Biomedical Engineering Society'},
    { title: 'Black Business Student Association'},
    { title: 'Black Law Students Association (Graduate) - 43075'},
    { title: 'Boardgames Club'},
    { title: 'Boston Political Review'},
    { title: 'Boston University Business Law Club'},
    { title: 'Boston University Geological Society'},
    { title: 'Boston University Hip-Hop'},
    { title: 'Boston University Mathematical Association of America Chapter'},
    { title: 'Boston University ProductVision'},
    { title: 'Boston University Root Branch'},
    { title: 'Boston University School of Law'},
    { title: 'Boston University School of Law Women of Color Collaborative (Graduate)'},
    { title: 'BosTones'},
    { title: 'Brazilian Association'},
    { title: 'Brownstone Hall Council'},
    { title: 'BU Baja SAE'},
    { title: 'BU Disability Law Advocates and Allies (Graduate)'},
    { title: 'BU Suno'},
    { title: 'BU Wheelock Student Government'},
    { title: 'Bug Club'},
    { title: 'Bunion'},
    { title: 'BUNITED Student Diversity Conference'},
    { title: 'Business & Technology Club'},
    { title: 'Business Law Society (Graduate) - 43500'},
    { title: 'Callbacks'},
    { title: 'Camp Kesem'},
    { title: 'Campus Activities Board'},
    { title: 'Capoeira'},
    { title: 'CAS Student Government'},
    { title: 'Cast'},
    { title: 'Catholic Student Association'},
    { title: 'Center for Gender Sexuality and Activism'},
    { title: 'CFA Student Government'},
    { title: 'CGS Student Government'},
    { title: 'Chabad Jewish Student Organization'},
    { title: 'Change for Refugees Initiative'},
    { title: 'Chankaar'},
    { title: 'Cheese Lovers Society'},
    { title: 'Chi Phi'},
    { title: 'Child Rights and You'},
    { title: 'China Care Fund'},
    { title: 'Chinese Students Association'},
    { title: 'Choral Society'},
    { title: 'Chordially Yours'},
    { title: 'Christians on Campus'},
    { title: 'Church of Jesus Christ of Latter-day Saints Student Association'},
    { title: 'Circle K International'},
    { title: 'Cleantech Club'},
    { title: 'Climbing Club'},
    { title: 'Club Sports'},
    { title: 'College Democrats'},
    { title: 'College Diabetes Network at Boston University'},
    { title: 'College Republicans'},
    { title: 'Colombian Student Association'},
    { title: 'COM Student Assembly'},
    { title: 'Communication Entertainment Sports Law Assn. (Graduate) - 45150'},
    { title: 'Consulting Group'},
    { title: 'Criminal Law Society (Graduate)'},
    { title: 'Cru'},
    { title: 'CS Connect'},
    { title: 'Cybersecurity Association'},
    { title: 'Dance Marathon'},
    { title: 'Dance Theatre Group'},
    { title: 'Dancesport Club'},
    { title: 'Danielsen Hall Council'},
    { title: 'Deaf Studies Club'},
    { title: 'Debate Society'},
    { title: 'Delta Delta Delta'},
    { title: 'Delta Gamma'},
    { title: 'Delta Kappa Alpha'},
    { title: 'Delta Phi Epsilon International'},
    { title: 'Delta Sigma Pi'},
    { title: 'Delta Sigma Theta Sorority, Inc.'},
    { title: 'Delta Tau Delta'},
    { title: 'Dheem: Indian Classical Arts Association'},
    { title: 'Diversity in Law Association'},
    { title: 'Doctors Without Borders'},
    { title: 'Edge Dance Company'},
    { title: 'Education and School Law Association - 43350'},
    { title: 'Egyptian Club'},
    { title: 'Elementary Education'},
    { title: 'EMPLOYMENT & LABOR LAW STUDENTS ASSOCIATION'},
    { title: 'Energy and Environmental Law Society (Graduate)'},
    { title: 'ENG Student Government'},
    { title: 'Engineers Without Borders'},
    { title: 'Environmental Student Organization'},
    { title: 'Epsilon Eta'},
    { title: 'Eritrean and Ethiopian Students Association'},
    { title: 'Esports Club'},
    { title: 'Falun Dafa Club'},
    { title: 'Fashion and Retail Association'},
    { title: 'Fatakada'},
    { title: 'FeelGood World'},
    { title: 'Feminist Collective'},
    { title: 'Fighting Against Multiple Sclerosis'},
    { title: 'Filipino Student Association'},
    { title: 'Film Society'},
    { title: 'Finance and Investment Club'},
    { title: 'Financial Modeling Club'},
    { title: 'Financial Planner’s Association'},
    { title: 'Financial Technology Group'},
    { title: 'Fishing Club'},
    { title: 'FLIP @ BostonU'},
    { title: 'Forge Design Studios'},
    { title: 'French Club'},
    { title: 'Fusion'},
    { title: 'G-Power'},
    { title: 'Gaming Club'},
    { title: 'Gaming Club'},
    { title: 'Gamma Phi Beta'},
    { title: 'German Culture Club'},
    { title: 'Girls Who Code'},
    { title: 'Global App Initiative'},
    { title: 'Global Brigades Governing Board'},
    { title: 'Global China Connection'},
    { title: 'Global Engineering Brigade'},
    { title: 'Global Medical Brigades'},
    { title: 'Global Public Health Brigades'},
    { title: 'Graduate Chinese Students and Scholars Association - 47600'},
    { title: 'GroupIRean: Korean Diplomatic and Political Association'},
    { title: 'Guerrilla Marketing Society'},
    { title: 'Habitat for Humanity'},
    { title: 'Hack4Impact'},
    { title: "Half-Asian People's Association"},
    { title: 'Hawaii Cultural Association'},
    { title: 'Health Law Association (Graduate) - 43700'},
    { title: 'Healthcare Improvement Inc'},
    { title: 'Hearts for the Homeless Boston'},
    { title: 'HeForShe'},
    { title: 'Hellenic Association'},
    { title: 'Helping Hands for the Homeless'},
    { title: 'Helping Hearts BU'},
    { title: 'Her Campus'},
    { title: 'herNetwork - Boston University Women in Business'},
    { title: 'High Performance Computing Club'},
    { title: 'Hillel Students Organization'},
    { title: 'Hindu Students Council'},
    { title: 'HOPE worldwide Campus Club'},
    { title: 'Humans United, Giving Support (HUGS)'},
    { title: 'IEEE Student Chapter/IEEE-HKN'},
    { title: 'llustration Narrative Collaborative'},
    { title: 'Immigration Law and Policy Society (Graduate) - 43450'},
    { title: 'In Achord'},
    { title: 'India Club'},
    { title: 'Indonesian Student Association'},
    { title: 'Inner Strength Gospel Choir'},
    { title: 'Intellectual Property Law Society (Graduate) - 43175'},
    { title: 'International Affairs Association'},
    { title: 'International Business Club'},
    { title: 'International Law Society (Graduate) - 43250'},
    { title: 'International Network for Aid, Relief and Assistance'},
    { title: 'International Student Organization'},
    { title: 'Intervarsity Christian Fellowship'},
    { title: 'Investment Banking Group'},
    { title: 'Iranian Students Association'},
    { title: 'Irish Association'},
    { title: 'Islamic Society'},
    { title: "t's On Us"},
    { title: 'Italian Students Association'},
    { title: 'Jains In Voice and Action'},
    { title: 'Jalwa'},
    { title: 'Japanese Student Association'},
    { title: 'JC Hispaniola Fund'},
    { title: 'Jewish Law Students Association (Graduate) - 43275'},
    { title: 'Kappa Alpha Theta'},
    { title: 'Kappa Delta'},
    { title: 'Kappa Kappa Psi'},
    { title: 'Kappa Sigma'},
    { title: 'Khatarnak'},
    { title: 'Kidney Disease Screening and Awareness Program'},
    { title: 'Kilachand Hall Council'},
    { title: 'Knitting Club'},
    { title: 'Kol Echad'},
    { title: 'Korean Communication Association'},
    { title: 'Korean Networking Organization'},
    { title: 'Korean Student Association'},
    { title: 'Lambda Chi Alpha'},
    { title: 'Lance P. Sijan Silver Wings Chapter'},
    { title: 'Latin American Law Student Association (Graduate) - 43225'},
    { title: 'Latin American Student Association at Boston University'},
    { title: 'LAW Softball Team (Graduate) - 43400'},
    { title: 'Law Student Government Association (Graduate) - 45050'},
    { title: 'Lawyers in Technology (Graduate)'},
    { title: 'Leading Women of Tomorrow'},
    { title: 'Lebanese Club'},
    { title: 'Legal Follies (Graduate) - 43325'},
    { title: 'Liberty in North Korea'},
    { title: 'LIME (learn, inspire, mentor, empower)'},
    { title: 'Linguistics Association'},
    { title: 'Liquid Fun'},
    { title: 'Literary Society'},
    { title: 'LOCK Honorary Service Society'},
    { title: 'Make_BU'},
    { title: 'Malaysian Cultural Association'},
    { title: 'Marine Science Association'},
    { title: 'Marketing Club'},
    { title: 'Mars Rover Club'},
    { title: 'Medical Ethics Society'},
    { title: 'Medical Journal Club'},
    { title: 'MEDLIFE'},
    { title: 'Mexican Students Association'},
    { title: 'MicroFinance Initiative'},
    { title: 'Middle Eastern & South Asian Law Students Association (Graduate) - 44375'},
    { title: 'Mind and Brain Society'},
    { title: 'Minority Association of Pre-Medical/Health Students'},
    { title: 'Minority Connection Initiative'},
    { title: 'Minority Students Association for Life Sciences'},
    { title: 'Mixed Student Union'},
    { title: 'miXx K-Pop Cover Dance Crew'},
    { title: 'Mock Mediation Organization'},
    { title: 'Mock Trial Organization'},
    { title: 'Music Business Club'},
    { title: 'Music Engagement'},
    { title: 'Music Network'},
    { title: 'Music Society (Graduate) - 46725'},
    { title: 'Muslim Law Student Association (Graduate)'},
    { title: 'Mustard Seed'},
    { title: 'Myles Standish Hall Council'},
    { title: 'National Association for Catering and Events'},
    { title: 'National Society of Black Engineers'},
    { title: 'National Society of Collegiate Scholars'},
    { title: 'National Society of Minorities in Hospitality'},
    { title: 'Native American Law Student Association (Graduate) - 43100'},
    { title: 'Naturally'},
    { title: 'Navigators Christian Fellowship'},
    { title: 'Network of Enlightened Women at Boston University'},
    { title: 'Nutrition and Dietetics Club'},
    { title: 'Off The Cuff Magazine'},
    { title: 'Omega Phi Alpha'},
    { title: 'On Broadway'},
    { title: 'On Pitch Music Club'},
    { title: 'On Tap'},
    { title: 'Organization of Pakistani Students'},
    { title: 'Outing Club'},
    { title: 'OutLaw (Graduate) - 43200'},
    { title: 'Overarching Executive Council'},
    { title: 'Panhellenic Council'},
    { title: 'Peer Health Exchange'},
    { title: 'PERIOD'},
    { title: 'Phi Alpha Delta'},
    { title: 'Phi Chi Theta Business Fraternity'},
    { title: 'Phi Kappa Tau'},
    { title: 'Philosophy, Politics & Economics Society'},
    { title: 'Photography Club'},
    { title: 'Physical Therapy Association (Graduate) - 32375'},
    { title: 'Pi Kappa Alpha'},
    { title: 'PIH I EngagE'},
    { title: 'Pre Dental Society'},
    { title: 'Pre Medical Society'},
    { title: 'Pre-Law Review'},
    { title: 'Pre-Law Society'},
    { title: 'Pre-Optometry Club'},
    { title: 'Pre-Physician Assistant Club'},
    { title: 'Pre-Veterinary and Animal Lovers Society'},
    { title: 'Pride in Business'},
    { title: 'Project Sunshine'},
    { title: 'Psi Chi'},
    { title: 'Public Interest Project (Graduate) - 44075'},
    { title: 'Public Relations Student Society of America'},
    { title: 'Puerto Rican Student Association'},
    { title: 'Queer Activist Collective'},
    { title: 'Questrom Korean'},
    { title: 'Questrom Student Government'},
    { title: 'Radical Lawyers: BU Chapter of the National Lawyers Guild'},
    { title: 'Red Cross Volunteers'},
    { title: 'Red Star Theater'},
    { title: 'Reformed University Fellowship at Boston University'},
    { title: 'RememberUxYMAA'},
    { title: 'Robotics & Ambient Intelligence Labs'},
    { title: 'Rocket Propulsion Group'},
    { title: 'Rotaract'},
    { title: 'Running Club'},
    { title: 'Russian Speaking Society'},
    { title: 'Rutépée Ensemble'},
    { title: 'Sabor Latino'},
    { title: 'SAR Student Government'},
    { title: 'Sargent College Honor Society'},
    { title: 'audi Cultural Club'},
    { title: 'School of Hospitality Administration Student Government Association'},
    { title: 'School of Law Real Estate Association'},
    { title: 'Shakespeare Society'},
    { title: "She's the First Boston University Chapter"},
    { title: 'Sigma Beta Rho'},
    { title: 'Sigma Chi Upsilon Colony'},
    { title: 'Sigma Delta Tau'},
    { title: 'Sigma Kappa'},
    { title: 'Sikh Association at Boston University'},
    { title: 'Singapore Students Association'},
    { title: 'Sisters United'},
    { title: 'Ski & Snowboard Club'},
    { title: 'Slow Children at Play'},
    { title: 'Smash Bros Society'},
    { title: 'Society of Asian Scientists and Engineers'},
    { title: 'Society of Athletic Training Students (Graduate)'},
    { title: 'Society of Hispanic Professional Engineers'},
    { title: 'Society of Manufacturing Engineers'},
    { title: 'Society of Physics Students'},
    { title: 'Society of Professional Journalists'},
    { title: 'Society of Women Engineers'},
    { title: 'Sojourn Collegiate Ministry'},
    { title: 'South Campus Hall Council'},
    { title: 'Speak for Yourself'},
    { title: 'Special Needs Advocacy Community'},
    { title: 'Spoon University'},
    { title: 'Sports Business Club'},
    { title: 'Stage Troupe'},
    { title: 'Stand-Up'},
    { title: 'Statistics Club'},
    { title: 'STEAM at BU'},
    { title: 'Step About Boston'},
    { title: 'Strong Women Strong Girls'},
    { title: 'Student Activities Office (SAO)'},
    { title: 'Student Chapter of the Association for Women in Mathematics'},
    { title: 'Student Elections Commission'},
    { title: 'Student Government'},
    { title: 'Student Occupational Therapy Association'},
    { title: "Student Veteran's Association (Graduate)"},
    { title: 'Student Volunteers for Special Needs'},
    { title: 'Students for a Just and Stable Future'},
    { title: 'Students for Decolonization'},
    { title: 'Students for Israel'},
    { title: 'Students for Justice in Palestine'},
    { title: 'Students for Reproductive Freedom'},
    { title: 'Students of Caribbean Ancestry'},
    { title: 'Sustainable Ocean Alliance'},
    { title: 'Sweethearts'},
    { title: 'TableTalk'},
    { title: 'Taiwanese American Student Association'},
    { title: 'Taiwanese Overseas Students Association'},
    { title: 'Taiwanese Student Association (Graduate) - 23300'},
    { title: 'Tali Venture Capital'},
    { title: 'TAMID Group'},
    { title: 'TasteBUds'},
    { title: 'Tau Beta Pi Association'},
    { title: 'Tau Beta Sigma'},
    { title: 'Teach For China at BU'},
    { title: 'Tennis Club'},
    { title: 'Terpsichore'},
    { title: 'Terrier Motorsport'},
    { title: 'Test Club'},
    { title: 'Thai Student Association'},
    { title: 'The Alexander Hamilton Society'},
    { title: 'The Boston University Dear Abbeys'},
    { title: 'The Buzz'},
    { title: 'The DREAM Program'},
    { title: 'The Federalist Society'},
    { title: 'The Politica at Boston University'},
    { title: 'The Redlist'},
    { title: 'The Towers Hall Council'},
    { title: 'The Word and Way Society'},
    { title: 'Theta Tau'},
    { title: 'Third Culture Club'},
    { title: 'Timmy Global Health'},
    { title: 'Trans Listening Circle'},
    { title: 'Treblemakers'},
    { title: 'Turkish Student Association'},
    { title: 'Umoja'},
    { title: 'Undergraduate Biology Journal Club'},
    { title: 'Undergraduate Classics Association'},
    { title: 'Undergraduate Economics Association'},
    { title: 'Undergraduate English Literature Association'},
    { title: 'Undergraduate History Association'},
    { title: 'Undergraduate Psychology Association'},
    { title: 'Undergraduate Public Health Association'},
    { title: 'Undergraduate Real Estate Club'},
    { title: 'Undergraduate Women in Science and Engineering'},
    { title: 'Undergraduate World Languages & Literatures Association'},
    { title: 'UNICEF Campus Initiative'},
    { title: 'Unmanned Aerial Vehicles Team'},
    { title: 'Unofficial Project'},
    { title: 'Upsilon Pi Epsilon'},
    { title: 'VAGMO+'},
    { title: 'Veg(an/Vegetarian) Club'},
    { title: 'Verge'},
    { title: "Veterans' Association (Graduate) - 47900"},
    { title: 'Vibes'},
    { title: 'Vietnamese Student Association'},
    { title: 'Volunteers Around the World Dental'},
    { title: 'Wandering Minds'},
    { title: 'Warren Towers Hall Council'},
    { title: 'West Campus Hall Council'},
    { title: 'Willing Suspension Productions (Graduate) - 47300'},
    { title: 'Women in Computer Science'},
    { title: 'Women in Medicine'},
    { title: "Women's Law Association (Graduate) - 44150"},
    { title: 'Yoga+'},
    { title: 'Young Americans for Freedom'},
    { title: 'Young Americans for Liberty'},
    { title: 'Young Democratic Socialists'},
    { title: 'Zen Mindfulness Community'},
];

const Interest = [
    { title: 'Swimming'},
    { title: 'Football'},
    { title: 'Soccer'},
    { title: 'Walking'},
    { title: 'Running'},
    { title: 'Watching Movies'},
    { title: 'Watching TV shows'},
    { title: 'Basketball'},
    { title: 'Baseball'},
];

const closses = [
    { title: 'EC 103'},
    { title: 'EC 327'},
    { title: 'EC 330'},
    { title: 'EC 311'},
    { title: 'EC 500'},
    { title: 'EC 413'},
    { title: 'EC 447'},


];

const research = [
  { title: 'robotics lab'},
  { title: 'IMB'},
  { title: 'kinsy group'},
  { title: 'EC 311'},
  { title: 'EC 500'},
  { title: 'EC 413'},
  { title: 'EC 447'},


];

const countries = [
  { title: 'Afghanistan'},
  { title: 'Albania'},
  { title: 'Algeria'},
  { title: 'Andorra'},
  { title: 'Angola'},
  { title: 'Antigua and Barbuda'},
  { title: 'Argentina'},
  { title: 'Armenia'},
  { title: 'Australia'},
  { title: 'Austria'},
  { title: 'Austrian Empire'},
  { title: 'Azerbaijan'},
  { title: 'Baden'},
  { title: 'Bahamas'},
  { title: 'Bahrain'},
  { title: 'Bangladesh'},
  { title: 'Barbados'},
  { title: 'Bavaria'},
  { title: 'Belarus'},
  { title: 'Belgium'},
  { title: 'Belize'},
  { title: 'Benin (Dahomey)'},
  { title: 'Bolivia'},
  { title: 'Bosnia and Herzegovina'},
  { title: 'Botswana'},
  { title: 'Brazil'},
  { title: 'Brunei'},
  { title: 'Brunswick and Lüneburg'},
  { title: 'Bulgaria'},
  { title: 'Burkina Faso (Upper Volta)'},
  { title: 'Burma'},
  { title: 'Burundi'},
  { title: 'Cabo Verde'},
  { title: 'Cambodia'},
  { title: 'Cameroon'},
  { title: 'Canada'},
  { title: 'Cayman Islands'},
  { title: 'Central African Republic'},
  { title: 'Central American Federation'},
  { title: 'chad'},
  { title: 'Chile'},
  { title: 'China'},
  { title: 'Colombia'},
  { title: 'Comoros'},
  { title: 'Congo Free State'},
  { title: 'Costa Rica'},
  { title: 'Cote d’Ivoire (Ivory Coast)'},
  { title: 'Croatia'},
  { title: 'Cuba'},
  { title: 'Cyprus'},
  { title: 'Czechia'},
  { title: 'Czechoslovakia'},
  { title: 'Democratic Republic of the Congo'},
  { title: 'Denmark'},
  { title: 'Djibouti'},
  { title: 'Dominica'},
  { title: 'Dominican Republic'},
  { title: 'Duchy of Parma'},
  { title: 'East Germany (German Democratic Republic)'},
  { title: 'Ecuador'},
  { title: 'Egypt'},
  { title: 'El Salvador'},
  { title: 'Equatorial Guinea'},
  { title: 'Eritrea'},
  { title: 'Estonia'},
  { title: 'Eswatini'},
  { title: 'Ethiopia'},
  { title: 'Fiji'},
  { title: 'Finland'},
  { title: 'France'},
  { title: 'Gabon'},
  { title: 'Gambia'},
  { title: 'Georgia'},
  { title: 'Germany'},
  { title: 'Ghana'},
  { title: 'Grand Duchy of Tuscany'},
  { title: 'Greece'},
  { title: 'Grenada'},
  { title: 'Guatemala'},
  { title: 'Guinea'},
  { title: 'Guinea-Bissau'},
  { title: 'Guyana'},
  { title: 'Haiti'},
  { title: 'Hanover'},
  { title: 'Hanseatic Republics'},
  { title: 'Hawaii'},
  { title: 'Hesse'},
  { title: 'Holy See'},
  { title: 'Honduras'},
  { title: 'Hungary'},
  { title: 'Iceland'},
  { title: 'India'},
  { title: 'Indonesia'},
  { title: 'Iran'},
  { title: 'Iraq'},
  { title: 'Ireland'},
  { title: 'Israel'},
  { title: 'Italy'},
  { title: 'Jamaica'},
  { title: 'Japan'},
  { title: 'Jordan'},
  { title: 'Kazakhstan'},
  { title: 'Kenya'},
  { title: 'Kingdom of Serbia/Yugoslavia'},
  { title: 'Kiribati'},
  { title: 'Korea'},
  { title: 'Kosovo'},
  { title: 'Kuwait'},
  { title: 'Kyrgyzstan'},
  { title: 'Laos'},
  { title: 'Latvia'},
  { title: 'Lebanon'},
  { title: 'Lesotho'},
  { title: 'Lew Chew (Loochoo)'},
  { title: 'Liberia'},
  { title: 'Libya'},
  { title: 'Liechtenstein'},
  { title: 'Lithuania'},
  { title: 'Luxembourg'},
  { title: 'Madagascar'},
  { title: 'Malawi'},
  { title: 'Malaysia'},
  { title: 'Maldives'},
  { title: 'Mali'},
  { title: 'Malta'},
  { title: 'Marshall Islands'},
  { title: 'Mauritania'},
  { title: 'Mauritius'},
  { title: 'Mecklenburg-Schwerin'},
  { title: 'Mecklenburg-Strelitz'},
  { title: 'Mexico'},
  { title: 'Micronesia'},
  { title: 'Moldova'},
  { title: 'Monaco'},
  { title: 'Mongolia'},
  { title: 'Montenegro'},
  { title: 'Morocco'},
  { title: 'Mozambique'},
  { title: 'Namibia'},
  { title: 'Nassau'},
  { title: 'Nauru'},
  { title: 'Nepal'},
  { title: 'Netherlands'},
  { title: 'New Zealand'},
  { title: 'Nicaragua'},
  { title: 'Niger'},
  { title: 'Nigeria'},
  { title: 'North Macedonia'},
  { title: 'Norway'},
  { title: 'Oldenburg'},
  { title: 'Oman'},
  { title: 'Orange Free State'},
  { title: 'Pakistan'},
  { title: 'Palau'},
  { title: 'Panama'},
  { title: 'Papal States'},
  { title: 'Papua New Guinea'},
  { title: 'Paraguay'},
  { title: 'Peru'},
  { title: 'Philippines'},
  { title: 'Piedmont-Sardinia'},
  { title: 'Poland'},
  { title: 'Portugal'},
  { title: 'Qatar'},
  { title: 'Saint Kitts and Nevis'},
  { title: 'Saint Lucia'},
  { title: 'Saint Vincent and the Grenadines'},
  { title: 'Samoa'},
  { title: 'San Marino'},
  { title: 'Sao Tome and Principe'},
  { title: 'Saudi Arabia'},
  { title: 'Senegal'},
  { title: 'Serbia'},
  { title: 'Seychelles'},
  { title: 'Sierra Leone'},
  { title: 'Singapore'},
  { title: 'Slovakia'},
  { title: 'Slovenia'},
  { title: 'Solomon Islands'},
  { title: 'Somalia'},
  { title: 'South Africa'},
  { title: 'South Sudan'},
  { title: 'Spain'},
  { title: 'Sri Lanka'},
  { title: 'Suriname'},
  { title: 'Sweden'},
  { title: 'Switzerland'},
  { title: 'Syria'},
  { title: 'Tajikistan'},
  { title: 'Tanzania'},
  { title: 'Thailand'},
  { title: 'Timor-Leste'},
  { title: 'Togo'},
  { title: 'Tonga'},
  { title: 'Trinidad and Tobago'},
  { title: 'Tunisia'},
  { title: 'Turkey'},
  { title: 'Turkmenistan'},
  { title: 'Tuvalu'},
  { title: 'Uganda'},
  { title: 'Ukraine'},
  { title: 'United Arab Emirates'},
  { title: 'United Kingdom'},
  { title: 'United States of America'},
  { title: 'Uruguay'},
  { title: 'Uzbekistan'},
  { title: 'Vanuatu'},
  { title: 'Venezuela'},
  { title: 'Vietnam'},
  { title: 'Yemen'},
  { title: 'Zambia'},
  { title: 'Zimbabwe'},
 
];
