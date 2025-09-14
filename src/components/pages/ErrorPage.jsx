import React from "react";
import { useLocation } from "react-router-dom";
import ErrorIcon from "../molecules/ErrorIcons";

export default function ErrorPage({statusCode}){
    const location = useLocation();
    const type = getErrorTypeFromStatus(statusCode);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
       <ErrorIcon type={type} size={500}  />
        <h1 className="text-2xl font-bold mt-4">
        {type === "frontend" && "Frontend Error (check console)"}
        {type === "client" && `Client Error (status: ${statusCode})`}
        {type === "404" && `Page Not Found: ${location.pathname}`}
        {type === "500" && "Server Error"}
      </h1>
        </div>
    );
}

// خلي دالة getErrorTypeFromStatus هنا أو استوردها من utils
function getErrorTypeFromStatus(status) {
  if (!status) return "frontend";
  if (status === 404) return "404";
  if (status >= 400 && status < 500) return "client";
  if (status >= 500 && status < 600) return "500";
  return "frontend";
}