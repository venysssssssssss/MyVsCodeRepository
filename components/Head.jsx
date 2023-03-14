import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Vinícius Reis Portfolio."
      />
      <meta
        name="keywords"
        content="Vinícius reis, reis, vinícius, data scientist portfolio, machine learning engineer, vinícius Reis portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Vinícius Reis portfolio" />
      <meta
        property="og:description"
        content="Vinícius Reis portfolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.tech" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Vinícius Reis',
};
