import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import style from '../styles/Navbar.module.css';

import logo from '../public/logo 01.png';
import InstaIcon from '../public/instagramIcon.png';

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.navbarSectionRight}>
        <Image
          src={logo}
          alt="logo"
          title="logo"
          style={{
            width: '8%',
            height: '70%',
          }}
        />
        <h3 className={style.Title}>تعمیرات لوازم خانگی در منزل </h3>
        <h3> + </h3>
        <Link href="#List">
          <h3 className={style.Title}>لیست قیمت</h3>
        </Link>
      </div>

      <div className={style.navbarSectionLeft}>
        <div className={style.PhoneSection}>
          <span className={style.Phone}>09169589824</span>
        </div>
        <div className={style.LogoSection}>
          <Link href="https://instagram.com/zagros.servic661">
            <Image
              src={InstaIcon}
              alt="InstaLogo"
              width={80}
              height={80}
              className={style.InstaLogo}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
