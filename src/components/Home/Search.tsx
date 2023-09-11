import React, { ChangeEvent, ChangeEventHandler, EventHandler } from "react";



type handleSearchTerm = (term: string) => void;

//props type
type PropType = { 
    handleSearchTerm: handleSearchTerm;
    searchTerm: string;
    handleFilterByRegion: EventHandler<any>;
}

function Search({ handleSearchTerm, searchTerm, handleFilterByRegion }: PropType): React.ReactElement {
    
    const handleSearchQuery:ChangeEventHandler = (event:ChangeEvent<HTMLInputElement>) => {
        const data = event.target.value;
         handleSearchTerm(data);
    }

    return (
        <React.Fragment>
            <div className="search__pane">
                <div className="search__textbox">
                    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z" fill="#B2B2B2" />
                    </svg>
                    <input className="text__field" type="text" placeholder="Search for a country..."
                        value={searchTerm} onChange={(event) => handleSearchQuery(event)}></input>
                </div>

               
            </div>
        </ React.Fragment>
    );
}

export default Search;