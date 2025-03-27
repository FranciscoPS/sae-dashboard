"use client";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CategoryBar } from "@/components/CategoryBar";
import { Divider } from "@/components/Divider";
import { LineChartSupport } from "@/components/LineChartSupport";
import { ProgressCircle } from "@/components/ProgressCircle";
import { DataTable } from "@/components/ui/data-table-support/DataTable";
import { columns } from "@/components/ui/data-table-support/columns";
import { tickets } from "@/data/support/tickets";
import { volume } from "@/data/support/volume";
import { RiAddLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

type CarreraData = {
  id: string;
  Carrera?: string;
  Siglas?: string;
  [key: string]: string | undefined;
};

export default function OverviewDashboard() {
  const trimestreActual = "NI 2024 T4";
  const [carreras, setCarreras] = useState<CarreraData[]>([]);
  const [volumen, setVolumen] = useState([
    { time: "Actual", Today: 0, Yesterday: 0 },
  ]);
  const [resumen, setResumen] = useState({
    total: 0,
    inscritos: 0,
    pendientes: 0,
    bajas: 0,
    porcentajeInscritos: 0,
    porcentajePendientes: 0,
    porcentajeBajas: 0,
  });

  useEffect(() => {
    const niHistorialRef = collection(db, "carreras");

    getDocs(niHistorialRef).then((response) => {
      const data: CarreraData[] = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCarreras(data);

      let total = 0;
      let inscritos = 0;
      let pendientes = 0;
      let bajas = 0;

      //TODO: Obtener lógica de inscritos, bajas y pendientes real
      data.forEach((entry) => {
        const raw = entry[trimestreActual];
        const value = raw ? parseInt(raw) : 0;
        total += value;

        if (value >= 30) inscritos += value;
        else if (value >= 10) pendientes += value;
        else bajas += value;
      });

      const porcentaje = (v: number) =>
        total > 0 ? Math.round((v / total) * 100) : 0;

      setResumen({
        total,
        inscritos,
        pendientes,
        bajas,
        porcentajeInscritos: porcentaje(inscritos),
        porcentajePendientes: porcentaje(pendientes),
        porcentajeBajas: porcentaje(bajas),
      });

      // Para el gráfico de volumen
      const trimestreAnterior = "NI 2024 T3";

      const newVolume = data.map((entry) => {
        const todayRaw = entry[trimestreActual] as string | undefined;
        const yesterdayRaw = entry[trimestreAnterior] as string | undefined;

        return {
          time: entry.Siglas || entry.Carrera || entry.id,
          Today: todayRaw ? parseInt(todayRaw) : 0,
          Yesterday: yesterdayRaw ? parseInt(yesterdayRaw) : 0,
        };
      });

      setVolumen(newVolume);
    });
  }, []);

  return (
    <main>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Overview
          </h1>
          <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
            Información y estadísticas de ingresos trimestrales
          </p>
        </div>
        <Button className="flex items-center gap-2 text-base sm:text-sm">
          Cargar datos
          <RiAddLine className="-mr-0.5 size-5 shrink-0" aria-hidden="true" />
        </Button>
      </div>

      <Divider />

      <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Trimestre actual {trimestreActual}
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            {resumen.total} prospectos
          </dd>
          <CategoryBar
            values={[
              resumen.porcentajeInscritos,
              resumen.porcentajePendientes,
              resumen.porcentajeBajas,
            ]}
            className="mt-6"
            colors={["blue", "gray", "amber"]}
            showLabels={false}
          />
          <ul
            role="list"
            className="mt-4 flex flex-wrap gap-x-10 gap-y-4 text-sm"
          >
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                {resumen.porcentajeInscritos}%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <span className="text-sm">Inscritos</span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                {resumen.porcentajePendientes}%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                  aria-hidden="true"
                />
                <span className="text-sm">Pendientes</span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                {resumen.porcentajeBajas}%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-orange-500 dark:bg-orange-500"
                  aria-hidden="true"
                />
                <span className="text-sm">Bajas</span>
              </div>
            </li>
          </ul>
        </Card>

        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Prospectos incritos
          </dt>
          <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
            <dd className="space-y-3">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm">Alumnos inscritos</span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  {resumen.porcentajeInscritos}%
                </span>
              </div>
            </dd>
            <ProgressCircle
              value={resumen.porcentajeInscritos}
              radius={45}
              strokeWidth={7}
            />
          </div>
        </Card>

        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Volumen de inscripciones
          </dt>
          <div className="mt-4 flex items-center gap-x-8 gap-y-4">
            <dd className="space-y-3 whitespace-nowrap">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm">Trimestre 2025-1</span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  {resumen.total}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm">Trimestre 2024-4</span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  {resumen.total + 10}
                </span>
              </div>
            </dd>

            <LineChartSupport
              className="h-28"
              data={volumen} // este es el nuevo
              index="time"
              categories={["Today", "Yesterday"]}
              colors={["blue", "gray"]}
              showTooltip={false}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              startEndOnly={true}
              showYAxis={false}
              showLegend={false}
            />
          </div>
        </Card>
      </dl>

      <DataTable data={tickets} columns={columns} />
    </main>
  );
}
