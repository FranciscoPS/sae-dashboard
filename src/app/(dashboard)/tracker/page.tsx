'use client';

import { RiCheckboxCircleFill } from '@remixicon/react';
import { Card } from '@/components/Card';
import { Tracker } from '@/components/Tracker';
import { Mock_Service, Status } from '@/data/MockStatus';


const colorMapping: Record<Status, string> = {
  Operational: 'bg-emerald-500',
  Downtime: 'bg-red-500',
  Inactive: 'bg-gray-300',
};

const combinedData = Mock_Service.map((item) => ({
  ...item,
  color: colorMapping[item.status],
}));

export default function Trackers(): JSX.Element {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          SAE&#39;s Website
        </h3>
        <span
          tabIndex={0}
          className="inline-flex items-center gap-2 rounded-tremor-full px-3 py-1 text-tremor-default text-tremor-content-emphasis ring-1 ring-inset ring-tremor-ring dark:text-dark-tremor-content-emphasis dark:ring-dark-tremor-ring"
        >
          <span
            className="-ml-0.5 size-2 rounded-tremor-full bg-emerald-500"
            aria-hidden
          />
          Operational
        </span>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <RiCheckboxCircleFill
            className="size-5 shrink-0 text-emerald-500"
            aria-hidden
          />
          <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            www.saeinstitute.com
          </p>
        </div>
        <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          99.9% uptime
        </p>
      </div>

      <Tracker data={combinedData} className="mt-4 hidden w-full lg:flex" />
      <Tracker
        data={combinedData.slice(30, 90)}
        className="mt-3 hidden w-full sm:flex lg:hidden"
      />
      <Tracker
        data={combinedData.slice(60, 90)}
        className="mt-3 flex w-full sm:hidden"
      />

      <div className="mt-3 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        <span className="hidden lg:block">90 days ago</span>
        <span className="hidden sm:block lg:hidden">60 days ago</span>
        <span className="sm:hidden">30 days ago</span>
        <span>Today</span>
      </div>
    </Card>
  );
}
