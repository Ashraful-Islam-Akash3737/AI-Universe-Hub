const callData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json()
    const info = data.data.tools;
    console.log(info);
    displayData(info);
}

const displayData = (info) => {
    const cardContainer = document.getElementById('card-container');

    info.forEach(dataInfo => {
        console.log(dataInfo)
        const singleCard = document.createElement('div');
        singleCard.classList = 'card bg-gray-100 p-5 shadow-xl';
        singleCard.innerHTML = `
        <figure><img src="${dataInfo.image} " alt="Shoes" /></figure>
        <div class="card-body flex flex-col justify-start">
            <h2 class="font-bold text-2xl">
                Features
            </h2>
            <ol type="1">
                <li>${dataInfo.features[0]}</li>
                <li>${dataInfo.features[1]}</li>
                <li>${dataInfo.features[2]}</li>
            </ol>
            <hr class="mt-2">
            <div calss=" flex flex-row" style="
            display: flex;
            align-items: center;
            justify-content: space-between;">
                <section>
                    <h2 class="font-bold text-2xl mb-2">${dataInfo.name}</h2>
                    <div><i class="fa-solid fa-calendar-days pr-2"></i> ${dataInfo.published_in}</div>
                </section>
                <section>
                    <i class="fa-solid fa-arrow-right text-red-400 bg-red-100 p-3 rounded-full"></i>
                </section>
            </div>
        </div>
        
        
                    
        `;
        cardContainer.appendChild(singleCard);
    });



}
callData();