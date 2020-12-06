import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({

  autoComplete: {
    width: 300,
    margin: 'auto',
  }
}));

export default function SignUpAct(props) {
  const clubProp = ('club' in props.currentData) ? props.currentData.club : '';
  const researchProp = ('research' in props.currentData) ? props.currentData.research : '';
  const completeHandler = props.completeHandler;
  const setFormData = props.setFieldsHandler;
  const classes = useStyles();
  let [club, setClub] = useState(clubProp);
  let [research, setResearch] = useState(researchProp);

  useEffect(() => {
    updateCompleteStatus();
  });
 
  const updateClub = (event) => {
    console.log(event);
    if (event.target.id === '') {
      setFormData({club: ''});
      setClub('');
    } else {
      setFormData({club: event.target.textContent});
      setClub(event.target.textContent);
    }
  }
  const updateResearch = (event) => {
    if (event.target.id === '') {
      setFormData({research: ''});
      setResearch('');
    } else {
      setFormData({research: event.target.textContent});
      setResearch(event.target.textContent);
    }
  }

  const updateCompleteStatus = () => {
    if (club !== '' && research !== '') {
      completeHandler(true);
    } else {
      completeHandler(false);
    }
  }

  

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
    >  
     
      <Grid item xs={12} className={classes.element}>
        <Autocomplete
            multiple
            id="clubBox"
            className={classes.autoComplete}
            options={Club}
            getOptionLabel={(option) => option.title}
            getOptionSelected={(option) => option.title === club}
            onChange={(event) => updateClub(event)}
            //value={(club === '')? null : {title: club}}
            renderInput={
              (params) => <TextField 
                            {...params} 
                            label="Clubs?" 
                            margin="normal" 
                            variant="outlined"
                          />
            }
          />
        </Grid>
        <Grid item xs={12} className={classes.element}>
            <Autocomplete
                multiple
                id="researchBox"
                className={classes.autoComplete}
                options={Research}
                getOptionLabel={(option) => option.title}
                getOptionSelected={(option) => option.title === research}
                onChange={(event) => updateResearch(event)}
                value={(research === '')? null : [{title: research}]}
                renderInput={
                  (params) => <TextField 
                                {...params} 
                                label="Research Groups?" 
                                margin="normal" 
                                variant="outlined"
                              />
                }
              />
     
        </Grid>

    </Grid>
  )
}


const Club = [
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

const Research = [
    { title: 'Robotics lab'},
    { title: 'IMB'},
    { title: 'DBLab Databases and Data Mining'},
    { title: 'BUSec BU Security Group'},
    { title: 'BOSS BU Operating Systems and Services'},
    { title: 'IVC Image and Video Computing'},
    { title: 'NRG Networks Research Group'},
    { title: 'TCS Theoretical Computer Science'},
    { title: 'LISP Learning, Intelligence, + Signal Processing'},
    { title: 'Beeler Research Group'},
    { title: 'BU Dental Student Research Group'},

  ];