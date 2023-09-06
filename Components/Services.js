import React from 'react';
import styles from '../styles/Services.module.css';

import RepaireLogo01 from '../public/RepaireLogo/01.png';
import RepaireLogo02 from '../public/RepaireLogo/02.png';
import RepaireLogo03 from '../public/RepaireLogo/03.png';
import RepaireLogo04 from '../public/RepaireLogo/04.png';
import RepaireLogo05 from '../public/RepaireLogo/05.png';
import Image from 'next/image';

function Services() {
  return (
    <>
      <div className={styles.Card}>
        <div className={styles.LogoSection}>
          <Image
            src={RepaireLogo01}
            alt="logo"
            title="logo"
            className={styles.ImageSection}
          />
        </div>
        <div className={styles.TitleSection}>
          <h3>تعمیر ماشین ظرفشویی</h3>
        </div>
      </div>
      <div className={styles.Card}>
        <div className={styles.LogoSection}>
          <Image
            src={RepaireLogo02}
            alt="logo"
            title="logo"
            className={styles.ImageSection}
          />
        </div>
        <div className={styles.TitleSection}>
          <h3>ماشین لباسشویی</h3>
        </div>
      </div>
      <div className={styles.Card}>
        <div className={styles.LogoSection}>
          <Image
            src={RepaireLogo03}
            alt="logo"
            title="logo"
            className={styles.ImageSection}
          />
        </div>
        <div className={styles.TitleSection}>
          <h3>یخچال و فریزر دو قلو</h3>
        </div>
      </div>
      <div className={styles.Card}>
        <div className={styles.LogoSection}>
          <Image
            src={RepaireLogo04}
            alt="logo"
            title="logo"
            className={styles.ImageSection}
          />
        </div>
        <div className={styles.TitleSection}>
          <h3>یخچال و فریزر ساید</h3>
        </div>
      </div>
      <div className={styles.Card}>
        <div className={styles.LogoSection}>
          <Image
            src={RepaireLogo05}
            alt="logo"
            title="logo"
            className={styles.ImageSection}
          />
        </div>
        <div className={styles.TitleSection}>
          <h3>یخچال و فریزر خانگی</h3>
        </div>
      </div>
    </>
  );
}

export default Services;
