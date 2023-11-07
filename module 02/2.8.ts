// typescript promise

type UJ = Promise<string>;
type JI = string;

const promiseMake = (value: boolean): UJ => {
  return new Promise<JI>((res, rej) => {
    if (value) {
      res("success");
    } else {
      rej("failed");
    }
  });
};

const callPromise = async (): UJ => {
  const result: JI = await promiseMake(true);
  return result;
};

const result23 = callPromise();

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchJSON = async (): Promise<Posts[]> => {
  const response: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const json = await response.json();
  return json;
};

const callFetch = async () => {
  const result = await fetchJSON();
  console.log(result);
};

callFetch();
