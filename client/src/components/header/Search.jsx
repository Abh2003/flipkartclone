import { InputBase ,Box,styled} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchContainer=styled(Box)`
    background:#fff;
    width:38%;
    border-raduis:2px;
    margin-left:10px;
    display:flex;
`;
const InputSearchBase=styled(InputBase)`
    padding-left:20px;
    width:100%;
`;
const SearchIconWrapper=styled(Box)`
    color:blue;
    padding:6px;
`

const Search=()=>{
    return(
        <SearchContainer>
            <InputSearchBase placeholder="search for products,brands and more"/>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
    )
}
export default Search;