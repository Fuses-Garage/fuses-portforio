
import GenerateSitemap from "react-router-sitemap-maker";
import { MyRoutes } from "../src/router";

const sitemapData = await GenerateSitemap(MyRoutes(), {
    baseUrl: "https://fuses-garage.github.io/fuses-portforio",
    hashrouting: true,
});

sitemapData.toFile("./dist/sitemap.xml");