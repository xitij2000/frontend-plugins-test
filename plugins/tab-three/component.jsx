import React from 'react';


export default function TabThree({tabData}) {
    return (
        <div>
            This is tab three.
            <pre>
                {JSON.stringify(tabData)}
            </pre>
        </div>
    )
}
