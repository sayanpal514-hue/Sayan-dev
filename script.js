const books = [
  {
    title: "Feluda Samagra",
    author: "Satyajit Ray",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    viewPdf: "https://drive.google.com/file/d/11aighjuQ0jq77sfm9fiX7v8HfZMM4P2o/view?usp=sharing",
    downloadPdf: "https://drive.google.com/uc?export=download&id=11aighjuQ0jq77sfm9fiX7v8HfZMM4P2o"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    viewPdf: "https://drive.google.com/file/d/12345/view?usp=sharing",
    downloadPdf: "https://drive.google.com/uc?export=download&id=12345"
  },
  {
    title: "Physics Fundamentals",
    author: "H.C. Verma",
    cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    viewPdf: "https://drive.google.com/file/d/67890/view?usp=sharing",
    downloadPdf: "https://drive.google.com/uc?export=download&id=67890"
  }
];

const container = document.getElementById("bookContainer");

function displayBooks(list) {
  container.innerHTML = "";
  list.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <div class="info">
        <div class="title">${book.title}</div>
        <div class="author">${book.author}</div>
        <div class="actions">
          <a href="${book.viewPdf}" target="_blank">📖 View</a>
          <a href="${book.downloadPdf}" target="_blank">⬇️ Download</a>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

displayBooks(books);

document.getElementById("searchBox").addEventListener("input", function () {
  const term = this.value.toLowerCase();
  const filtered = books.filter(
    b =>
      b.title.toLowerCase().includes(term) ||
      b.author.toLowerCase().includes(term)
  );
  displayBooks(filtered);
});
