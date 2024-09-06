"use server";

import { BuildTraceroute } from "@juzi/nodejs-traceroute";

export function performTraceroute(host: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const tracer = BuildTraceroute();
    const result: string[] = [];

    tracer.on("hop", (hop) => {
      result.push(hop.ip);
    });

    tracer.on("close", () => {
      resolve(result);
    });

    tracer.trace(host);
  });
}
