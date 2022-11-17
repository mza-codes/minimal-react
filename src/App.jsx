import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import './app.css';

const App = () => {

    return (
        <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>

            <Flex direction='column' alignItems={"center"} justifyContent="center" textAlign={"center"} h={"100vh"}>
                <Heading fontSize={"4xl"} >Welcome to </Heading>
                <Text fontSize={"8xl"} fontWeight={800}>Chakra UI</Text>
                <Box textStyle={"h1"}>I am Box in H1 text </Box >
                <Box textStyle={"h2"}>I am Box in H2 text </Box >
                <Box textStyle={"h3"}>I am Box in H3 text </Box >
                <Box textStyle={"h4"}>I am Box in H4 text </Box >
                <Box textStyle={"h5"}>I am Box in H5 text </Box >
                <Box textStyle={"h6"}>I am Box in H6 text </Box >
                <Text fontSize="4xl" fontWeight={500}>Feel free to use ! </Text>
            </Flex>
            
        </Box>

    )
};

export default App;