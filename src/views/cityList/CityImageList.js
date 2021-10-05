import React from "react";
import {ImageList, ImageListItem} from "@material-ui/core";
import useStyles from "./cities.styles";

const CityImageList = (props) => {
    const classes = useStyles();

    if (props.cities.length === 0) {
        return <h2 style={{margin: '100px'}}> No cities found! </h2>
    }

    return (
        <ImageList  cols={3} rowHeight={200}>
            {props.cities.map((city) => (
                <ImageListItem key={city.id}>
                    <img className={classes.image}
                        src={`${city.photo}`}
                        srcSet={`${city.photo}`}
                        alt={city.name}
                        loading="lazy"
                        onClick={() => props.handleClick(city.id)}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default CityImageList;