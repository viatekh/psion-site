import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

// Online, the editor signs people in through a GitHub App. Until its keys are added to the
// hosting environment the editor stays switched off rather than breaking the site build.
const ready = process.env.NODE_ENV === "development" || !!process.env.KEYSTATIC_GITHUB_CLIENT_ID;
const notSetUp = () => new Response("The editor has not been set up yet.", { status: 404 });

export const { POST, GET } = ready ? makeRouteHandler({ config }) : { POST: notSetUp, GET: notSetUp };
