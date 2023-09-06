import React from 'react';
import Image from 'next/image';
import styles from '../styles/Banner.module.css';

import ilu1 from '../public/ilu 03.png';

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.Section1Right}>
        <h1 className={styles.ResponsiveTitle}>مرکز فنی مهندسی زاگرس</h1>
        <Image src={ilu1} width={600} height={450} alt="Banner Ilustration" />
      </div>
      <div className={styles.Section1Left}>
        <div className={styles.Section1LeftTop}>
          <h1 className={styles.Title} style={{ paddingRight: '10%' }}>
            مرکز فنی مهندسی{' '}
          </h1>
          <h1 className={styles.Title} style={{ paddingRight: '45%' }}>
            {' '}
            زاگرس سرویس{' '}
          </h1>
        </div>
        <div className={styles.Section1LeftBottom}>
          <span>
            این مرکز با اتکا به دانش و تجربه و همچنین با قطعات اورجینال و دارای
            ضمانت پس از تعمیر برای رفاه حال مشتریان ، تسریع و بهبود خدمات ، در
            منزل و محل مشتری خدمات زیر را انجام می دهد .
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
