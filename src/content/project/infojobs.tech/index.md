---
title: "Infojobs.tech"
description: "Leading job search portal for the technology sector"
heroImage: "v1/portfolio/projects/infojobstech"
url: "https://www.infojobs.tech/"
type: "fullstack"
technologies: [
	{id: "html5", name: "HTML 5", src: "/icons/html5.svg" },  
	{id: "tailwind", name: "Tailwind CSS", src: "/icons/tailwind.svg"},
	{id: "typescript", name: "Typescript", src: "/icons/typescript.svg" },  
	{id: "next", name: "Next js", src: "/icons/nextjs.svg" }
]
---

[Github]()

[Infojobs.tech](https://www.infojobs.tech/) is a platform inspired by the popular job website Infojobs.com. The main goal is to provide a specialized service for job opportunities in the technology sector, while offering the unique capability to visualize these opportunities on a geographic map. Unlike conventional job search services, this exclusive functionality of Infojobs.tech provides users with a clear and concise visual perspective of employment opportunities in the technology field within their area of interest.

## Technology stack

The tool has been built using the following technologies:

- [API](https://developer.infojobs.net/): API where we are getting all Infojobs offers
- [Next.js](https://nextjs.org/): React framework for building the webpage using server-side rendering (SSR).
- [Tailwind CSS](https://tailwindcss.com/) with [Flowbite](https://flowbite.com/): This CSS framework has been used with the Flowbite component library to create the tool interface in a simple and easy way.

## Important things to mention

To enhance the user experience, we have added an additional feature to the Infojobs API. The original API does not provide geolocation information for each job listing. Therefore, we have implemented a geolocation calculation process for different locations and saved them in a cache-like structure, using a JSON file to reduce costs. The geolocation calculations were performed using the Google Maps API.

Furthermore, to improve the visualization of the job listings on the map and prevent an overwhelming number of markers, we have integrated a library that creates clusters to simplify their representation. This functionality allows for better organization and visualization of the job opportunities on the map.
