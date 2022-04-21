import React from "react";
import styles from "../styles/nav.module.css";
import { useRouter } from "next/router";
import { Flex, Box } from "rebass";
import Link from "./Link";
import Spotlight from "./Spotlight";

export default function Nav() {
  const { asPath } = useRouter();

  return (
    <Flex my={[4, 5]} alignItems="center">
      <Spotlight className={styles.logo}>⌘</Spotlight>
      <Box flexGrow={1}></Box>
      <Link
        href="/"
        className={asPath === "/" ? (styles.link, styles.active) : styles.link}
      >
        Work
      </Link>

      <Link
        href="/prototypes"
        mx={[3, 4]}
        className={
          asPath === "/prototypes" ? (styles.link, styles.active) : styles.link
        }
      >
        Prototypes
      </Link>

      <Link
        href="/writing"
        className={
          (styles.link,
          asPath === "/writing" ? (styles.link, styles.active) : styles.link)
        }
      >
        Writing
      </Link>
    </Flex>
  );
}
