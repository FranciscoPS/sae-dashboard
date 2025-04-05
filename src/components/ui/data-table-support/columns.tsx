import { ColumnDef } from "@tanstack/react-table";

export type ProspectoRow = {
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

export const columns: ColumnDef<ProspectoRow>[] = [
  {
    header: "NOMBRES",
    accessorKey: "NOMBRES",
    meta: { displayName: "NOMBRES", className: "text-left" },
  },
  {
    header: "APELLIDO PATERNO",
    accessorKey: "APELLIDO_PATERNO",
    meta: { displayName: "APELLIDO PATERNO", className: "text-left" },
  },
  {
    header: "APELLIDO MATERNO",
    accessorKey: "APELLIDO_MATERNO",
    meta: { displayName: "APELLIDO MATERNO", className: "text-left" },
  },
  {
    header: "CALLE",
    accessorKey: "CALLE",
    meta: { displayName: "CALLE", className: "text-left" },
  },
  {
    header: "NÚMERO",
    accessorKey: "NÚMERO",
    meta: { displayName: "NÚMERO", className: "text-left" },
  },
  {
    header: "CÓDIGO POSTAL",
    accessorKey: "CP",
    meta: { displayName: "CÓDIGO POSTAL", className: "text-left" },
  },
  {
    header: "COLONIA",
    accessorKey: "COLONIA",
    meta: { displayName: "COLONIA", className: "text-left" },
  },
  {
    header: "ESTADO",
    accessorKey: "ESTADO",
    meta: { displayName: "ESTADO", className: "text-left" },
  },
  {
    header: "MUNICIPIO",
    accessorKey: "MUNICIPIO",
    meta: { displayName: "MUNICIPIO", className: "text-left" },
  },
  {
    header: "CARRERA",
    accessorKey: "CARRERA",
    meta: { displayName: "CARRERA", className: "text-left" },
  },
  {
    header: "PERIODO",
    accessorKey: "PERIODO",
    meta: { displayName: "PERIODO", className: "text-left" },
  },
  {
    header: "ESTATUS",
    accessorKey: "ESTATUS",
    meta: { displayName: "ESTATUS", className: "text-left" },
    cell: ({ row }) => {
      const raw = row.original.ESTATUS.toLowerCase();
      const value = raw === "nuin" ? "inscrito" : raw;
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
  {
    header: "MATRÍCULA",
    accessorKey: "MATRICULA",
    meta: { displayName: "MATRÍCULA", className: "text-left" },
  },
];