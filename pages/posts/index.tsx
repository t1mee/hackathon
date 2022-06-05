import React from "react";

const Posts = () => {
  return <> </>;
};

export default Posts;

export async function getServerSideProps() {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json(),
    );
    //   .then((json) => console.log(json));
  } catch (e) {
    notFound: true;
  }

  return {
    props: {},
  };
}
