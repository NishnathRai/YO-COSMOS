import { Box, Input } from "@chakra-ui/react"
import { Button, Popover, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { FaArrowDownShortWide } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { Table } from "@chakra-ui/react"


function WorkScaceBar(){
    const [open, setOpen] = useState(false)
    return(
      <Box display="flex" alignItems="center" padding="20px" justifyContent="center" w="30%" h="100%"  >
        <Button margin="10px" size="sm" variant="subtle">
              Home <TiHome />
        </Button>
        <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Popover.Trigger asChild>
            <Button margin="10px" size="sm" variant="subtle">
              Work Space <FaArrowDownShortWide/>
            </Button>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Arrow />
                <Popover.Body  >
                  <PopOverBody/>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </Box>
    );
}

function PopOverBody(){
    return (<>
        <Box display="flex" gap="10px" >
            <Input placeholder="WorkSpace Name" variant="subtle" />
            <Button>Create</Button>
        </Box>
        <Box paddingTop="10px" >
        <Table.Root size="sm" striped>
            <Table.Body>
                {items.map((item) => (
                <Table.Row key={item.id}>
                    <Table.Cell _hover={{backgroundColor:"gray.200"}} >{item.name}</Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
        </Box>
    </>)
}
const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
  ]

export default WorkScaceBar;