import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://digitechavenue.vercel.app",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://digitechavenue.vercel.app/#services",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://digitechavenue.vercel.app/#projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://digitechavenue.vercel.app/#pricing",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
    ];
}
