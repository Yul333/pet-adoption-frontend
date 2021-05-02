import React from 'react'

const SearchType = () => {
    return (
        <>
            <div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadioInline1">Basic Search</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadioInline2">Advanced Search</label>
                </div>
            </div>
        </>
    )
}

export default SearchType
