import React,{useState,useEffect} from "react"
import Button from "react-bootstrap/esm/Button"
import Form from "react-bootstrap/Form"
import ListGroup from "react-bootstrap/ListGroup"
import {useSelector,useDispatch} from "react-redux"
import { useParams } from "react-router-dom"
import {addComment} from "store/comment.action"



function Comments(){

const params:any = useParams()
const comment = {comment:"",person:""}
const [state,setState] = useState(comment)
const dispatch = useDispatch()
const comments = useSelector((state:any) => state.commentsReducer.comments)


useEffect(()=>{
    console.log(comments)
},[])


return <>
    
    <h3>Comments</h3>
    <Form.Group className="row">
    <Form.Control type="text" placeholder="Enter Your name" className="col-lg-5" onChange={(e)=>setState({...state,person:e.target.value})}/>
    <Form.Control type="text" placeholder="Enter Comment" className="col-lg-5" onChange={(e)=>setState({...state,comment:e.target.value})}/>
    <Button className="ml-1"onClick={saveComments}>save</Button>
    </Form.Group>

    <ListGroup>
        
        {
        comments.filter(({foodName}:any)=>{ console.log(comments); return foodName.toString() === params.mealname}).map(({comment,person}:any,index:number)=>{
        console.log(comments)
        return <ListGroup.Item key={index} ><h3>{person}:</h3>   <h4>  {comment} </h4></ListGroup.Item>})
        
        }

    </ListGroup>

</>

    function saveComments(){
        if(state.comment !== "" && state.person !== "")
        dispatch(addComment({foodName :params.mealname,comment:state.comment,person:state.person})) 
    }

}

export default Comments;