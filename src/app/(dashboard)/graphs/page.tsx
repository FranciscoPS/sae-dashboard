"use client";

import { AreaChart } from "@/components/AreaChart";
import { BarList } from "@/components/BarList";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { DonutChart } from "@/components/DonutChart";
import { Tracker } from "@/components/Tracker";

const chartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 23",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 23",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 23",
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

const data = [
  { name: "Inscritos", value: 843 },
  { name: "Pendientes", value: 46 },
  { name: "Bajas", value: 30 },
];

export default function Graphs() {
  return (
    <main>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Gráficos
          </h1>
          <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
            Gráficos y estadísticas de ingresos
          </p>
        </div>
      </div>

      <Divider />

      <section className="mt-8 flex flex-col items-center">
        <div className="flex justify-between gap-60">
          <div className="flex flex-col items-center justify-center gap-4">
            <DonutChart
              data={data}
              variant="pie"
              category="name"
              value="value"
              valueFormatter={(number: number) =>
                `$${Intl.NumberFormat("us").format(number).toString()}`
              }
            />
          </div>

          <Card className="m-5 w-96">
            <BarList data={data} />
          </Card>
        </div>

        <Card className="m-5">
          <AreaChart
            className="h-80"
            data={chartdata}
            index="date"
            categories={["SolarPanels", "Inverters"]}
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
          />
        </Card>
      </section>
    </main>
  );
}
