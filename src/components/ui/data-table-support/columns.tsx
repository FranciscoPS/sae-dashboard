import { Badge } from "@/components/Badge";
import { ColumnDef } from "@tanstack/react-table";

type Registro = {
  id: string;
  created: string;
  name: string;
  enrollment: string;
  career: string;
  trimester: string;
  status: "inscrito" | "pendiente" | "baja";
};

export const columns = [
  {
    header: "Creado el día",
    accessorKey: "created",
    meta: {
      displayName: "Creado el día",
      className: "text-left",
    },
    cell: ({ row }) => (
      <>
        {new Date(row.original.created).toLocaleDateString("es-MX", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </>
    ),
  },
  {
    header: "Nombre",
    accessorKey: "name",
    meta: {
      displayName: "Nombre",
      className: "text-left",
      cell: "font-medium text-gray-900 dark:text-gray-50",
    },
  },
  {
    header: "Matrícula",
    accessorKey: "enrollment",
    meta: {
      displayName: "Matrícula",
      className: "text-left",
      cell: "font-medium",
    },
  },
  {
    header: "Carrera",
    accessorKey: "career",
    meta: {
      displayName: "Carrera",
      className: "text-left",
    },
  },
  {
    header: "Trimestre",
    accessorKey: "trimester",
    meta: {
      displayName: "Trimestre",
      className: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      displayName: "Estatus",
      className: "text-left",
    },
    cell: ({ row }) => {
      const value = row.original.status;
      const color =
        value === "inscrito"
          ? "bg-emerald-600 dark:bg-emerald-400"
          : value === "pendiente"
          ? "bg-gray-500 dark:bg-gray-500"
          : "bg-red-500 dark:bg-red-500";

      return (
        <div className="flex items-center gap-2 font-medium capitalize text-gray-800 dark:text-gray-300">
          <span className={`size-2 shrink-0 rounded-sm ${color}`} />
          {value}
        </div>
      );
    },
  },
] satisfies ColumnDef<Registro>[];

