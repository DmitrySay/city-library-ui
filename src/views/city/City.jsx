import React, { useCallback, useEffect, useState } from 'react';
import { getCityById } from '../../api/requests/city';
import { useHistory, useParams } from 'react-router-dom';
import useStyles from './city.styles';
import { Button } from '@material-ui/core';
import PATHS from '../../router/paths';
import Modal from '../../components/modal';
import EditIcon from '@material-ui/icons/Edit';
import CityForm from './CityForm';
import { useAuth } from '../../context/AuthContext';
import { generateErrorNotification } from '../../templates/notifications';
import { useSnackbar } from 'notistack';
import { AuthService } from '../../services/auth.service';

const City = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const classes = useStyles();
  const { cityId } = useParams();
  const [city, setCity] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  const { profile } = useAuth();

  const fetchCityHandler = useCallback(() => {
    getCityById(cityId)
      .then(response => {
        setCity(response.data);
      })
      .catch((error) => {
        console.error('error', error);
        enqueueSnackbar(
          ...generateErrorNotification('Something went wrong. Try again later.'),
        );
      });
  }, [cityId]);

  useEffect(() => {
    fetchCityHandler();
  }, [fetchCityHandler]);

  const returnHandle = () => {
    history.push(`${PATHS.cities}`);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.city}>
          <div className={classes.header}>
            <h1>{city.name}</h1>
            {AuthService.checkEditPermission(profile) && (
              <Button
                size="small"
                className={classes.editButton}
                startIcon={<EditIcon />}
                onClick={() => setOpenEditModal(true)}
              >
                edit
              </Button>)}
          </div>
          <Modal
            white
            open={openEditModal}
            onClose={() => setOpenEditModal(false)
            }>
            <CityForm
              city={city}
              setCity={setCity}
              setOpenEditModal={setOpenEditModal} />
          </Modal>
          <img className={classes.image}
               src={city.photo}
               srcSet={city.photo}
               alt={city.name}
               loading="lazy"
          />
          <Button color="primary" variant="contained" onClick={returnHandle}>
            Return
          </Button>
        </div>
      </div>
    </>
  );
};

export default City;
