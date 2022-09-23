// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 39,
        image: a,
        description: "Strong buisness character",
        color: "green"
    },
    {
        firstName: "Lukas",
        lastName: "Gonzalez",
        occupation: "Developer",
        age: 22,
        image: a,
        description: "Hates messy websites",
        color: "white"
    },
    {
        firstName: "Godfrey",
        lastName: "McQuavious",
        occupation: "Plumber",
        age: 81,
        image: a,
        description: "Can't get enough of toilets",
        color: "purple"
    },
    {
        firstName: "Roger",
        lastName: "Monsoon",
        occupation: "Nurse",
        age: 65,
        image: a,
        description: "Loves to take care of people",
        color: "red"
    },
    {
        firstName: "Andres",
        lastName: "Paulino",
        occupation: "Chef",
        age: 23,
        image: a,
        description: "Garlic is fun for him?",
        color: "blue"
    },
    {
        firstName: "Samantha",
        lastName: "Miller",
        occupation: "Vape shop owner",
        age: 47,
        image: a,
        description: "Black lung",
        color: "yellow"
    }
];

// Rooms Array

const roomsArray = [
    {name: "Bedroom"},
    {name: "Conservatory"},
    {name: "Cellar"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Fireplace"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"}
];

// Weapons Array

const weaponsArray = [
    {name: "blade", weight: 10},
    {name: "wrench", weight: 8 },
    {name: "lighter", weight: 2},
    {name: "dumbell",weight: 20},
    {name: "wine bottle", weight: 7},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "golf club", weight: 20},
    {name: "rifle", weight: 10}
];


// ITERATION 2

function selectRandom() {
    return array[Math.floor(Math.random()* array.length)];
}

function pickMystery() {
    let mystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
}


// ITERATION 3

function revealMystery() {
    let firstName = envelope.suspect.firstName;
    let lastName = envelope.suspect.lastName;
    let weapon = envelope.weapon.name;
    let room = envelope.room.name;

    return `${firstName} ${lastName} murdered someone with a ${weapon} at the ${room}.`;
}

