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
import { RiAddLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { mockProspectos } from "@/data/MockProspectos"; // 👈 nuevo mock
import { DonutChart } from "@/components/DonutChart";

type Prospecto = {
  NOMBRES: string;
  APELLIDO_PATERNO: string;
  APELLIDO_MATERNO: string;
  CALLE: string;
  NÚMERO: string;
  CP: string;
  COLONIA: string;
  ESTADO: string;
  MUNICIPIO: string;
  CARRERA: string;
  PERIODO: string;
  ESTATUS: string;
  MATRICULA: string;
};

export default function OverviewDashboard() {
  const [selectedPeriodo, setSelectedPeriodo] = useState("");
  const [periodos, setPeriodos] = useState<string[]>([]);

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
    // Extraer periodos únicos
    const periodosUnicos = Array.from(
      new Set(mockProspectos.map((p) => p.PERIODO))
    ).filter((p) => p.trim() !== "");

    setPeriodos(periodosUnicos);

    // Selecciona el primero por defecto
    if (periodosUnicos.length > 0) {
      setSelectedPeriodo((prev) => prev || periodosUnicos[0]);
    }
  }, []);

  useEffect(() => {
    if (!selectedPeriodo) return;

    const data: Prospecto[] = mockProspectos.filter(
      (item) => item.PERIODO === selectedPeriodo
    );

    let total = data.length;
    let inscritos = 0;
    let pendientes = 0;
    let bajas = 0;

    data.forEach((item) => {
      const estatus = item.ESTATUS.toUpperCase();
      if (estatus === "NUIN") inscritos++;
      else if (estatus === "PENDIENTE") pendientes++;
      else if (estatus === "BAJA") bajas++;
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
  }, [selectedPeriodo]);

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
        <div className="flex w-full flex-col gap-7 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex items-center gap-4">
            <label
              htmlFor="periodo"
              className="text-sm font-medium text-gray-900 dark:text-gray-50"
            >
              Periodo
            </label>
            <select
              id="periodo"
              value={selectedPeriodo}
              onChange={(e) => setSelectedPeriodo(e.target.value)}
              className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {periodos.map((periodo) => (
                <option key={periodo} value={periodo}>
                  {periodo}
                </option>
              ))}
            </select>
          </div>

          <Button className="flex items-center gap-2 text-base sm:text-sm">
            Cargar datos
            <RiAddLine className="-mr-0.5 size-5 shrink-0" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <Divider />

      <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Prospectos totales
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
                {resumen.inscritos} ({resumen.porcentajeInscritos}%)
              </span>
              <div className="flex items-center gap-2">
                <span className="size-2.5 shrink-0 rounded-sm bg-blue-500" />
                <span>Inscritos</span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                {resumen.pendientes} ({resumen.porcentajePendientes}%)
              </span>
              <div className="flex items-center gap-2">
                <span className="size-2.5 shrink-0 rounded-sm bg-gray-500" />
                <span>Pendientes</span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                {resumen.bajas} ({resumen.porcentajeBajas}%)
              </span>
              <div className="flex items-center gap-2">
                <span className="size-2.5 shrink-0 rounded-sm bg-amber-500" />
                <span>Bajas</span>
              </div>
            </li>
          </ul>
        </Card>

        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Distribución por estatus
          </dt>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-8">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="size-2.5 shrink-0 rounded-sm bg-blue-500" />
                <span>
                  Inscritos:{" "}
                  <span className="font-semibold">
                    {resumen.porcentajeInscritos}%
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 shrink-0 rounded-sm bg-gray-500" />
                <span>
                  Pendientes:{" "}
                  <span className="font-semibold">
                    {resumen.porcentajePendientes}%
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 shrink-0 rounded-sm bg-amber-500" />
                <span>
                  Bajas:{" "}
                  <span className="font-semibold">
                    {resumen.porcentajeBajas}%
                  </span>
                </span>
              </div>
            </div>

            <DonutChart
              data={[
                {
                  name: "Inscritos",
                  amount: resumen.inscritos,
                },
                {
                  name: "Pendientes",
                  amount: resumen.pendientes,
                },
                {
                  name: "Bajas",
                  amount: resumen.bajas,
                },
              ]}
              colors={["blue", "gray", "amber"]}
              category="name"
              value="amount"
              valueFormatter={(number: number) =>
                `${Intl.NumberFormat("es-MX").format(number)}`
              }
            />
          </div>
        </Card>

        {/* 
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
        </Card> */}
      </dl>

      <DataTable data={tickets} columns={columns} />
    </main>
  );
}
