import Head from 'next/head';
import styles from '@/styles/Home.module.css';

// components
import Navbar from '@/Components/Navbar';
import Banner from '@/Components/Banner';
import Services from '@/Components/Services';
import Brands from '@/Components/Brands';
import ServiceProcess from '@/Components/ServiceProcess';
import PriceTable from '@/Components/PriceTable';

export default function Home() {
  return (
    <main className={styles.Main}>
      <div className={styles.Content}>
        <div className={styles.Menu}>
          <Navbar />
        </div>
        <div className={styles.Section1}>
          <Banner />
        </div>
        <div className={styles.Section2}>
          <div className={styles.SectionTitle}>
            <h3>تعمیر و سرویس انواع :</h3>
          </div>
          <Services />
        </div>
        <div className={styles.Section3}>
          <div className={styles.SectionTitle}>
            <h3>برندهایی از قبیل :</h3>
          </div>
          <div className={styles.SectionBrand}>
            <Brands />
          </div>
        </div>
        <div className={styles.Section4}>
          <ServiceProcess />
        </div>
        <div className={styles.Section5} id="List">
          <div className={styles.SectionTitle}>
            <h3>نرخ برخی خدمات :</h3>
          </div>
          <div className={styles.SectionPrice}>
            <PriceTable />
          </div>
        </div>
      </div>
      <div className={styles.Footer}>
        <h5>طراحی و ساخت : محمد مومنی</h5>
      </div>
    </main>
  );
}
