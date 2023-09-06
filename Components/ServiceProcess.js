import React from 'react';
import style from '../styles/ServiceProcess.module.css';

import Image from 'next/image';

import LogoStep1 from '../public/Step/step1.png';
import LogoStep2 from '../public/Step/step2.png';
import LogoStep3 from '../public/Step/step3.png';
import LogoStep4 from '../public/Step/step4.png';

function ServiceProcess() {
  return (
    <div className={style.CardsContainer}>
      <div className={style.Cards}>
        <div className={style.ImageSection}>
          <Image
            src={LogoStep1}
            alt="logo"
            title="logo"
            className={style.Image}
          />
          <p className={style.StepNumber}>1</p>
        </div>
        <div className={style.SubTitle}>
          <h3 className={style.Title}>ثبت درخواست توسط شما</h3>
          <div>
            <h5>تماس با شماره 09169589824 و ثبت درخواست انجام کار </h5>
          </div>
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.ImageSection}>
          <Image
            src={LogoStep2}
            alt="logo"
            title="logo"
            className={style.Image}
          />
          <p className={style.StepNumber}>2</p>
        </div>
        <div className={style.SubTitle}>
          <h3 className={style.Title}> هماهنگی کارشناس با شما </h3>
          <div>
            <h5> کارشناس زمان انجام کار را با شما هماهنگ می کند </h5>
          </div>
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.ImageSection}>
          <Image
            src={LogoStep3}
            alt="logo"
            title="logo"
            className={style.Image}
          />
          <p className={style.StepNumber}>3</p>
        </div>
        <div className={style.SubTitle}>
          <h3 className={style.Title}> مراجعه کارشناس و اعلام هزینه </h3>
          <div>
            <h5>دستگاه شما توسط کارشناس بازدید ، ایراد و هزینه اعلام می شود</h5>
          </div>
        </div>
      </div>
      <div className={style.Cards}>
        <div className={style.ImageSection}>
          <Image
            src={LogoStep4}
            alt="logo"
            title="logo"
            className={style.Image}
          />
          <p className={style.StepNumber}>4</p>
        </div>
        <div className={style.SubTitle}>
          <h3 className={style.Title}> تست دستگاه و پایان سفارش</h3>
          <div>
            <h5>
              دستگاه توسط کارشناس بصورت کامل تست شده و کاملا سالم تحویل شما داده
              می شود
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProcess;
