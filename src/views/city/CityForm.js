import { useState } from 'react';
import classes from './cityForm.module.css';
import { updateCity } from '../../api/requests/city';
import { generateErrorNotification, generateSuccessNotification } from '../../templates/notifications';
import { useSnackbar } from 'notistack';

const CityForm = ({
                    city,
                    setCity = () => {
                    },
                    setOpenEditModal = () => {
                    },
                  }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState(city.name);
  const [photo, setPhoto] = useState(city.photo);

  const nameChangeHandler = (e) => {
    let name = e.target.value;
    setName(name);
  };
  const photoChangeHandler = (e) => {
    let photo = e.target.value;
    setPhoto(photo);
  };

  function submitFormHandler(event) {
    event.preventDefault();
    let formCity = {
      id: city.id,
      name: name,
      photo: photo,
    };
    updateCity(formCity)
      .then(response => {
        setCity(response.data);
        enqueueSnackbar(
          ...generateSuccessNotification('Updated!'),
        );
      })
      .catch(error => {
        enqueueSnackbar(
          ...generateErrorNotification('Something went wrong. Try again later.'),
        );
      });
    setOpenEditModal(false);
  }

  return (
    <>
      <form
        className={classes.form}
        onSubmit={submitFormHandler}
      >
        <div className={classes.control}>
          <label htmlFor="name">City name</label>
          <input type="text" id="name"
                 value={name}
                 onChange={nameChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="photo">City photo</label>
          <textarea id="photo"
                    rows="5"
                    value={photo}
                    onChange={photoChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <button className="btn">Update</button>
        </div>
      </form>
    </>
  );
};

export default CityForm;
