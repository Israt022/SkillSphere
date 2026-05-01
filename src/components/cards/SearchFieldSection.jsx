'use client'

import { Button, Label, SearchField } from '@heroui/react';
import React, { useState } from 'react';

const SearchFieldSection = ({ courses = [] }) => {
    const [search, setSearch] = useState("");

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex justify-center items-center gap-3 my-6 px-3 py-2 lg:border border-indigo-500/30 w-8/12 mx-auto rounded-lg lg:shadow shadow-indigo-500/50">
            <SearchField>
                <SearchField.Group className="w-full flex items-center gap-2 border border-gray-500/50 px-3 py-2 rounded-lg">

                    <SearchField.SearchIcon />

                    <SearchField.Input
                    className="flex-1 outline-none"
                    placeholder="Search..."
                    />

                    <SearchField.ClearButton />

                </SearchField.Group>
            </SearchField>
            <Button className={"bg-indigo-500"}>Search</Button>
        </div>

    );
};

export default SearchFieldSection;