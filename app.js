// Cat Adoption Center
const adoptionApp = {};
    adoptionApp.cats = [
        {
            name: 'Onion',
            color: 'yellow',
            breed: 'Domestic longhair',
            url: 'assets/yellowCat.jpg',

        },
        {
            name: 'Poutine',
            color: 'mix',
            breed: 'Domestic longhair',
            url: 'assets/mixCat.jpg'

        },
        {
            name: 'Sushi',
            color: 'white',
            breed: 'Domestic longhair',
            url: 'assets/whiteCat.jpg'
        },
        {
            name: 'Apple',
            color: 'white',
            breed: 'Domestic shorthair',
            url: 'assets/whiteCat2.jpg'
        },
        {
            name: 'Peanut',
            color: 'yellow',
            breed: 'Domestic shorthair',
            url: 'assets/yellow2.jpg'
        },
        {
            name: 'Cookie',
            color: 'mix',
            breed: 'Domestic shorthair',
            url: 'assets/mix2.jpg'
        }

    ];
    // Init function
    adoptionApp.init = () => {
        // Event listener when user clicks "Find my cat" button
        $('main button').on('click', function(e) {
            e.preventDefault();
            $('.results').empty();
            
            // Get values selected by user and assign them to variables
            const userBreed = $('input[name="breed"]:checked').val();
            const userColor = $('input[name="color"]:checked').val();
            // Filter through array to find matched cat(s)
            const chosenCats = adoptionApp.cats.filter(function(catObject) {
                return catObject.breed === userBreed && catObject.color === userColor;
            })
            // Get a random (picked) cat and assign to a variable
            const finalCat = getRandomCat(chosenCats);
            //  Display image and information of the chosen cat 
            $('.results').append(`
            <img src="${finalCat.url}" alt="This is picture of a ${finalCat.color} cat">
            <h3>Name: ${finalCat.name}</h3>
            <p>Breed: ${finalCat.breed}</p>
            <p>Color: ${finalCat.color}</p>
            <button class="adoptCatButton">Adopt this cat!</button>`);
        })
        //getRandomCat function (in case have more cats available for adoption in future)
        const getRandomCat = (chosenCatsArray) => {
            const randomIndex = Math.floor(Math.random() * chosenCatsArray.length);
            return chosenCatsArray[randomIndex];
        } 

    }

// document ready function
$(function() {
adoptionApp.init();
});