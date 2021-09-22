import React, {useCallback, useEffect, useState} from 'react';
import useStyles from "./cities.styles";
import {getCities} from "../../api/requests/city";
import {ImageList, ImageListItem} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import PATHS from '../../router/paths';

const CityList = () => {
    const history = useHistory();
    const classes = useStyles();
    const [cities, setCities] = useState([]);

    const fetchCitiesHandler = useCallback(() => {
        getCities()
            .then(response => {
                setCities(response.data.content);
            })
            .catch((error) => {
                console.error("error", error)
            })
    }, [])

    useEffect(() => {
        fetchCitiesHandler();
    }, [fetchCitiesHandler]);

    const handleClick = (cityId) => {
        history.push(`${PATHS.cities}/` + cityId);
    }

    return (
        <>
            <div className={classes.root}>
                <section className={classes.section}>
                    <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                        {cities.map((city) => (
                            <ImageListItem key={city.id}>
                                <img
                                    src={`${city.photo}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${city.photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={city.name}
                                    loading="lazy"
                                    onClick={() => handleClick(city.id)}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </section>
            </div>
        </>
    )
}

export default CityList;


