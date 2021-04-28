import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Error from "./_error";

export default function Home({ user, statusCode }) {
  // console.log(statusCode)
  // if (statusCode === 500) {
  //   // This line will show the default Error Page
  //   return <Error statusCode={statusCode} />;
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href={{ pathname: "/users", query: { id: 0 } }}>
            <a>Go to Users page</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

Home.getInitialProps = async ({ query, res }) => {
  const { id } = query;
  //const user = users.find(u => u.id == id);
  // The find method return undefined if the condition
  // does not match
  //if (!user) {
  // here you can assume user is undefined that means
  // it is an nonexistent user so change the status code
  // of the response.
  res.statusCode = 500;
  const response = await fetch("http://localhost:3000/api/hello");
  const user = response.json();
  //}
  return {
    user: {},
    statusCode: 500,
  };
};
