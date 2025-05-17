import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// endpoints
const DASHBOARD_DATA_ENDPOINT = "/api/current-user";

export type DashboardData = {
  success: boolean;
  products: Array<{
    id: string;
    name: string;
    description: string;
    percent: number;
    status: string;
    shipped: string | null;
    updated: string | null;
  }>;
  streak: number;
  todayTasks: Array<object>;
  shippedProducts: Array<object>;
  activeProject: object;
  user: object;
};

export const fetchDashboardData = async (): Promise<{
  data: DashboardData;
}> => {
  const res = await axios.get(DASHBOARD_DATA_ENDPOINT);
  return res.data;
};

export function useDashboardData({ ...requestOptions }) {
  return useQuery({
    queryKey: ["dashboardData"],
    queryFn: () => fetchDashboardData(),
    select: (data) => ({
      ...data.data,
    }),
    ...requestOptions,
  });
}
