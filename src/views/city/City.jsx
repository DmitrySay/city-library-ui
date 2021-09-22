import React, {useCallback, useEffect, useState} from 'react';
import {getCityById} from "../../api/requests/city";
import {useHistory, useParams} from "react-router-dom";
import useStyles from "./city.styles";
import {Button} from "@material-ui/core";
import PATHS from '../../router/paths';
import Modal from "../../Modal";
import EditIcon from '@material-ui/icons/Edit';
import CityForm from "./CityForm";

const City = () => {
    const history = useHistory();
    const classes = useStyles();
    const {cityId} = useParams()
    const [city, setCity] = useState({});
    const [openEditModal, setOpenEditModal] = useState(false);

    const fetchCityHandler = useCallback(() => {
        getCityById(cityId)
            .then(response => {
                setCity(response.data);
            })
            .catch((error) => {
                console.log("error", error)
            })
    }, [cityId])

    useEffect(() => {
        fetchCityHandler();
    }, [fetchCityHandler]);

    const returnHandle = () => {
        history.push(`${PATHS.cities}`);
    }

    return (
        <>
            <div className={classes.root}>
                <div className={classes.city}>
                    <h1>{city.name}</h1>
                    <Button
                        size="small"
                        className={classes.editButton}
                        startIcon={<EditIcon/>}
                        onClick={() => setOpenEditModal(true)}
                    >
                        edit
                    </Button>
                    <Modal
                        white
                        title="Edit"
                        open={openEditModal}
                        onClose={() => setOpenEditModal(false)
                        }>

                        <CityForm
                            city={city}
                            setOpenEditModal={setOpenEditModal}
                        />

                    </Modal>
                    <img
                        src={`${city.photo}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${city.photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={city.name}
                        loading="lazy"
                    />
                    <Button color="primary" variant="contained" onClick={returnHandle}>
                        Return
                    </Button>
                </div>
            </div>
        </>
    )
}

export default City;