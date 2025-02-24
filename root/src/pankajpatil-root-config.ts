import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@pankajpatil/layout",
  app: () => import("@pankajpatil/layout"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
