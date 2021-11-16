import type { NextPage } from "next";

import { DefaultLayout } from "components/layouts";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <main>
        <h1>
          Welcome to <a href="https://jkrymarys.pl">my-website-v2</a>
        </h1>
      </main>
    </DefaultLayout>
  );
};

export default Home;
