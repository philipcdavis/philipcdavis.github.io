import { Box, Text, Flex } from "rebass";
import Image from "next/image";
import Link from "../components/Link";
import styled from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <style jsx global>{`
        :root {
          --surface-background: var(--charcoal);
          --primary-text: var(--white);
          --secondary-text: var(--smoke-shadow);
          --surface-highlight: #393939;
          --overlay: rgba(10, 10, 10, 0.4);
          --link: #4bb7ff;
        }
      `}</style>
      <Box mb={[5, 6]}>
        <Text fontWeight="bold">Hello, my name is Philip.</Text>
        <Text mb={[3, 6]}>
          I'm a product designer and UI engineer. Right now I'm working on the
          Facebook design system. Previously I was designing interfaces at
          Apple. In my free time I create{" "}
          <Link underline href="https://react.design">
            courses
          </Link>
          ,{" "}
          <Link underline href="https://swiftui.design/examples">
            resources
          </Link>
          ,{" "}
          <Link underline href="/prototypes">
            prototypes
          </Link>
          , and{" "}
          <Link underline href="https://quickcapture.xyz">
            apps
          </Link>
          . .
        </Text>
      </Box>

      <Text mb={[2, 4]} mt={[5]} fontWeight="bold">
        Recent Work
      </Text>
      <Flex mx={[0, -4]} flexDirection="column">
        <Flex flexDirection={["column", "row"]}>
          <WorkLink
            url="https://facebook.com"
            image="/images/facebook-icon.png"
            name="Facebook"
            dates="2019-Present"
          />
          <WorkLink
            url="/apple"
            image="/images/apple-icon.png"
            name="Apple"
            dates="2015-2018"
          />
        </Flex>
        <Flex flexDirection={["column", "row"]}>
          <WorkLink
            url="https://quickcapture.xyz"
            image="/images/quickcapture.png"
            name="Quick Capture"
            dates="2022-Present"
          />
          <WorkLink
            url="https://swiftui.design/examples"
            image="/images/swiftui-icon.png"
            name="SwiftUI for Designers"
            dates="2021-Present"
          />
        </Flex>
        <Flex flexDirection={["column", "row"]}>
          <WorkLink
            url="https://react.design"
            image="/images/react-for-design-icon.png"
            name="React for Design"
            dates="2018-Present"
          />
          <WorkLink
            url="https://learningd3.com"
            image="/images/learningd3-icon.png"
            name="Learning D3"
            dates="2015-Present"
          />
        </Flex>
      </Flex>

      <Text mb={[2, 4]} mt={5} fontWeight="bold">
        Featured Writing
      </Text>
      <Box>
        <Link underline display="block" href="https://react.design/javascript">
          A Designer's Guide to JavaScript
        </Link>

        <Link underline display="block" href="https://react.design/terminal">
          A Designer's Guide to the Terminal
        </Link>

        <Link underline display="block" href="/writing/react-is-for-designers">
          React is for Designers
        </Link>

        <Link underline display="block" href="/writing/on-writing-css">
          On Writing CSS
        </Link>
        <Link underline display="block" href="/writing/my-first-online-course">
          My First Online Course
        </Link>
      </Box>
    </Layout>
  );
}

function WorkLink(props) {
  return (
    <Link
      width={["auto", "100%"]}
      passHref
      className={styled.workLink}
      px={[0, "25px"]}
      mx={[0, "0"]}
      py="20px"
      href={props.url}
      mr={[0, 4]}
      mb={[0, 4]}
    >
      <Flex>
        <Image
          alt={`${props.name} icon`}
          width={60}
          height={60}
          src={props.image}
        />
        <Box ml="16px">
          <Text mt={["6px", "4px"]} style={{ lineHeight: 1 }}>
            {props.name}
          </Text>
          <Text opacity={0.6}>{props.dates}</Text>
        </Box>
      </Flex>
    </Link>
  );
}
