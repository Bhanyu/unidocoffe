"use client"

import React, { createContext, useContext, useState } from 'react';

const GuideContext = createContext();

export const GuidesProvider=({children})=>{
    const [guides] = useState(
        [
            {
                id: 1,
                title: 'Guide 1',
                description: 'Guide 1 description',
            },
            {
                id: 2,
                title: 'Guide 2',
                description: 'Guide 2 description',
            },
            {
                id: 3,
                title: 'Guide 3',
                description: 'Guide 3 description',
            },
            {
                id: 4,
                title: 'Guide 4',
                description: 'Guide 4 description',
            }
        ]
    );
    return (
        <GuideContext.Provider value={{guides}}>
            {children}
        </GuideContext.Provider>
    )
}
export const useGuides = () => useContext(GuideContext);