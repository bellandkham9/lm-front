/* async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const jsonData = await response.json();
  console.log({ data: jsonData });
  // return { props: { data: jsonData } };
  return (
    <div className="bg-green-400 text-white">
      <p className="text-2xl">{jsonData}</p>
    </div>
  );
}

export default getServerSideProps;
 */