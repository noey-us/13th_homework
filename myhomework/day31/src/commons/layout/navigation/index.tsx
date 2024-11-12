"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";

export default function Navigation() {
  return (
    <div className={styles.header}>
      <div className={styles.headerbox}>
        <div className={styles.leftbar}>
          <Image
            src="/icon/logo.png"
            alt="트립트립 로고"
            width={60}
            height={60}
            sizes="100vw"
          />
          <div className={styles.categoryNav}>
            <button className={styles.triptalk}>트립토크</button>
            <button className={styles.reservation}>숙박권 구매</button>
            <button className={styles.mypageButton}>마이페이지</button>
          </div>
        </div>
        <div className={styles.personalNav}>
          <button className={styles.profileButton}>
            <Image
              src="/icon/profile_img.png"
              alt="회원 프로필"
              width={40}
              height={40}
              sizes="100vw"
            />
          </button>
          <button className={styles.dropdownButton}>
            <CaretDownOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}