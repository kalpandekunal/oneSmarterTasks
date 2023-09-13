import axios from 'axios'
import React from 'react'
import { Button } from '@chakra-ui/react'

export const DeleteBook = ({id}) => {
   

    const handleDelete = async(id)=>{
        try {
        
            await axios.delete(`https://long-puce-starfish-veil.cyclic.app/api/book/${id}`)
            .then(()=>{
                alert("Book deleted successfully")
                window.location.reload();
            })
            .catch((err)=>console.log(err))
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div>
        <Button onClick={()=>handleDelete(id)}>Delete book</Button>
    </div>
  )
}
