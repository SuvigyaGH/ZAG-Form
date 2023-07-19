import React, { useState } from 'react';
import styles from './Form.module.scss';
import Spin from '../../../public/assets/spin.svg';
import Upload from '../../../public/assets/upload.png';
import Email from '../../../public/assets/email.png';
import Check from '../../../public/assets/email.png';
import EmailIcon from '../EmailIcon';
import UploadIcon from '../UploadIcon';
import Image from 'next/image';
import SuccessModal from '../SuccessModal/SuccessModal';

// SubmitForm component
const SubmitForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [fileData, setFileData] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State to control the visibility of the success modal

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsValidating(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        const contents = event.target.result;
        setFileData(contents);
        setIsValidating(false);
        setSubmitDisabled(false);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit action here
    // Show success modal with appropriate message
    setShowSuccessModal(true);
  };


  const handleCloseSuccessModal = () => {
    setFullName('');
    setEmail('');
    setFileData(null);
    setIsValidating(false);
    setSubmitDisabled(true);
    setShowSuccessModal(false);
  };
  return (
    <div className={styles.submitForm}>
      <h1>Submit form</h1>
      <div className={styles.formGroup}>
        <h2 className={styles.label}>Full Name</h2>
        <div className={styles.inputContainer}>
          {/* <EmailIcon className={styles.icon} /> */}
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <h2 className={styles.label}>Email</h2>
        <span className={styles.inputContainer}>
          <Image src={Email}className={styles.icon} alt="email icon"></Image>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </span>
      </div>
      <div className={styles.formGroup}>
        <h2 className={styles.label}>Upload JSON file</h2>
        <label htmlFor="fileUpload" className={styles.fileUploadLabel}>
          <input
            type="file"
            id="fileUpload"
            accept=".json"
            style={{display: "none"}}
            onChange={handleFileChange}
          />
          {isValidating ? (
            <div className={styles.validatingIcon}></div>
          ) : (
            <div className={styles.browseFileIcon}>
              <UploadIcon className={styles.uploadIcon} />
              Browse File
            </div>
          )}
        </label>
      </div>
      <div className={styles.formGroup}>
        <h2 className={styles.label}>File Contents</h2>
        <pre>{fileData}</pre>
      </div>
      <button
        type="submit"
        className={styles.submitButton}
        disabled={submitDisabled}
        onClick={handleSubmit}
      >
        Submit
      </button>
      {showSuccessModal && <SuccessModal onClose={handleCloseSuccessModal} />}
    </div>
  );
};

export default SubmitForm;
