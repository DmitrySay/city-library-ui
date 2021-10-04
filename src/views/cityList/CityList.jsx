import React, {useCallback, useEffect, useState} from 'react';
import useStyles from "./cities.styles";
import {getCities} from "../../api/requests/city";
import {TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import PATHS from '../../router/paths';
import {useSnackbar} from "notistack";
import {generateErrorNotification} from '../../templates/notifications';
import {Pagination} from "@material-ui/lab";
import CityImageList from "./CityImageList";

const CityList = () => {
    const {enqueueSnackbar} = useSnackbar();
    const history = useHistory();
    const classes = useStyles();
    const [cities, setCities] = useState([]);
    const [inputSearchValue, setInputSearchValue] = useState('');

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const searchChangeHandler = (event) => {
        const inputSearchValue = event.target.value;
        setInputSearchValue(inputSearchValue);
    }

    const fetchCitiesHandler = useCallback(() => {
        getCities(inputSearchValue, currentPage)
            .then(response => {
                setCities(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                console.error("error", error)
                enqueueSnackbar(
                    ...generateErrorNotification('Something went wrong. Try again later.')
                );
            })
    }, [currentPage, inputSearchValue])

    useEffect(() => {
        fetchCitiesHandler();
    }, [fetchCitiesHandler]);

    const handleClick = (cityId) => {
        history.push(`${PATHS.cities}/` + cityId);
    }

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };


    return (
        <>
            <div className={classes.root}>
                <section className={classes.section}>
                    <TextField
                        variant="outlined"
                        placeholder="SEARCH CITY BY NAME"
                        onChange={searchChangeHandler}
                        value={inputSearchValue}
                    />
                    <CityImageList
                        handleClick = {handleClick}
                        cities={cities}
                    />
                    <Pagination
                        count={totalPages}
                        showFirstButton
                        showLastButton
                        onChange={handleChangePage}
                        page={currentPage}
                        shape="rounded"
                        color="secondary"
                    />
                </section>
            </div>
        </>
    )
}

export default CityList;


