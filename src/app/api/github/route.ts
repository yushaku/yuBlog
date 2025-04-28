import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
const GITHUB_USER_ENDPOINT = "https://api.github.com/graphql";

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export async function GET(req: NextRequest) {
  const username = "saif-arshad";
  const token = process.env.GITHUB_READ_USER_TOKEN_PERSONAL;
  try {
    const response = await fetch(GITHUB_USER_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GITHUB_USER_QUERY,
        variables: {
          username: username,
        },
      }),
    });

    const status: number = response.status;
    const responseJson = await response.json();

    if (status > 400) {
      return NextResponse.json({ status, data: {} });
    }

    const res = NextResponse.json({ status, data: responseJson.data.user });
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (error: any) {
    return NextResponse.json({ status: 500, data: {} });
  }
}
