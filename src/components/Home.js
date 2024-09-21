import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
const Poster = require("../images/ecosavvy_poster.jpeg");
const FootPrints = require("../images/carbon-footprint.jpg");
const WhyEcosavvy = require("../images/why-ecosavvy.jpg")

const HomePage = () => {
  return (
    <>
    <Box
      px={20}
      py={10}
      fontSize="large"
      backgroundColor="green.700"
      color="white"
    >
      {/* Welcome Section */}
      <Box textAlign="center" mb={8}>
        <Heading as="h1" mb={2}>
          Welcome to Ecosavvy
        </Heading>
        <Text fontSize="lg">Your Guide to Sustainable Living</Text>
      </Box>

      {/* Landscape Image */}
      <Image
        src={Poster}
        alt="Landscape"
        maxW="100%"
        mb={8}
        height={500}
        width={900}
        ml={200}
        borderRadius={5}
      />

      {/* Introduction Paragraph */}
      <Text mb={6}>
        Ecosavvy, your comprehensive carbon footprint calculator, empowers
        individuals to gauge and understand their environmental impact. By
        seamlessly quantifying daily activities and lifestyle choices, Ecosavvy
        provides insights into carbon emissions, encouraging users to make
        informed decisions for a more sustainable and eco-friendly lifestyle.
        Start your journey towards reducing your carbon footprint and
        contributing to a greener planet with Ecosavvy today!{" "}
      </Text>
      <br />
      {/* What is Ecosavvy Section */}
      <Box mb={8} display={{ md: "flex" }} gap="10">
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 6, md: 0 }}>
          <Heading as="h2" size="lg" mb={2} textAlign="center">
            Hmm.. I'm not sure about what Carbon FootPrints are 🤔
          </Heading>
          <Text>
            A carbon footprint is the total amount of greenhouse gases
            (including carbon dioxide and methane) that are generated by our
            actions.
            <br />
            The average carbon footprint for a person in the United States is 16
            tons, one of the highest rates in the world. Globally, the average
            carbon footprint is closer to 4 tons. To have the best chance of
            avoiding a 2℃ rise in global temperatures, the average global carbon
            footprint per year needs to drop to under 2 tons by 2050.
            <br />
            Lowering individual carbon footprints from 16 tons to 2 tons doesn’t
            happen overnight! By making small changes to our actions, like
            eating less meat, taking fewer connecting flights and line drying
            our clothes, we can start making a big difference.
          </Text>
        </Box>
        <Box flex={{ base: 1, md: 1 }}>
          <Image
            src={FootPrints}
            alt="What is Ecosavvy Image"
            maxW="100%"
            borderRadius={5}
          />
        </Box>
      </Box>
<br/>
      {/* Why Choose Ecosavvy Section */}
      <Box mb={8} display={{ md: "flex" }}>
        <Box flex={{ base: 1, md: 1 }} order={{ base: 2, md: 1 }}>
          <Image
            src={WhyEcosavvy}
            alt="Why Choose Ecosavvy Image"
            maxW="100%"
            borderRadius={10}
          />
        </Box>
        <Box
          flex={{ base: 1, md: 1 }}
          order={{ base: 1, md: 2 }}
          ml={{ md: 4 }}
        >
          <Heading as="h2" size="lg" mb={2} textAlign="center">
            Why Choose Ecosavvy?
          </Heading>
          <Text>
            Choose Ecosavvy for a transformative experience in sustainable
            living. Our user-friendly carbon footprint calculator empowers you
            to make informed choices, helping reduce your environmental impact.
            Ecosavvy offers personalized recommendations, actionable insights,
            and a supportive community committed to eco-conscious living. With
            cutting-edge technology and a passion for sustainability, we make it
            easy for you to adopt a greener lifestyle and contribute to a
            healthier planet. Join Ecosavvy today to be a part of the movement
            towards a more sustainable and environmentally conscious world.
          </Text>
        </Box>
      </Box>
    </Box>
    <Box backgroundColor="white" color="green.700" py={4} textAlign="center" fontWeight="bold">
        Made with 💚 by Team TechRizz
      </Box>
      </>
  );
};

export default HomePage;
