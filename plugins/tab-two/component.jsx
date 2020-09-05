import React from 'react';


export default function TabTwo({tabData}) {
    return (
        <div>
            This is tab two.
            <pre>
                {JSON.stringify(tabData)}
            </pre>
        </div>
    )
}
