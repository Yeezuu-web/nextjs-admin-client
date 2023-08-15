"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

export type UserColumn = {
  id: string,
  name: string,
  email: string
  createdAt: string
}

export const columns: ColumnDef<UserColumn>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "Action",
    cell: ({ row }) => <CellAction data={row.original} />,
  }
]
