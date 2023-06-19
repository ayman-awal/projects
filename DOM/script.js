
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    const mainList = document.getElementById("main_list");
    const postDetails = document.getElementById("post_details");
    
    
    //const backButton = document.getElementById("back_button");

    data.forEach((post) => {
      const listItem = document.createElement("li");

      const title = document.createElement("h3");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      listItem.appendChild(title);
      listItem.appendChild(body);

      listItem.addEventListener("click", () => {
        mainList.style.display = "none";
        postDetails.style.display = "block";

        postDetails.innerHTML = "";

        const postTitleElement = document.createElement("h2");
        postTitleElement.textContent = post.title;

        const postBodyElement = document.createElement("p");
        postBodyElement.textContent = post.body;

        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.id = "back_button";

        postDetails.appendChild(postTitleElement);
        postDetails.appendChild(postBodyElement);
        postDetails.appendChild(backButton);

        backButton.addEventListener("click", () => {
          mainList.style.display = "block";
          postDetails.style.display = "none";
        });
      });
      mainList.appendChild(listItem);
    });
  })
 
