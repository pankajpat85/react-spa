import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@pankajpatil/navigation",
  app: () => import("//localhost:4200/pankajpatil-navigation.js"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@pankajpatil/profile",
  app: () => import("//localhost:4201/pankajpatil-profile.js"),
  activeWhen: ["/profile"],
});

registerApplication({
  name: "@pankajpatil/settings",
  app: () => import("//localhost:4202/pankajpatil-settings.js"),
  activeWhen: ["/settings"],
});

start({
  urlRerouteOnly: true,
});
