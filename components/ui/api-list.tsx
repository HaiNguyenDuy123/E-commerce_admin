"use client";

import { ApiAlert } from "@/components/ui/api-alert";
import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entityIdName,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert title="TRUY VẤN" variant="public" description={`${baseUrl}/${entityName}`} />
      <ApiAlert title="TRUY VẤN" variant="public" description={`${baseUrl}/${entityName}/{${entityIdName}}`} />
      <ApiAlert title="THÊM" variant="admin" description={`${baseUrl}/${entityName}`} />
      <ApiAlert title="CẬP NHẬP" variant="admin" description={`${baseUrl}/${entityName}/{${entityIdName}}`} />
      <ApiAlert title="XÓA" variant="admin" description={`${baseUrl}/${entityName}/{${entityIdName}}`} />
    </>
  );
};
