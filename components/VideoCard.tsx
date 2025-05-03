"use client"
import { useRouter } from "next/navigation";
import React from "react";
interface VideoCardProps {
    info: {
        id:string;
        snippet:{
            title:string;
            channelTitle:string;
            thumbnails:{
                default:{
                    url:string;
                }
                high:{
                    url:string;
                }
            }
        };
        statistics:{
            viewCount:string;
            likeCount:string;
        }
        
    };
}
const VideoCard: React.FC<VideoCardProps> = ({info}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/Watchpage/${info.id}`);
    };
    // console.log(info);
    return(
        <div 
            onClick={handleClick}
            key={info.id}
            className="col-span-1 p-2 m-2 sm:w-72 shadow-lg rounded-lg border border-gray-800 hover:cursor-pointer hover:bg-gray-900">
            <img className="object-cover" src={info.snippet.thumbnails.high.url} alt="loading" />
            <h3 className="font-bold">{info.snippet.title}</h3>
            <p>{info.snippet.channelTitle}</p>
            <ul className="text-center flex justify-between mt-2">
                
                <li>{info.statistics.viewCount} views</li>
                <li>{info.statistics.likeCount} likes</li>
            </ul>
        </div>
    )
}
export default VideoCard;