var data = {
    "years": [
        "2017 \u2013 2018",
        "2018",
        "2018",
        "2018",
        "2018 - 2019",
        "2018 - 2019",
        "2019",
        "2019",
        "2019",
        "2019"
    ],
    "names": [
        "Anyone Can Make Game, SEAMEO",
        "Cambodia Physics Olympiad, Moeys",
        "Delegate Organizing, AIESEC",
        "Sugar Spoon Innovator, ITC Techno Innovation",
        "Graphic Designer Director, TEDxKramounSarSt",
        "Audience Ticket System Programmer, TEDxKramounSarSt",
        "CREATE A FULL STACK WEBSITE CALLED AKSOR",
        "ASEAN Data Scientist, ASEAN Foundation",
        "ASEAN UI/UX Designer, ASEAN Foundation",
        "ChisChort AI & System Developer, UNDP"
    ],
    "descriptions": [
        "Designing and code the game. Getting 4th place in ASEAN",
        "Physics Olympiad: 1st school, 3rd Phnom Penh city, 22nd Cambodia",
        "Organize speakers, audience, partners at YSF (Youth Speak Forum)",
        "Finalist of startup competition making solvable sugar spoon for coffee",
        "Taking control over event design",
        "Create a web base digital system for the audience attendance",
        "It's about the website that B2B of selling and buying books",
        "Country Finalist for analyzing the data and come up with AI solutions",
        "Cambodia representative of website making competition",
        "Programming an application and testing AI solution to help traffic jam"
    ]
}

let length = data.years.length;
let lines = length*4+1;

if (window.matchMedia('(max-width: 400px)').matches) {
    lines = (length+5) * 4 + 1
} else if (window.matchMedia('(max-width: 550px)').matches) {
    lines = (length+3) * 4 + 1
}

let lineNum = $('.linenumber');
let detail = $('.detail');

for(let i=0; i<lines; i++) {
    lineNum.append(`<p class="num">${i+1}</p>`);
}

for(let i=0; i<length; i++) {
    detail.append(
        `<div class="wrap">
            <p class="year">${data.years[i]}</p>
            <p class="title">${data.names[i]}</p>
            <p class="details">${data.descriptions[i]}</p>
        </div><br>`
    );
}

$('p.exper').animate({'opacity': 1}, 1500);

let detailsLabel = [$('.year'), $('.title'), $('.details')];
for(let i=0; i<detailsLabel.length; i++) {
    if(i % 2 == 0) {
        detailsLabel[i].transition({
            'transform': 'translateX(0px)'
        }, 1500);
    } else {
        detailsLabel[i].transition({
            'opacity': 1
        }, 1500);
    }
}
