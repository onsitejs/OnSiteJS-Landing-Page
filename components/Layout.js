import React from 'react';
import Head from 'next/head';
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <meta name="description" content="Privacy-conscious website analytics that you'll actually like." />
        <meta name="author" content="OnSiteJS" />
        <meta property="og:title" content={props.pageTitle} />
        <meta property="og:image" content="/onsitejs-web-banner.png" />
        <meta property="og:url" content="https://onsitejs.org" />
        <meta property="og:site_name" content="OnSiteJS" />
        <meta property="og:description" content="Privacy-conscious website analytics that you'll actually like." />
        <meta name="twitter:title" content={props.pageTitle} />
        <meta name="twitter:image" content="/onsitejs-web-banner.png" />
        <meta name="twitter:url" content="https://onsitejs.org" />
        <meta name="twitter:card" content={props.pageTitle} />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
      </Head>
      <div>
        {props.children}
      </div>
</div>
  )
}
export default Layout;