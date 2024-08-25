"use client";

import FlowChart from "@/components/Node/FlowChart";
import { nvimFlow, tsFlow } from "@/moc";

export default async function Page({ params }: { params: { slug: string } }) {
  let flowComponent = tsFlow;
  switch (params.slug) {
    case "ts":
      flowComponent = tsFlow;
      break;
    case "nvim":
      flowComponent = nvimFlow;
      break;
    default:
      flowComponent = tsFlow;
      break;
  }

  return (
    <div className="h-[80dvh]">
      <FlowChart flowComponent={flowComponent} />
    </div>
  );
}
