import React from "react";
import './styles.scss';
import {connect} from "react-redux";
import {getSearchData, getLocationDataSuccess} from "../../actions/weather";
import Select from 'react-select';

function Search({searchData, weatherData, isLoading, getSearchData, getLocationDataSuccess}) {
  //controlabel input doesn`t work ??
  const [name, setName] = React.useState('');

  const handleChange = (name) => {
    setName(name);
    if(name.trim().length !== 0) getSearchData(name);
  }

  const handleSubmit = (city) => {
    getLocationDataSuccess(city);
  }
  const selectStyles = {
    container: (styles) => ({ ...styles, width: '100%' }),
    control: (styles) => ({
      ...styles,
      borderColor: '#cccccc',
      boxShadow: 'none',

      ':active': {
        ...styles[':active'],
        borderColor: '#cccccc'
      },

      ':hover': {
        ...styles[':hover'],
        borderColor: '#cccccc'
      }
    }),
    options: (styles) => ({ ...styles, backgroundColor: 'white' }),
  };

  return (
    <div className="search" style={weatherData ? undefined : {backgroundColor: '#f6f6f8'}}>
        <Select
          isLoading={isLoading}
          placeholder="Search for places ..."
          closeMenuOnSelect
          // escapeClearsValue
          options={searchData}
          onChange={handleSubmit}
          onInputChange={handleChange}
          value={name}
          getOptionLabel={(option) => `${option.name}, ${option.country_code}`}
          styles={selectStyles}
        />
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchData: state.weather.searchData,
  weatherData: state.weather.weatherData,
  isLoading: state.weather.isLoading
})


const mapDispatchToProps = {
  getSearchData,
  getLocationDataSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
