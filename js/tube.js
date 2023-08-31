const handleCategory = async () => {
    console.log('hello word');
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const tabContainer = document.getElementById("tab-container");
    const newData = data.data;
    console.log(newData);

    newData.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadData('${category.category_id}')" class="tab bg-base-200">${category.category}</a>
        `;
        tabContainer.appendChild(div);
    });
};
const handleLoadData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const cardContainer = document.getElementById('card-container');

    const div = document.createElement('div');
    div.innerHTML = ``;
    cardContainer.appendChild(div);
}; 
handleCategory();