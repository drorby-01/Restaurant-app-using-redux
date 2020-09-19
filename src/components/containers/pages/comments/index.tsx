import React from "react"
import {useParams} from "react-router-dom"
import Comments from "components/ui-components/comments"

function CommentsPage(){

    const params:any = useParams()
    
    console.log(params)
    return <>
    
            <h1>{params.mealname}</h1>
            <Comments/>
    </>

}

export default CommentsPage