
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(20),
    marginBottom: theme.spacing(10),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));
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
    return (

        <div>

            <p style={{
                'white-space': 'pre-wrap'
                }}>{"\n"}
            </p>
            <p style={{
                'white-space': 'pre-wrap'
                }}>{"\n"}
            </p>

            <Grid item xs={10} sm={5}>
                    <div className={classes.paper}>

                     <h2>Step 1: Tell us more about your education</h2>

                     </div>
            </Grid>

            <Grid item xs={12} sm={7}
                 container
                direction="row"
                justify="space-between"
                 alignItems="center">
                <Grid item xs={10} sm={5}>
                    <div className={classes.paper}>

                     <h2>Major</h2>

                     </div>
                </Grid>
                <Autocomplete
                     {...Majors}
                     id="Major"
                    style={{ width: 300 }}
                    debug
                    renderInput={(params) => <TextField {...params} label="Major" margin="normal" />}

                />

            </Grid>

            <Grid item xs={12} sm={7}
                 container
                direction="row"
                justify="space-between"
                 alignItems="center">
                <Grid item xs={10} sm={5}>
                    <div className={classes.paper}>

                     <h2>Minor</h2>

                     </div>
                </Grid>
                <Autocomplete
                     {...Minors}
                     id="Minor"
                    style={{ width: 300 }}
                    debug
                    renderInput={(params) => <TextField {...params} label="Minor" margin="normal" />}

                />

            </Grid>

            <Grid item xs={10} sm={5}>
                    <div className={classes.paper}>

                     <h2>Step 2: Tell us more about your Extracurricular Activities</h2>


                     </div>
            </Grid>

            <Grid item xs={12} sm={7}
                 container
                direction="row"
                justify="space-between"
                 alignItems="center">
                <Grid item xs={10} sm={5}>
                    <div className={classes.paper}>

                     <h2>Clubs</h2>

                     </div>
                </Grid>
                <Autocomplete
                     {...Clubs}
                     id="Club"
                    style={{ width: 300 }}
                    debug
                    renderInput={(params) => <TextField {...params} label="Club" margin="normal" />}

                />
            </Grid>

            <Grid item xs={10} sm={5}>
                    <div className={classes.paper}>

                     <h2>Step 3: Tell us more about your Classes & Interest</h2>

                     </div>
            </Grid>

            <Grid item xs={12} sm={7}
                 container
                direction="row"
                justify="space-between"
                 alignItems="center">
                <Grid item xs={10} sm={5}>
                    <div className={classes.paper}>

                     <h2>Classes</h2>

                     </div>
                </Grid>
                <Autocomplete
                     {...Closses}
                     id="Classes"
                    style={{ width: 300 }}
                    debug
                    renderInput={(params) => <TextField {...params} label="Classes" margin="normal" />}

                />

            </Grid>

            <Grid item xs={12} sm={7}
                 container
                direction="row"
                justify="space-between"
                 alignItems="center">
                <Grid item xs={10} sm={5}>
                    <div className={classes.paper}>

                     <h2>Interest</h2>

                     </div>
                </Grid>
                <Autocomplete
                     {...Interests}
                     id="Interests"
                    style={{ width: 300 }}
                    debug
                    renderInput={(params) => <TextField {...params} label="Interests" margin="normal" />}

                />

            </Grid>
            <Grid item xs={14} sm={9}>
                  <div className={classes.paper}>

                   <h2>Note that you can always add more information later!</h2>


                   </div>
            </Grid>







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
