// Cat Adoption Center
const adoptionApp = {};
    adoptionApp.cats = [
        {
            name: 'Onion',
            color: 'Yellow',
            breed: 'Domestic longhair',
            url: 'assets/yellowCat.jpg'

        },
        {
            name: 'Poutine',
            color: 'Mix',
            breed: 'Domestic longhair',
            url: 'assets/mixCat.jpg'

        },
        {
            name: 'Sushi',
            color: 'White',
            breed: 'Domestic longhair',
            url: 'assets/whiteCat.jpg'
        },
        {
            name: 'Apple',
            color: 'White',
            breed: 'Domestic shorthair',
            url: 'assets/whiteCat2.jpg'
        },
        {
            name: 'Peanut',
            color: 'Yellow',
            breed: 'Domestic shorthair',
            url: 'assets/yellow2.jpg'
        },
        {
            name: 'Cookie',
            color: 'Mix',
            breed: 'Domestic shorthair',
            url: 'assets/mix2.jpg'
        }

    ];
    
    //getRandomCat function (in case have more cats available for adoption in future)
    const getRandomCat = (chosenCatsArray) => {
        const randomIndex = Math.floor(Math.random() * chosenCatsArray.length);
        return chosenCatsArray[randomIndex];
    } 

    // startAdopCat Function
    const startAdoptCat = () => {
            // Smooth scroll to form section
            $("html, body").animate({
                scrollTop: $("h2").offset().top}, "slow");
    };

    // fintMyCat function
    const findMyCat = () => {
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
        <div class="chosenCatImg">
            <img src="${finalCat.url}" alt="This is picture of a ${finalCat.color} cat">
        </div>
        <div class="chosenCatInfo">
            <p><span>Name: ${finalCat.name}</span></p>
            <p>Breed: ${finalCat.breed}</p>
            <p>Color: ${finalCat.color}</p>
            <button class="adoptCatButton">Adopt this cat!</button>
        </div>
        `);

        // Smooth scroll to result section
        $("html, body").animate({
            scrollTop: $(".results").offset().top}, "slow");
    };

    // displayAdoptForm function
    const displayAdoptForm = () => {
        $('.adoptFormSection').addClass('adoptFormSectionDisplay');
            // smooth scroll
            $("html, body").animate({
                scrollTop: $(".adoptFormSection").offset().top}, "slow");
    };


    // Init function
    adoptionApp.init = () => {
        // Eventlistener when user clicks "Start Adopting" button
        $('.headerButton').on('click', function(e) {
            e.preventDefault();
            startAdoptCat();
        })

        // Eventlistener when user clicks "Find my cat" button
        $('.findCatButton').on('click', function(e) {
            e.preventDefault();
            findMyCat();
        })

        // Eventlistener to make the Adoption Form display and smooth scroll to this section
        $('.results').on('click', function(e) {
            e.preventDefault();
            displayAdoptForm();
        })
    }

// document ready function
$(function() {
adoptionApp.init();
});