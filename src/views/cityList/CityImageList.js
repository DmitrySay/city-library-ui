import {ImageList, ImageListItem} from "@material-ui/core";
import React from "react";

const CityImageList = (props) => {

    if (props.cities.length === 0) {
        return <h2 style={{margin: '100px'}}> No cities found! </h2>
    }

    return (
        <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
            {props.cities.map((city) => (
                <ImageListItem key={city.id}>
                    <img
                        src={`${city.photo}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${city.photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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