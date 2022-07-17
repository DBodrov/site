import React from "react";
import Image from "next/future/image";
import { motion } from "framer-motion";
import css from "./Sidebar.module.css";
import HeadImage from "public/assets/images/aside_head.png";
import FaceImage from "public/assets/images/face.jpg";
import hhIcon from "public/assets/icons/hh.ru__min_.svg";

export function Sidebar() {
  return (
    <aside className={css.sidebar}>
      <div className={css.image__head}>
        <Image src={HeadImage} alt="" />
      </div>
      <div className={css.profile}>
        <motion.div className={css.profile_pic} initial="hidden" animate="visible" variants={{
          hidden: {
            opacity: 0,
            scale: .5
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: .8
            }
          }
        }}>
          <Image src={FaceImage} alt="" className={css.image__face} />
        </motion.div>
        <span className={css.name}>Дмитрий Бодров</span>
        <article className={css.description}>
          <p>Frontend разработчик</p>
          <span style={{ textAlign: "center" }}>
            Занимаюсь web разработкой более 15 лет
          </span>
          <div className={css.social}>
            <motion.a whileHover={{scale: 1.2}} href="https://hh.ru/resume/f970b994ff0afecb340039ed1f75466942764f">
              <Image
                src={hhIcon}
                alt="Резюме на хэдхантере"
                width={24}
                height={24}
                style={{ margin: "auto" }}
              />
            </motion.a>
            <motion.a whileHover={{scale: 1.2}} href="https://github.com/DBodrov">
              <svg width="25px" height="25px" fill="none" viewBox="0 0 25 25">
                <title>GitHub</title>
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
            </motion.a>
          </div>
        </article>
      </div>
    </aside>
  );
}
