import { Link } from "react-router-dom"
import { Card, CardBody, CardFooter,Image,Stack,Heading,Text,Button,Divider,ButtonGroup, Img } from '@chakra-ui/react'
import { Ratings } from "./Ratings"
import { DeleteBook } from "./DeleteBook";

export const ProductsCard = ({_id,title,img,desc,author})=>{
  //console.log(name);
let  productDetailPage = window.location.pathname;

  
return (
<Card maxW='sm' _hover={{"box-shadow": "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}} border='1px solid black'>
  <CardBody>
  <Link to={`productdetails/${_id}`}>
    <Image
      width={'60%'}
      margin={'auto'}
      _hover={{"box-shadow": "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
      src={img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    /></Link>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
    </Stack>
    <Text> By: {author}</Text>
  </CardBody>
  <Divider />
  <br />
  <Ratings />

  {productDetailPage === "/" ? <CardFooter>
    <ButtonGroup margin='auto'>
      
      <Button variant='ghost' colorScheme='blue.100' _hover={{"backgroundColor":"blue.400"}}>
       <Link to={`productdetails/${_id}`}> View Detail </Link>
      </Button>
    </ButtonGroup>
    {/* <DeleteBook id={_id}/> */}
  </CardFooter> : 
  
  <CardFooter>
    {/* <ButtonGroup margin='auto'>
      
      <Button variant='ghost' colorScheme='blue.100' _hover={{"backgroundColor":"blue.400"}}>
       <Link to={`productdetails/${id}`}> View Detail </Link>
      </Button>
    </ButtonGroup> */}
  </CardFooter>
  }
  
</Card>
)

}

// const DIV = styled.div`
//     border: 1px solid gray;
//     img{
//         width: 100%;
//     }
// `