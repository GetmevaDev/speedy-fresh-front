export async function fetchData(path) {
  try {
    const res = await fetch(
      `https://speedy-fresh-backend-dc6b302e05ac.herokuapp.com/api/${path}?populate=deep`
    );

    const data = await res.json();
    return data;
    
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}