const tasks = [
  {
    topic: 'Intermediate Array Methods',
    task: 'Implement a function to find the intersection of two arrays',
    sampleData: [
      [1, 2, 3, 4, 5],
      [4, 5, 6, 7, 8]
    ],
    expectedOutput: [4, 5]
  },
  {
    topic: 'Object Methods',
    task: 'Implement a function to merge two objects',
    sampleData: [
      { a: 1, b: 2 },
      { b: 3, c: 4 }
    ],
    expectedOutput: { a: 1, b: 3, c: 4 }
  },
  {
    topic: 'Async Programming',
    task: 'Implement a function to fetch data from an API and return the response',
    sampleData: ['https://api.github.com/users/octocat'],
    expectedOutput: {
      login: 'octocat',
      id: 583231
    }
  }
]

export default tasks

async function fetchAPI(sampleData){
    const data = await fetch(sampleData)
    if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
    }
    const res = await data.json()
    return res
}

fetchAPI('https://api.github.com/users/octocat')
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Other tasks to improve async/await skills:
// 1. Create a function to fetch data from an API and return the response with a timeout of 5 seconds
// 2. Create a function to fetch data from two APIs and return the responses in an array
// 3. Create a function to fetch data from an API and return the response with proper error handling
// 4. Create a function to fetch data from an API and return the response in a promise chain
// 5. Create a function to fetch data from an API and return the response using async/await with try-catch block