"use client"

import { Divider } from "@/components/Divider"
import { columns } from "@/components/ui/data-table-support/columns";
import { DataTable } from "@/components/ui/data-table/DataTable"
import { tickets } from "@/data/support/tickets"

export default function Tables() {
  return (
    <main>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Tablas
          </h1>
          <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
            Filtros y búsqueda de alumnos por trimestre
          </p>
        </div>
      </div>
      <Divider />
      <section className="mt-8">
        <DataTable data={tickets} columns={columns} />
      </section>
    </main>
  )
}
