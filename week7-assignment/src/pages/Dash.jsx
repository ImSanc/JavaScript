import { Link } from "react-router-dom";
import { PageLink } from "../components/PageLink";

export function DashBoard(){
    return (
        <>
        <div className="bg-seaGreen flex justify-center items-center text-xl font-semibold p-3 ">
                Week 7 assignment
        </div>
        <div className="bg-slate-200 w-screen h-screen flex flex-col justify-center items-center">
            
            <div className="bg-seaGreen rounded-lg flex justify-center items-center font-semibold p-3 w-[70%] h-[70%] mt-3">
                <PageLink pageName={'Profile'} link={"/profile"}/>
                <PageLink pageName={'BackGround'} link={"/background"}/>
                <PageLink pageName={'Paragraph generator'} link={"/paragraphGenerator"}/>
                <Link></Link>
                <Link></Link>
                <Link></Link>
            </div>
        </div>
        </>
    )
}