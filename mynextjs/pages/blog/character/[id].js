import Layout from "../layout";


export default function Character({dataCharacter}){
  return (
    <Layout>
      <h1 className="text-white text-center mt-5">{dataCharacter.name}</h1>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col offset-md-5">
            <img src={dataCharacter.image} alt='image' />
          </div>
        </div>
        <div className="row text-white">
          <h1>Status: {dataCharacter.status}</h1>
          <h1>Species: {dataCharacter.species}</h1>
          <h1>Gender: {dataCharacter.gender}</h1>
        </div>
      </div>
    </Layout>
  )
}

async function getAllPostsIds(){
  const data = await fetch("https://rickandmortyapi.com/api/character");

  const jsondata = await data.json();
 
  return jsondata.results.map((character)=>{
    return {
      params: {id: character.name}
    };
  });
}

async function getPostData(id){
  const data = await fetch("https://rickandmortyapi.com/api/character");

  const jsondata = await data.json();

  const post = jsondata.results.find((character) => character.name === id);


  return post
}

export async function getStaticPaths (){
  const posts = await getAllPostsIds();

  return {
    paths: posts,
    fallback: false,
  };
}


export async function getStaticProps({ params }){
  const post = await getPostData(params.id)

  return{
    props:{
      dataCharacter: post,
    }
  };
}