'use client';

import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import type { TabsRootProps } from "@base-ui/react/tabs";
import "./Tabs.css";

export interface Tab {
  value: string;
  label: string;
}

export interface TabsProps extends Omit<TabsRootProps, "render"> {
  tabs: Tab[];
  defaultValue: string
}

export function Tabs({ tabs, defaultValue, ...props }: TabsProps) {
  return (
    <BaseTabs.Root
      className="ui-library-tabs"
      defaultValue={defaultValue}
      {...props}
    >
      <BaseTabs.List className="ui-library-tabs__list">
        {tabs.map(({ label, value }) => (
          <BaseTabs.Tab
            key={value}
            value={value}
            className="ui-library-tabs__tab"
          >
            {label}
          </BaseTabs.Tab>
        ))}
        <BaseTabs.Indicator className="ui-library-tabs__indicator" />
      </BaseTabs.List>
    </BaseTabs.Root>
  );
}
