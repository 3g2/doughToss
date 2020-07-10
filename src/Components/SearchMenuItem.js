import React, { useEffect, useRef } from "react";

export function SearchMenuItem(searchValue, setSearchValue) {
        const inputRef = useRef();

        useEffect(() => {
            inputRef.current.focus();
        }, []);

        function handleChange(event) {
            setSearchValue(event.target.value);
        }

        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search for a specific pizza..."
                        value={searchValue}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                </form>
            </div>
        );
}