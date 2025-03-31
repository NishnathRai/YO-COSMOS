import { Box } from "@chakra-ui/react"
import Navbar from "../Navbar";
import SideBar from "../SideBar";

function Main(){
    return (
        <Box w="100dvw" h="100dvh" >
            <Navbar/>
            <SideBar/>
        </Box>
    )
}

export default Main;