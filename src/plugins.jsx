import React from 'react';


export const getPluginTab = tab => (
    React.lazy(async () => {
        try {
            return import(`plugins/${tab}/component.jsx`);
        } catch (error) {
            return import(`./tabs/${tab}`);
        }
    })
);

export default getPluginTab;
