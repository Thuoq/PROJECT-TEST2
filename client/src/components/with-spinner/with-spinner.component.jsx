import React from 'react';
import './with-spinner.styles.scss';


const withSpinner = WrapperComponent => {
    const Spinner =({isLoading , ...otherProps}) => {
        return isLoading ? (
            <div className ="spinner-overlay">
                <div className ="spinner-container"/>
            </div>
        ) :(
            <WrapperComponent {...otherProps} />
        )
    }
    return Spinner;
}

export default withSpinner;