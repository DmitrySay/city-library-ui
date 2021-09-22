import {Fragment, useRef} from 'react';
import classes from './cityForm.module.css';

const CityForm = ({
                      city,
                      setOpenEditModal = () => {
                      }
                  }) => {

    const cityNameInputRef = useRef();
    const cityPhotoInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = cityNameInputRef.current.value;
        const enteredText = cityPhotoInputRef.current.value;

        console.log("submitFormHandler", enteredAuthor, enteredText)
        setOpenEditModal(false);

        //todo update
    }

    return (
        <Fragment>
            <form
                className={classes.form}
                onSubmit={submitFormHandler}
            >
                <div className={classes.control}>
                    <label htmlFor='name'>City name</label>
                    <input type='text' id='author' ref={cityNameInputRef} value={city.name}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='photo'>Text</label>
                    <textarea id='photo' rows='5' ref={cityPhotoInputRef} value={city.photo}/>
                </div>
                <div className={classes.actions}>
                    <button className='btn'>Update</button>
                </div>
            </form>

        </Fragment>
    );
};

export default CityForm;
