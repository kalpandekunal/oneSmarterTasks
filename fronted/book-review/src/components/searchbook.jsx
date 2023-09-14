import { Button,  Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SearchBook = ({searchInput}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState([]);


    const products = useSelector(store => store.productReducer.products);
    //console.log(products);
    
    const handleSearch = ()=>{
     let searchData = products.filter((el)=>{
       return el.title.toLowerCase().includes(searchInput.toLowerCase());
     })
     //console.log(searchData);
     setSearch(searchData);
   }
  
   
   useEffect(()=>{
    handleSearch();
   },[searchInput]);
  
    return (
      <>
        <Button   onClick={onOpen} size="sm" borderLeftRadius={"10px"} borderRightRadius={5} border="1px solid #949494">Search</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              {
                search.length > 0 && search.map((el)=>{
                    return <Link to={`/productDetails/${el._id}`}><Text fontWeight={500}  cursor={"pointer"} mt={2}>{el.title}</Text></Link>
                })
              }
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
}


