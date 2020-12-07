import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  element: {
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  textField: {
    margin: '5px',
  },
  autoComplete: {
    width: 300,
    margin: 'auto',
  }
}));

export default function SignUpInfo(props) {
  const firstNameProp = ('firstName' in props.currentData) ? props.currentData.firstName : '';
  const lastNameProp = ('lastName' in props.currentData) ? props.currentData.lastName : '';
  const countryProp = ('country' in props.currentData) ? props.currentData.country : '';
  const completeHandler = props.completeHandler;
  const setFormData = props.setFieldsHandler;
  const classes = useStyles();
  let [firstName, setFirstName] = useState(firstNameProp);
  let [lastName, setLastName] = useState(lastNameProp);
  let [country, setCountry] = useState(countryProp);

  useEffect(() => {
    updateCompleteStatus();
  });

  const updateFirstName = (event) => {
    setFormData({firstName: event.target.value});
    setFirstName(event.target.value);
  }

  const updateLastName = (event) => {
    setFormData({lastName: event.target.value});
    setLastName(event.target.value);
  }

  const updateCountry = (event) => {
    if (event.target.id === '') {
      setFormData({country: ''});
      setCountry('');
    } else {
      setFormData({country: event.target.textContent});
      setCountry(event.target.textContent);
    }
  }

  const updateCompleteStatus = () => {
    if (firstName !== '' && lastName !== '' && country !== '') {
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
        <TextField 
          id="firstName" 
          label="First Name" 
          variant="outlined" 
          className={classes.textField}
          onChange={(event) => updateFirstName(event)} 
          value={firstName}
        />
        <TextField 
          id="lastName" 
          label="Last Name" 
          variant="outlined"
          className={classes.textField}
          onChange={(event) => updateLastName(event)} 
          value={lastName}
        />
      </Grid>
      <Grid item xs={12} className={classes.element}>
        <Autocomplete
          id="countryBox"
          className={classes.autoComplete}
          options={countries}
          getOptionLabel={(option) => option.title}
          getOptionSelected={(option) => option.title === country}
          onChange={(event) => updateCountry(event)}
          value={(country === '')? null : {title: country}}
          renderInput={
            (params) => <TextField 
                          {...params} 
                          label="Where Are You From?" 
                          className={classes.textField}
                          variant="outlined"
                        />
          }
        />
      </Grid>
    </Grid>
  )
}

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
