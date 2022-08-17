import Document, { Head, Html, Main, NextScript } from 'next/document';

import { CustomFont } from '@/common/components/CustomFont';
import { Favicon } from '@/common/components/FavIcon';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
          <CustomFont />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
