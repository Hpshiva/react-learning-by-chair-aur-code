import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-200 roundedxl px-4">
                  <div className=" w-full justify-center mb-4">
                      
                      
                      <img src={appwriteService.getFilePreview(featuredImage)}
                      className="text-2xl"
                    alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
