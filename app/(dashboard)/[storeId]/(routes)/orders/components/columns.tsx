"use client"

import { ColumnDef } from "@tanstack/react-table"

export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Sản phẩm",
  },
  {
    accessorKey: "phone",
    header: "Số điện thoại",
  },
  {
    accessorKey: "address",
    header: "Địa chỉ nhà",
  },
  {
    accessorKey: "totalPrice",
    header: "Tổng giá",
  },
  {
    accessorKey: "isPaid",
    header: "Số tiền trả",
  },
];
