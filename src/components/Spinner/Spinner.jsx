import React from 'react'
import PropTypes from 'prop-types';

const Spinner = ({size}) => {
    return <div style={{width:size,height:size,backgroundColor:"black"}}>TempSpinner</div>
}

Spinner.propTypes = {
    size: PropTypes.string
  };

export default Spinner