import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
//import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
//import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
//import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

//import chefIconImageSrc from "images/chef-icon.svg";
//import celebrationIconImageSrc from "images/celebration-icon.svg";
//import shopIconImageSrc from "images/shop-icon.svg";

import startpageTop from "../images/sonntags_top.jpeg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  // const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedText = tw.span`bg-blue-800 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  //const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Köstlich & Süß <HighlightedText>Im Veedel.</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        // imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageSrc={startpageTop}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Jetzt bestellen"
        watchVideoButtonText="Lerne uns kennen"
      />
      <MainFeature
        subheading={<Subheading>Gegründet 2014</Subheading>}
        heading={
          <>
            Wir liefern seit
            <wbr /> <HighlightedText>über 5 Jahren.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Letzte Angebote"
        imageSrc={
          "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Unsere <HighlightedText>Produkte.</HighlightedText>
          </>
        }
      />
      {/* <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      /> */}
      {/* <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Chefs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      /> */}
      <Testimonial
        subheading=""
        heading={
          <>
            Kunden <HighlightedText>lieben uns.</HighlightedText>
          </>
        }
      />
      {/* <DownloadApp
        text={
          <>
            People around you are ordering delicious meals using the{" "}
            <HighlightedTextInverse>Treact App.</HighlightedTextInverse>
          </>
        }
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
