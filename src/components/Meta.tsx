import React from "react";

interface Props {
  title: string;
  description: string;
  siteUrl: string;
  thumbnailUrl: string;
  author: string;
}

const Meta = (props: Props) => {
  return (
    <>
      <title>{props.title}</title>

      {/* Icons */}
      <link rel="shortcut icon" type="image/x-icon" href="icons/favicon.ico" />
      <link rel="icon" type="image/x-icon" href="icons/favicon.ico"></link>
      <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png" />
      <link rel="shortcut icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="icons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png" />
      <link rel="manifest" href="icons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      {/* Default */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={props.description} />
      <meta name="author" content={props.author} />
      <meta name="copyright" content={props.author} />

      {/* Opengraph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.siteUrl} />
      <meta property="og:title" content={props.title} />
      <meta property="og:image" content={props.thumbnailUrl} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
};

export default Meta;
