import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Style from './AddForm.module.scss';

const AddForm = () => (
  <form className={Style.AddForm}>
    <input className={Style.AddForm__Input} maxLength="50" placeholder="Описание моей новой задачи" />
    <button type="button" className={Style.AddForm__Button}>
      <FontAwesomeIcon icon={faPlus} className={Style.AddForm__ButtonIcon} />
      <p className={Style.AddForm__ButtonText}>Добавить задачу</p>
    </button>
  </form>
);

export default AddForm;
