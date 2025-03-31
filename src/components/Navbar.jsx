import { Box } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import {  Dialog, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { Table } from "@chakra-ui/react"
import useForSuggSearch from "@/hooks/useForSuggSearch"
import { EmptyState, List, VStack } from "@chakra-ui/react"
import { HiColorSwatch } from "react-icons/hi"
import WorkScaceBar from "./WorkScaceBar"


function Navbar(){

    let [ searchInput , setSearchInput ] = useState("");
    let [ suggList , setSuggList ] = useState({cmdArr:[] , tlmArr:[] });
    useForSuggSearch( searchInput ,setSearchInput, setSuggList);


    

    return (<>
        <Box display="flex" justifyContent="space-between" borderWidth="1px" shadow="xl" h="10%" >
          <WorkScaceBar/>
            {/* <Flex h="100%" w="100%" align="center" justify="center" >
                <InputGroup w="40%" startElement={<LuSearch />} endElement={<Kbd>Ctrl+K</Kbd>}>
                    <Input autoFocus="true" vsize="xl" placeholder="Search Cmd or Tlm" />
                </InputGroup>
            </Flex> */}
            <Dialog.Root size="lg" >
                <Dialog.Trigger asChild>
                <Flex h="100%" w="100%" align="center" justify="center" >
                <InputGroup w="50%" startElement={<LuSearch />} endElement={<Kbd>Ctrl+K</Kbd>}>
                    <Input  size="lg" placeholder="Search Cmd or Tlm" />
                </InputGroup>
                </Flex>
                </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Body  padding="20px" >
                        <Flex h="100%" w="100%" align="center" justify="center" >
                            <InputGroup margin="10px" w="100%" startElement={<LuSearch />} >
                                <Input size="lg" value={searchInput} onInput={
                                    (event)=>{
                                        let input  = event.target.value.toUpperCase();
                                        setSearchInput(input);
                                    }
                                } autoFocus="true" vsize="xl" placeholder="Search Cmd or Tlm" />
                            </InputGroup>
                        </Flex>
                        <SuggTable suggList={suggList} />
                    </Dialog.Body>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>

            <Box w="30%" h="100%" backgroundColor="red" ></Box>
        </Box>
    </>)
}

function SuggTable({suggList}){
    console.log( suggList );
    return (
        <>{
            ( suggList.cmdArr.length == 0 && suggList.tlmArr.length==0 
                ? <Empty/> :
                <Table.ScrollArea  borderWidth="1px" rounded="md" maxHeight="300px">
                <Table.Root size="sm" stickyHeader>
                  <Table.Header>
                    <Table.Row bg="bg.subtle">
                      <Table.ColumnHeader>Packet Name</Table.ColumnHeader>
                      <Table.ColumnHeader>Category</Table.ColumnHeader>
                      {/* <Table.ColumnHeader textAlign="end" >Price</Table.ColumnHeader> */}
                    </Table.Row>
                  </Table.Header>
          
                  <Table.Body  >
                    {suggList.cmdArr.map((item) => (
                      <Table.Row _hover={{ bg:"gray.200" }}  style={{cursor:"pointer"}} key={item} >
                        <Table.Cell  ><b>{item}</b></Table.Cell>
                        <Table.Cell>{"COMMAND"}</Table.Cell>
                      </Table.Row>
                    ))}
                    {suggList.tlmArr.map((item) => (
                      <Table.Row _hover={{ bg:"gray.200" }} style={{cursor:"pointer"}} key={item} >
                        <Table.Cell  ><b>{item}</b></Table.Cell>
                        <Table.Cell>{"TELEMETRY"}</Table.Cell>
                      </Table.Row>
                    ))}
      
                  </Table.Body>
                </Table.Root>
              </Table.ScrollArea>
             )
        }
        </>
      )
}

function Empty(){
    return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <HiColorSwatch />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>No results found</EmptyState.Title>
          <EmptyState.Description>
            Try adjusting your search
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root> );
}




export default Navbar ;