import { useEffect } from "react";
import searchSuggest from "../utilities/searchSuggest"


function useForSuggSearch(searchInput ,setSearchInput, setSuggList){
        function handelSearchInput(event){
            let input  = event.target.value.toUpperCase();
            setSearchInput(input);
        }
        useEffect( ()=>{
            let timeOut = setTimeout( ()=>{
                let input = searchInput ;
                searchSuggest(input)
                .then((result)=>{ 
                    setSuggList( result );
                })
            } , 300 )
            return ()=>{
                if(timeOut){
                    clearTimeout( timeOut );
                }
            }
        } ,[ searchInput ] ) ;
}

export default useForSuggSearch;