const movies = [
    {
        title: "Harry Potter och de vises sten",
        points: 6,
        year: 2001,
        image: "images/Harry_potter_1.jpg",
        about: "En föräldralös pojke som bor under sin elaka morbrors trappa upptäcker en helt dold, magisk parallellvärld. Han bjuds in till en hemlighetsfull internatskola där han ställs inför gåtor, magiska varelser och ett mörkt förflutet han inte visste att han hade."
    },
    {
        title: "Harry Potter och Hemligheternas kammare",
        points: 6.8,
        year: 2002,
        image: "images/Harry_potter_2.jpg",
        about: "Skolåret har knappt börjat förrän mystiska röster hörs i väggarna och elever börjar drabbas av en okänd, förlamande förbannelse. Ett flera hundra år gammalt mysterium ställs på sin spets när en legendarisk och farlig kammare sägs ha öppnats."
    },
    {
        title: "Harry Potter och fången från Azkaban",
        points: 7,
        year: 2004,
        image: "images/Harry_potter_3.jpg",
        about: "En skräckinjagande och till synes oslagbar fånge har rymt från trollkarlsvärldens hårdaste fängelse, och ryktet säger att han är på väg mot skolan. Samtidigt omringas skolområdet av mörka väsen som livnär sig på människors allra värsta minnen."
    },
    {
        title: "Harry Potter och den flammande bägaren",
        points: 7.5,
        year: 2005,
        image: "images/Harry_potter_4.jpg",
        about: "Skolan står värd för en uråldrig och livsfarlig tävling mellan tre olika magiskolor. När en fjärde deltagare oavsiktligt väljs ut dras huvudpersonen in i ett dödligt spel där varken lärarna eller tävlingsreglerna kan skydda honom."
    },
    {
        title: "Harry Potter och Fenixorden",
        points: 8,
        year: 2007,
        image: "images/Harry_potter_5.jpg",
        about: "Myndigheterna vägrar tro på att en ondskraft är på väg att återvända och sätter skolan under sträng övervakning. När eleverna förbjuds att lära sig praktiskt försvar bildas en hemlig motståndsrörelse i det dolda."
    },
    {
        title: "Harry Potter och halvblodsprinsen",
        points: 6.5,
        year: 2009,
        image: "images/Harry_potter_6.jpg",
        about: "När mörkret sprider sig utanför skolans murar hittar huvudpersonen en gammal, kladdig skolbok fylld med bortglömda och kraftfulla besvärjelser. Boken leder honom in på en jaktslinga efter skurkens allra djupaste och mest välbevarade hemligheter."
    },
    {
        title: "Harry Potter och dödsrelikerna – Del 1",
        points: 10,
        year: 2010,
        image: "images/Harry_potter_7.jpg",
        about: "Det trygga skolskalets skydd är borta. Tre ungdomar tvingas ut på flykt i en mörk och fientlig värld för att hitta och förstöra de hemliga föremål som håller den onda maktens odödlighet vid liv."
    },
    {
        title: "Harry Potter och Dödsrelikerna: Del 2",
        points: 10,
        year: 2011,
        image: "images/Harry_potter_8.jpg",
        about: "Jakten på de sista gömda föremålen når sitt slut och leder hela berättelsen tillbaka till platsen där allt började. En storslagen slutuppgörelse väntar där hela den magiska världens öde avgörs."
    }
];

function displayMovies(moviesList) {
    const container = document.querySelector('.movie-container');
    if (!container) return;
    
    container.innerHTML = '';

    moviesList.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${movie.image || 'images/default.jpg'}" alt="${movie.title}" class="card-img">
            <div class="card-content">
                <h2>${movie.title}</h2>
                <p>Betyg: ${movie.points}</p>
                <p>År: ${movie.year}</p>
                <button class="btn">Läs mer</button>
            </div>
        `;

        const btn = card.querySelector('.btn');
        btn.addEventListener('click', function() {
            let readmore = document.querySelector('.readmore-container');
            if (!readmore) {
                readmore = document.createElement('div');
                readmore.classList.add('readmore-container');
                const mainContent = document.querySelector('main');
                if (mainContent) mainContent.appendChild(readmore);
            }

            readmore.innerHTML = `
                <img src="${movie.image || 'images/default.jpg'}" alt="${movie.title}" class="readmore-img">
                <div class="readmore-info">
                    <h2>${movie.title}</h2>
                    <p><strong>Betyg:</strong> ${movie.points}</p>
                    <p><strong>År:</strong> ${movie.year}</p>
                    <p class="readmore-text">${movie.about}</p>
                </div>
            `;
            
            readmore.scrollIntoView({ behavior: 'smooth' });
        });

        container.appendChild(card);
    });
}

function sortMovies() {
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filter-container');
    filterContainer.innerHTML = `
        <label for="sort-select">Sortera efter:</label>
        <select id="sort-select">
            <option value="points-desc">Högst betyg först</option>
            <option value="points-asc">Lägst betyg först</option>
            <option value="year-desc">Nyast först</option>
            <option value="year-asc">Äldst först</option>
        </select>
    `;

    const movieContainer = document.querySelector('.movie-container');
    if (movieContainer && movieContainer.parentNode) {
        movieContainer.parentNode.insertBefore(filterContainer, movieContainer);
    }

    const sortSelect = filterContainer.querySelector('#sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (event) => {
            const selected = event.target.value;
            const sortedMovies = [...movies];

            switch (selected) {
                case 'points-asc':
                    sortedMovies.sort((a, b) => a.points - b.points);
                    break;
                case 'points-desc':
                    sortedMovies.sort((a, b) => b.points - a.points);
                    break;
                case 'year-desc':
                    sortedMovies.sort((a, b) => b.year - a.year);
                    break;
                case 'year-asc':
                    sortedMovies.sort((a, b) => a.year - b.year);
                    break;
            }

            displayMovies(sortedMovies);
        });
    }
}

const hamburgerBtn = document.getElementById('hamburger-menu');
const navMenu = document.querySelector('.nav');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const newMovie = {
            title: document.querySelector('#name').value,
            points: Number(document.querySelector('#score').value),
            year: Number(document.querySelector('#age').value),
            about: document.querySelector('#about').value,
            image: "images/default.jpg" 
        };

        movies.push(newMovie);

        displayMovies(movies);

        form.reset();
    });
}

displayMovies(movies);
sortMovies();



