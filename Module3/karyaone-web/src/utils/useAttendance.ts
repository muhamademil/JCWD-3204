import { api } from "@/lib/axios";
import { getAuthCookie } from "@/lib/cookies";

export function useAttendance() {
  const authorize = getAuthCookie();

  async function getMothlyAttendance(
    userId: number,
    startDate: string,
    endDate: string
  ) {
    try {
      const response = await api.get("`/attendance/mobthly", {
        params: {
          userId,
          startDate,
          endDate,
        },
        headers: {
          Authorization: `Bearer ${authorize.token}`,
        },
      });
      return {
        data: response.data.data,
        status: true,
      };
    } catch (error) {
      return {
        error: error,
        success: false,
      };
    }
  }
  return {
    getMothlyAttendance,
  };
}
