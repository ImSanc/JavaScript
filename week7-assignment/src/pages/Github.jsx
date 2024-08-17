import { Search } from "../components/GitHubSearch";
import { Heading } from "../components/Heading";

export function GitHubCard(){
    return (
        <div>
            <Heading heading={'GitHub'}></Heading>
            <Search></Search>
        </div>
    )
}