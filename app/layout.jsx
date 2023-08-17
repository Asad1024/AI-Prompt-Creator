import Nav from "@components/Nav";
import Head from 'next/head';
import Provider from "@components/Provider";
import "@styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
       <Head>
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
