const sortView = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000");
    const data = await res.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML ="";
    const view = data.data
    console.log(view);
    const sort = view.sort((a, b) => b.views - a.views);

    sort.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-10/12 h-5/6 bg-base-100 shadow-xl ml-8">
                <figure>
                <img class="w-full" src="${item.thumbnail}" alt="" /></figure>
                <div class="card-body mr-4">
                <div class="flex ">
                    <div>
                      <div class="avatar">
                        <div class="w-12  rounded-full mt-1">
                        <img src="${item.authors[0].profile_picture}" />
                        </div>
                      </div>
                    </div>
                    <div>
                    <h2 class="card-title ml-2 text-lg font-bold">${item.title}</h2>
                    <div class=" flex ml-2">
                  <p class="">${item.authors[0].profile_name}</p>
                  <img class="-mr-6" src="icon/fi_10629607.svg" />
                  </div>
                  <p class="ml-2">${item.others?.views}</p>
                    </div>
                  </div>
                </div>
              </div>
        `;
        cardContainer.appendChild(div);
    });
};
sortView();
const handleCategory = async () => {
  console.log('hello word');
  const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
  const data = await res.json();
  const tabContainer = document.getElementById("tab-container");
  const newData = data.data;

  newData.forEach((category) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <a onclick="handleLoadData('${category.category_id}')" class="tab tabs-box bg-base-200 mb-20 hover:bg-red-500 ">${category.category}</a>
      `;
      tabContainer.appendChild(div);
  });
};
const handleLoadData = async(categoryId) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
  const data = await res.json();
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML ="";
  const newData = data.data;
  console.log(newData);

  newData.forEach((card) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-10/12 h-5/6 bg-base-100 shadow-xl ml-8">
                <figure>
                <img class="w-full "  src="${card?.thumbnail}" alt="" /></figure>
                <div class="card-body mr-4">
                <div class="flex ">
                    <div>
                      <div class="avatar">
                        <div class="w-12 rounded-full mt-1">
                        <img src="${card.authors[0]?.profile_picture}" />
                        </div>
                      </div>
                    </div>
                    <div>
                    <h2 class="card-title ml-2 text-lg font-semibold">${card.title}</h2>
                    <div class="flex ml-2">
                  <p>${card.authors[0]?.profile_name}</p>
                  <img class=" " src="icon/fi_10629607.svg" />
                  </div>
                  <p class="ml-2">${card.others?.views}</p>
                    </div>
                  </div>
                </div>
              </div>
    `;
    cardContainer.appendChild(div);
  });
};
handleLoadData('1000');
handleCategory();
