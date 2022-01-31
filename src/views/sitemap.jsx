import RoutesModel from "../model/routesModel"

const Sitemap = () =>{
    let routes = RoutesModel()

    return `<?xml version='1.0' encoding='UTF-8'?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${routes
              .map(({ url, updated }) => {
                return `
                    <url>
                        <loc>${url}</loc>
                        <lastmod>${updated}</lastmod>
                    </url>
                `;
              })
              .join('')}
        </urlset>`
}


export default Sitemap