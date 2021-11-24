import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "./photosSlice";
import List from '@material-ui/core/List'
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
const Photos=()=>{
    const dispatch=useDispatch();
    const photos = useSelector(state => state.photos)
    useEffect(()=>{
        dispatch(fetchPhotos())
    },[])

    return(
        <>
            {photos.status==='success'?
                photos.photosList.data.map((i)=>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button style={{backgroundColor:"#ded7d7"}}>
                            <ListItemIcon>
                                <img src={i.thumbnailUrl}  />
                            </ListItemIcon>
                            <ListItemText style={{paddingLeft:"10px"}}>{i.title}<br/>{i.id} </ListItemText>
                        </ListItem>
                    </List>
                )
                :'loading photos...'
            }
        </>
    )
}
export default Photos;
