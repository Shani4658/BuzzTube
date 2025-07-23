import React from 'react'
import { CgProfile } from "react-icons/cg";

const commentData = [{
    "name":"John Doe1",
    "text":"This is a sample comment",
    "replies":[]
    },
    {
    "name":"John Doe2",
    "text":"This is a sample comment",
    "replies":[]
    },
    {
            "name":"John Doe3",
            "text":"This is a sample comment",
            "replies":[{
                "name":"John Doe4",
                "text":"This is a sample comment",
                "replies":[{
                    "name":"John Doe5",
                    "text":"This is a sample comment",
                    "replies":[]
                },
                {
                    "name":"John Doe6",
                    "text":"This is a sample comment",
                    "replies":[{
                        "name":"John Doe7",
                        "text":"This is a sample comment",
                        "replies":[]
                    }]
                }]
            }]
        }
    

]
interface CommentType {
  name: string;
  text: string;
  replies: CommentType[];
}

const Comment = ({name, text, replies}: CommentType)=>{
    return(
        <div className='flex  bg-gray-700 p-2 my-2 rounded-lg'>
            <CgProfile />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>    

        </div>

    );
};

const CommentList = ({comments}: {comments:CommentType[]})=>{
    return comments.map((C,index)=>{
        return(
            <div key={index}>
                <Comment name={C.name} text={C.text} replies={C.replies} />
                <div className='pl-5 border-gray-600 border-l-2 ml-5'>
                    <CommentList comments={C.replies} />
                </div>
            </div>
        );
        
    });
}

const CommentContainer = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentList comments={commentData} />
    </div>
  )
}

export default CommentContainer