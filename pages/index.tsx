import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sidebar, Navbar } from "components";
import css from "../styles/Home.module.css";

const stack = [
  "Javascript",
  "Typescript",
  "React",
  "React-Router",
  "React-Query",
  "React-Spring | Framer-Motion",
  "Redux | Redux ToolKit",
  "Next JS",
  "Node JS",
  "Express",
  "MSW JS",
  "Jest | Testing library | Cypress",
  "Webpack | Rollup | ESBuild",
  "Emotion (CSS-In-JS) | CSS Modules | SCSS",
];

const Home: NextPage = () => {
  return (
    <section className={css.content}>
      <article className={css.card}>
        <h2>Мои инструменты</h2>
        <ul className={css.stack_list}>
          {stack.map((item, i) => {
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: (i + 0.1) / 10,
                  },
                }}
              >
                {item}
              </motion.li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default Home;
