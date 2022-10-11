import type { NextPage } from "next";

export interface HomeProps {
  cookies?: string;
}

const Home: NextPage<HomeProps> = () => {
  return (<main> Hello World </main>);
};

export default Home;
