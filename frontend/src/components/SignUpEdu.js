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

export default function SignUpEdu(props) {
  const majorProp = ('major' in props.currentData) ? props.currentData.major : '';
  const minorProp = ('minor' in props.currentData) ? props.currentData.minor : '';
  const class_optionsProp = ('class_options' in props.currentData) ? props.currentData.class_options : '';
  const completeHandler = props.completeHandler;
  const setFormData = props.setFieldsHandler;
  const classes = useStyles();
  let [major, setMajor] = useState(majorProp);
  let [minor, setMinor] = useState(minorProp);
  let [class_options, setClass_options] = useState(class_optionsProp);

  useEffect(() => {
    updateCompleteStatus();
  });

  const updateMajor = (event) => {
    if (event.target.id === '') {
      setFormData({major: ''});
      setMajor('');
    } else {
      setFormData({major: event.target.textContent});
      setMajor(event.target.textContent);
    }
  }
  const updateMinor = (event) => {
    if (event.target.id === '') {
      setFormData({minor: ''});
      setMinor('');
    } else {
      setFormData({minor: event.target.textContent});
      setMinor(event.target.textContent);
    }
  }
  const updateClass_options = (event) => {
    if (event.target.id === '') {
      setFormData({class_options: ''});
      setClass_options('');
    } else {
      setFormData({class_options: event.target.textContent});
      setClass_options(event.target.textContent);
    }
  }

  const updateCompleteStatus = () => {
    if (class_options !== '' && minor !== '' && major !== '') {
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
            
            id="majorBox"
            multiple
            limitTags={2}
            className={classes.autoComplete}
            options={Major}
            getOptionLabel={(option) => option.title}
            getOptionSelected={(option) => option.title === major}
            onChange={(event) => updateMajor(event)}
           // value={(major === '' )? null : {title: major}}
            filterSelectedOptions
            renderInput={
              (params) => <TextField 
                            {...params} 
                            label="What's your major?" 
                            margin="normal" 
                            variant="outlined"
                          />
            }
          />
        </Grid>

      
        <Grid item xs={12} className={classes.element}>
            <Autocomplete
                multiple
                id="minorBox"
                className={classes.autoComplete}
                options={Minor}
                getOptionLabel={(option) => option.title}
                getOptionSelected={(option) => option.title === minor}
                onChange={(event) => updateMinor(event)}
                //value={(minor === '')? 'null' : {title: minor}}
                renderInput={
                  (params) => <TextField 
                                {...params} 
                                label="What's your minor?" 
                                margin="normal" 
                                variant="outlined"
                              />
                }
              />
          </Grid>
     

        <Grid item xs={12} className={classes.element}>
          <Autocomplete
            multiple
            id="classBox"
            className={classes.autoComplete}
            options={Class_options}
            getOptionLabel={(option) => option.title}
            getOptionSelected={(option) => option.title === class_options}
            onChange={(event) => updateClass_options(event)}
            //value={(class_options === '')? null : {title: class_options}}
            //inputValue={class_options}
            renderInput={
              (params) => <TextField 
                            {...params} 
                            label="Classes?" 
                            margin="normal" 
                            variant="outlined"
                          />
            }
          />
      </Grid>
    </Grid>
  )
}


const Major = [
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

const Minor = [
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

const Class_options = [
  { title: 'EC 103'},
  { title: 'EC 311'},
  { title: 'EC 327'},
  { title: 'EC 330'},
  { title: 'EC 381'},
  { title: 'EC 400'},
  { title: 'EC 401'},
  { title: 'EC 402'},
  { title: 'EC 410'},
  { title: 'EC 412'},
  { title: 'EC 413'},
  { title: 'EC 414'},
  { title: 'EC 415'},
  { title: 'EC 416'},
  { title: 'EC 417'},
  { title: 'EC 440'},
  { title: 'EC 441'},
  { title: 'EC 444'},
  { title: 'EC 447'},
  { title: 'EC 450'},
  { title: 'EC 451'},
  { title: 'EC 455'},
  { title: 'EC 456'},
  { title: 'EC 463'},
  { title: 'EC 464'},


];