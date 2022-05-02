import Head from 'next/head'
import styles from '../../styles/Blog.module.css'
import Layout from './layout'


export default function Blog(){

  return(
    <Layout>
      <Head>
        <title>My blog</title>
      </Head>
      <div className='container-fluid'>
        <div className='container'>
          <h1 className={styles.container__title}>
            Bievenido a mi blog
          </h1>
        </div>
      </div>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-md-4 offset-md-2'>
            <h1 className='text-center bg-warning bg-gradient rounded mt-5 p-5'>
              Publicas tus blogs aqui 
            </h1>
          </div>
          <div className='col-md-4 offset-md-1'>
            <img src="  " className="img-fluid rounded" alt="blog images" />
          </div>
        </div>
      </div>
    </Layout>
  )
}