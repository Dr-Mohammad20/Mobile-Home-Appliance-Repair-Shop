import React from 'react';
import style from '../styles/Brands.module.css';

import lgLogo from '../public/BrandLogo/01.png';
import pakshomaLogo from '../public/BrandLogo/02.png';
import samsungLogo from '../public/BrandLogo/03.png';
import emersanLogo from '../public/BrandLogo/04.png';
import boushLogo from '../public/BrandLogo/05.png';
import himaliyaLogo from '../public/BrandLogo/06.png';
import esnovaLogo from '../public/BrandLogo/07.png';
import electroEstilLogo from '../public/BrandLogo/08.png';
import devoLogo from '../public/BrandLogo/09.png';
import kenvoodLogo from '../public/BrandLogo/10.png';

import Image from 'next/image';

function Brands() {
  return (
    <>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={lgLogo}
            alt="lgLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={pakshomaLogo}
            alt="pakshomaLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={samsungLogo}
            alt="samsungLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={emersanLogo}
            alt="emersanLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={boushLogo}
            alt="boushLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={himaliyaLogo}
            alt="himaliyaLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={esnovaLogo}
            alt="esnovaLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={electroEstilLogo}
            alt="electroEstilLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={devoLogo}
            alt="devoLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.LogoSection}>
          <Image
            src={kenvoodLogo}
            alt="kenvoodLogo"
            title="logo"
            style={{ width: '90%', height: '90%' }}
          />
        </div>
      </div>
    </>
  );
}

export default Brands;
