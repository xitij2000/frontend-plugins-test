import React from 'react';


export default function TabOne({tabData}) {
    return (
        <div>
            This is tab one.
            <pre>
                {JSON.stringify(tabData)}
            </pre>
        </div>
    )
}
