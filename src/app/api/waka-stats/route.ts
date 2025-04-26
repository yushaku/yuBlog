import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
const API_KEY = process.env.WAKATIME_API_KEY;

const STATS_ENDPOINT = "https://wakatime.com/api/v1/users/current/stats";
const ALL_TIME_SINCE_TODAY =
  "https://wakatime.com/api/v1/users/current/all_time_since_today";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const readStatsResponse = await getReadStats();
    const allTimeSinceTodayResponse = await getALLTimeSinceToday();

    const data = {
      ...readStatsResponse.data,
      all_time_since_today: allTimeSinceTodayResponse.data,
    };

    const res = NextResponse.json({ data: data });
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      data: {},
      message: "An error occurred while fetching Waka stats",
    });
  }
}

const getReadStats = async (): Promise<{
  status: number;
  data: any;
}> => {
  const response = await fetch(`${STATS_ENDPOINT}/last_7_days`, {
    headers: {
      Authorization: `Basic ${API_KEY}`,
    },
  });

  const status = response.status;

  if (status >= 400) return { status, data: [] };

  const getData = await response.json();

  const start_date = getData?.data?.start;
  const end_date = getData?.data?.end;
  const last_update = getData?.data?.modified_at;

  const categories = getData?.data?.categories;

  const best_day = {
    date: getData?.data?.best_day?.date,
    text: getData?.data?.best_day?.text,
  };
  const human_readable_daily_average =
    getData?.data?.human_readable_daily_average_including_other_language;
  const human_readable_total =
    getData?.data?.human_readable_total_including_other_language;

  const languages = getData?.data?.languages?.slice(0, 3);
  const editors = getData?.data?.editors;

  return {
    status,
    data: {
      last_update,
      start_date,
      end_date,
      categories,
      best_day,
      human_readable_daily_average,
      human_readable_total,
      languages,
      editors,
    },
  };
};

const getALLTimeSinceToday = async (): Promise<{
  status: number;
  data: any;
}> => {
  const response = await fetch(ALL_TIME_SINCE_TODAY, {
    headers: {
      Authorization: `Basic ${API_KEY}`,
    },
  });

  const status = response.status;

  if (status >= 400) return { status, data: {} };

  const getData = await response.json();

  const data = {
    text: getData?.data?.text,
    total_seconds: getData?.data?.total_seconds,
  };

  return {
    status,
    data,
  };
};
