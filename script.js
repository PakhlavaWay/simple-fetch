async function makeRequest() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  let data = await fetch(url);
  let result = await data.json();

  displayData(result)
}

makeRequest();

async function displayData(posts) {
  const dataUserId = document.querySelector('.data__user-id');
  const dataId = document.querySelector('.data__id');
  const dataTitle = document.querySelector('.data__title');
  const dataBody = document.querySelector('.data__body');
  
  posts.map( post => {
    dataUserId.insertAdjacentHTML(
      'beforeend',
      `
      <p class='post-text'>${post.userId}</p>
      <hr class='hr-second'>
      `
    )
    
    dataId.insertAdjacentHTML(
      'beforeend', 
      `
      <p class='post-text'>${post.id}</p>
      <hr class='hr-second'>
      `
    )
    
    dataTitle.insertAdjacentHTML(
      'beforeend',
      `
      <p class='post-text'>${post.title}</p>
      <hr class='hr-second'>
      `
    )
    
    dataBody.insertAdjacentHTML(
      'beforeend',
      `
      <p class='post-text'>${post.body}</p>
      <hr class='hr-second'>
      `
    )
  })
}

