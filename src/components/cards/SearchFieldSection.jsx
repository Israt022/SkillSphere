'use client'

import { Button, Label, SearchField } from '@heroui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchFieldSection = ({ courses = [] }) => {
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    // console.log(searchParams,"SearchParams");
    const handleSearch =() =>{
        const params = new URLSearchParams(searchParams);

        if(search){
            params.set("search",search)
        }else{
            params.delete("search")
        }
        router.push(`${pathName}?${params.toString()}`)
        // console.log(search);
        // console.log(params,'params');
        // course.title.toLowerCase().includes(search.toLowerCase())
    };

    return (
        <div className="flex flex-wrap justify-center items-center gap-3 my-6 px-3 py-2 lg:border border-indigo-500/30 w-10/12 lg:w-8/12 mx-auto rounded-lg lg:shadow shadow-indigo-500/50">
            <SearchField>
                <SearchField.Group className="w-10/12 mx-auto lg:w-full flex items-center gap-2 border border-gray-500/50 px-3 py-2 rounded-lg">

                    <SearchField.SearchIcon />

                    <SearchField.Input
                    type='text'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className="flex-1 outline-none"
                    placeholder="Search..."
                    />

                    <SearchField.ClearButton />

                </SearchField.Group>
            </SearchField>
            <Button onClick={handleSearch} className={"bg-indigo-500"}>Search</Button>
        </div>

    );
};

export default SearchFieldSection;