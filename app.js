// Cat Adoption Center
const adoptionApp = {};

    adoptionApp.cat = {
        longHair: [
            {
                name: 'Onion',
                color: 'yellow',
                breed: 'Domestic longhair',
                url: 'assets/yellowCat.jpg'
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

            }
            
        ],
        shortHair: [
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
        ]
    };
    // This is init method
    adoptionApp.init = () => {
        $('main form').on('submit', function(e) {
            e.preventDefault();
    
            const userBreed = $('input[name="breed"]:checked').val();
            const userColor = $('input[name="color"]:checked').val();

            const choices = [];

            const chosenBreed = adoptionApp.cat[userBreed];

            for (let i = 0; i < chosenBreed.length; i++) {
                const chosenCat = chosenBreed[i];
                if (chosenCat.color === userColor) {
                    choices.push(chosenCat);
                }
            }
        //getRandomCat function
        const getRandomCat = choicesArray => {
            const randomIndex = Math.floor(Math.random() * choicesArray.length);
            return choicesArray[randomIndex];
        } 

        const finalCat = getRandomCat(choices);
        $('.results').append(`
            <img src="${finalCat.url}" alt="This is picture of a ${finalCat.color} cat">
            <h3>Name: ${finalCat.name}</h3>
            <p>Breed: ${finalCat.breed}</p>
            <p>Color: ${finalCat.color}</p>
            <button class="adoptCatButton">Adopt this cat!</button>`);
        })
    }

$(function() {
    adoptionApp.init();
});

// Get a random cat from the array (or get all the cats matched)

// Display images and information of matched results 

	
// $(function() {
// 	$('form').on('submit', function(e) {
// 		e.preventDefault();
// // 		// Get values of our selected radio buttons
// 		const userDrink = $('input[name="beverage"]:checked').val();
// 		const userPrice = $('input[name="price"]:checked').val();
		
// 		// creat an options array
// 		const options = [];
// 		// enter into drink type that matches variable
// 		const drinkSpecs = drinks[userDrink];
		
// 		// loop through array  for our drink type variable and ...
// 		for (let i = 0; i < drinkSpecs.length; i++) {
// 			const store = drinkSpecs[i];
// 			// while looping use if statements checking for price matches
// 			if (store.price === userPrice) {
// 				// when match is found , push to options arrays
// 				options.push(store);
// 			}
// 		}
// 		// get a random store from options array
// 		const finalStore = getRandomItem(options);
// 		console.log(finalStore);
// 		// append that store to results section
// 		$('.results').append(`<h2 class="choice">${finalStore.title}</h2>`)
// 	});

// });

// const getRandomItem = (optionsArray) => {
// 	const randomIndex = Math.floor(Math.random() * optionsArray.length);
// 	return optionsArray[randomIndex];
// }




