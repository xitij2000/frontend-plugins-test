import React, { useState, Suspense } from 'react';
import { Tabs, Tab } from '@edx/paragon';
import getPluginTab from '../plugins';

export default function ExamplePage() {
  const [selectedTab, selectTab] = useState('home');

  return (
    <main className="d-flex flex-column">

      <Tabs defaultActiveKey="home" activeKey={selectedTab} onSelect={(tab) => selectTab(tab)}>
        <Tab eventKey="home" title="Home">
          <h2>Home</h2>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <h2>Profile</h2>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <h2>Contacts</h2>
        </Tab>
        {PLUGIN_TABS.map(pluginTab => {
          const Component = getPluginTab(pluginTab.id);
          return (
            <Tab eventKey={pluginTab.id} title={pluginTab.name}>
              <Suspense fallback="Loading...">
                <Component tabData={{ pluginMeta: pluginTab }} />
              </Suspense>
            </Tab>
          )
        })}
      </Tabs>
    </main>
  );
}
