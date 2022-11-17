import React from "react";
import success from '../../images/succsess.svg';
import wrong from '../../images/wrong.svg';
import {useAppContext} from "../../context/AppContext";
import styles from './InfoTooltip.module.scss';

const InfoTooltip = () => {
  const {handleClosePopups, isInfoTooltipPopupOpen} = useAppContext();

  return (
    <div className={`${styles.infoTooltip} ${isInfoTooltipPopupOpen.isOpenTooltip ? `${styles.infoTooltip_open} open` : ''}`}>
      <div className={styles.infoTooltip__overlay}>
        <button
          onClick={handleClosePopups}
          type="button"
          aria-label="ClosePopUp"
        >
        </button>
        <div className={styles.infoTooltip__content}>
          <img src={isInfoTooltipPopupOpen.type === 'success' ? success : wrong} alt={isInfoTooltipPopupOpen.type}/>
          <h4>{isInfoTooltipPopupOpen.message}</h4>
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;