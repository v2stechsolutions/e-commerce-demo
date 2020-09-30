import React from 'react'
import PropTypes from 'prop-types'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Filters(props) {
    // const { filterData } = props
    const { filterData } = props
    return (
        <>
            <ul className="filter d-flex justify-content-between">
                <li>Filters:</li>
                <li>Clean All</li>
            </ul>
            {
                filterData.map((filter, i) => {
                    return (
                        <React.Fragment key={"filter" + i}>
                            <ul className="category d-flex justify-content-between" key={"fl" + i}>
                                <li>{filter.filterTitle}</li>
                                <li><ExpandMoreIcon /></li>
                            </ul>
                            {
                                filter.filtersList.length > 0
                                    ? filter.filtersList.map((item, j) => {
                                        return (
                                            <ul className="watch d-flex justify-content-between" key={item.id}>
                                                <li>
                                                    <input type="checkbox" id={item.id} name={filter.filterId} value={item.id} />
                                                    <label htmlFor={item.id}> {item.filterText}</label>
                                                </li>
                                                {
                                                    filter.filterId !== "brands"
                                                        ? <li>{item.productCount}</li>
                                                        : null
                                                }

                                            </ul>
                                        )
                                    })
                                    : null
                            }
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

Filters.propTypes = {
    filterData: PropTypes.array.isRequired
}

Filters.defaultProps = {
    filterData: []
}

export default Filters

