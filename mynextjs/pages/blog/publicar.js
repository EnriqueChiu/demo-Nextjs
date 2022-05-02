import Head from "next/head";
import Layout from "./layout";

export default function Publicar(){
  return(
    <Layout>
      <div>
        <Head>
          <title>Public Blog</title>
        </Head>
        <h1 className="text-white">Page Public</h1>
      </div>
    </Layout>
  )
}