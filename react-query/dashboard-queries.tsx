import { DayTask, Product, Trial, User } from "@/generated/prisma";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

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
  trial: Trial | null;
  todayTasks: Array<object>;
  shippedProducts: Array<DayTask>;
  pendingTasks: Array<DayTask>;
  activeProject: Product | null;
  user: User;
};

type RedirectError = {
  redirect: string;
  status: string;
  message?: string;
};

export const fetchDashboardData = async (): Promise<DashboardData> => {
  try {
    const res = await axios.get(DASHBOARD_DATA_ENDPOINT);
    return res.data.data; // response: { success, data: { ... } }
  } catch (error) {
    const axiosError = error as AxiosError;

    if (
      axiosError.response?.status === 403 &&
      (axiosError.response?.data as RedirectError)?.redirect
    ) {
      const redirectUrl = (axiosError.response?.data as RedirectError).redirect;
      window.location.href = redirectUrl;
    }

    throw error; // Let react-query handle other errors
  }
};

export function useDashboardData({ ...requestOptions } = {}) {
  return useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
    ...requestOptions,
  });
}
