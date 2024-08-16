import { Link } from "react-router-dom";

export function PageLink({pageName,link}){
    return (
        <div>
            <Link className="rounded-lg bg-slate-600 p-3 mx-3" to = {`${link}`} >{pageName}</Link >
        </div>
    )
}