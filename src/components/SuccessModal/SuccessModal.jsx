import React from 'react';
import styles from './SuccessModal.module.scss';
import Image from 'next/image';
import Check from '../../../public/assets/check.png';

const SuccessModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.successModal}>
        <div className={styles.iconContainer}>
          {/* Replace "/path-to-check-icon" with the correct path to the Check icon */}
          <Image className={styles.img} src={Check} width={100} height={100} alt="success message"/>
        </div>
        <h2 className={styles.successHeading}>Success!</h2>
        <p className={styles.successText}>500 entries successfully uploaded.</p>
        <div className={styles.buttonsContainer}>
          <button className={styles.goToEntriesButton}>Go To My Entries</button>
          <button className={styles.cancelButton} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
