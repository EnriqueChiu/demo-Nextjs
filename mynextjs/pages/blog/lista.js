import Head from "next/head";
import Link from "next/link";
import Layout from "./layout";

export default function Lista({posts}){
  return(
    <div className="background">
    <Layout>
      <div>
        <Head>
          <title>List Blog</title>
        </Head>
        <h1 className="text-center mb-5 mt-5 text-white">Page List</h1>
        <div className="container">
          <div className="row">
            {posts.results.map((character)=>(
              <div className="col-md-3 offset-md-1 mb-5 p-4 bg-dark rounded text-white" key={character.id}>
                <Link href={`/blog/character/${character.name}`}>
                  <a><h2 >{character.name}</h2></a>
                </Link>
                <img src={character.image} className="img-fluid rounded mb-2" alt='image'/>
                <h4>Gender: {character.gender}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
    </div>
  )
}

export async function getStaticProps(){
  const data = await fetch("https://rickandmortyapi.com/api/character");

  const jsondata = await data.json();

  return{
    props: {posts: jsondata}
  }
}