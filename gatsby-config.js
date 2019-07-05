/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'TEC Map Viewer',
    description: 'Mapa de TEC Embrace',
    author: '@devembrace',
    tecLayers: [
      "http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312944",
      "http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312945",
      "http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312946",
      "http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312947",
      "http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312948",
      "http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312949",
      "http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312950"
    ]
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
}
