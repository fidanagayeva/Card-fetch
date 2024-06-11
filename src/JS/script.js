document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const addBtn = document.querySelector('.add');
    const deleteBtn = document.querySelector('.delete');

    const initialCards = [
        {
            imgSrc: "https://html.creativegigstf.com/homy/homy/images/agent/img_01.jpg",
            name: "Mark Filo",
            position: "CEO&Founder"
        },
        {
            imgSrc: "https://html.creativegigstf.com/homy/homy/images/agent/img_02.jpg",
            name: "Chris Matial",
            position: "Retailer"
        },
        {
            imgSrc: "https://html.creativegigstf.com/homy/homy/images/agent/img_03.jpg",
            name: "Jubayer Al Hasan",
            position: "Marketing Expert"
        },
        {
            imgSrc: "https://html.creativegigstf.com/homy/homy/images/agent/img_04.jpg",
            name: "Jannatul Ferdaus",
            position: "Broker"
        }
    ];

    function createCard(cardData) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-image">
                <img src="${cardData.imgSrc}" alt="${cardData.name}">
            </div>
            <div class="card-title">
                <h1>${cardData.name}</h1>
                <h4>${cardData.position}</h4>
            </div>
        `;
        return card;
    }

    function loadInitialCards() {
        initialCards.forEach(cardData => {
            container.appendChild(createCard(cardData));
        });
    }

    addBtn.addEventListener('click', () => {
        fetchNewCardData().then(newCards => {
            newCards.forEach(cardData => {
                container.appendChild(createCard(cardData));
            });
        });
    });

    deleteBtn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        if (cards.length > initialCards.length) {
            container.removeChild(container.lastChild);
        }
    });

    function fetchNewCardData() {
        return new Promise(card => {
            setTimeout(() => {
                card([
                    {
                        imgSrc: "https://html.creativegigstf.com/homy/homy/images/agent/img_01.jpg",
                        name: "Mark Filo",
                        position: "CEO&Founder"
                    },
                    {
                        imgSrc: "https://html.creativegigstf.com/homy/homy/images/agent/img_02.jpg",
                        name: "Chris Matial",
                        position: "Retailer"
                    },
                    {
                        imgSrc: "https://html.creativegigstf.com/homy/homy/images/agent/img_03.jpg",
                        name: "Jubayer Al Hasan",
                        position: "Marketing Expert"
                    },
                    {
                        imgSrc: "https://html.creativegigstf.com/homy/homy/images/agent/img_04.jpg",
                        name: "Jannatul Ferdaus",
                        position: "Broker"
                    }
                ]);
            }, 500);
        });
    }

    loadInitialCards();
});
