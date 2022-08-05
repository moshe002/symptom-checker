$(document).ready(function(){
    $('.submit-search').on('click', (e) => {
        e.preventDefault()
        if($('#searchBar').val()){ // if statement checks if searchBar has value, if it does it can run the code below, if it does not then it wont do anything
            let itemSearch = $('#searchBar').val()
            // console.log(itemSearch)
            switch(itemSearch){
                case 'headache': case 'Headache':
                var sideDiv = false;
                if (!sideDiv) {
                    $('.search-container').animate({right: "175px"})
                    sideDiv = true;
                    $('.submit-search').after('<button>Search Again</button').css({
                        'pointerEvents': 'none',
                        'opacity': '20%'
                    })
                    
                    $('button:last').addClass('submit-search').attr('title', 'Click me to search again').on('click', (e) => {
                        e.preventDefault()
                        location.reload()
                    })
                    $('body').append('<div style="//border: 1px solid black; display: flex; flex-direction: column; padding: 1rem 1rem; margin-top: 3rem; gap: 30px"></div>')
                    $('div:last').append('<div style="//border: 1px solid green; padding: .5rem .5rem"><h2 id="causes">Causes:</h2></div>').append('<div style="//border: 1px solid red; padding: .5rem .5rem;"><h2  id="treatment">Treatment:</h2></div>')                
                    $('<ul/>').appendTo('#causes').append('<li>Stress</li>').append('<li>Muscular Tension</li>').append('<li>Dental or Jaw Problems</li>').append('<li>Infections</li>').append('<li>Diet</li>').append('<li>Eye Problems</li>').append('<li>Hormonal Influences</li>').append('<li>Medications</li>')
                    .css({
                        'marginTop': '10px',
                        'fontSize': '16px',
                        'color': 'gray'
                    })  
                    $('<ul/>').appendTo('#treatment').append('<li>Hot/Cold compress to your Head or Neck</li>').append('<li>Medications (Ibuprofen, Advil, etc)</li>').append('<li>Massage</li>').append('<li>Small amounts of Caffeine</li>')
                    .css({
                        'marginTop': '10px',
                        'fontSize': '16px',
                        'color': 'gray'
                    })  
                    //HEADACHE
                }
                else {
                    $('.search-container').animate({right: "0px"});
                    sideDiv = false;     
                }
                break;
                case 'toothache': case 'Toothache':
                sideDiv = false;
                if (!sideDiv) {
                    $('.search-container').animate({right: "175px"})
                    sideDiv = true;
                    $('.submit-search').after('<button>Search Again</button').css({
                        'pointerEvents': 'none',
                        'opacity': '20%'
                    })
                    
                    $('button:last').addClass('submit-search').attr('title', 'Click me to search again').on('click', (e) => {
                        e.preventDefault()
                        location.reload()
                    })
                    $('body').append('<div style="//border: 1px solid black; display: flex; flex-direction: column; padding: 1rem 1rem; margin-top: 3rem; gap: 30px"></div>')
                    $('div:last').append('<div style="//border: 1px solid green; padding: .5rem .5rem"><h2 id="causes">Causes:</h2></div>').append('<div style="//border: 1px solid red; padding: .5rem .5rem;"><h2  id="treatment">Treatment:</h2></div>')                
                    $('<ul/>').appendTo('#causes').append('<li>Tooth decay</li>').append('<li>Abscessed tooth</li>').append('<li>Tooth fracture</li>').append('<li>Damaged filling</li>').append('<li>Infected gums</li>').append('<li>Eruption (teeth coming out of gums)</li>')
                    .css({
                        'marginTop': '10px',
                        'fontSize': '16px',
                        'color': 'gray'
                    })  
                    $('<ul/>').appendTo('#treatment').append('<li>Rinse with warm saltwater</li>').append('<li>Rinse with hydrogen peroxide</li>').append('<li>Cold compress</li>').append('<li>Pain medications</li>')
                    .css({
                        'marginTop': '10px',
                        'fontSize': '16px',
                        'color': 'gray'
                    })  
                    //TOOTHACHE
                }
                else {
                    $('.search-container').animate({right: "0px"});
                    sideDiv = false;     
                }
                break;
                case 'dizziness': case 'Dizziness':
                sideDiv = false;
                if (!sideDiv) {
                    $('.search-container').animate({right: "175px"})
                    sideDiv = true;
                    $('.submit-search').after('<button>Search Again</button').css({
                        'pointerEvents': 'none',
                        'opacity': '20%'
                    })
                        
                    $('button:last').addClass('submit-search').attr('title', 'Click me to search again').on('click', (e) => {
                        e.preventDefault()
                        location.reload()
                    })
                    $('body').append('<div style="//border: 1px solid black; display: flex; flex-direction: column; padding: 1rem 1rem; margin-top: 3rem; gap: 30px"></div>')
                    $('div:last').append('<div style="//border: 1px solid green; padding: .5rem .5rem"><h2 id="causes">Causes:</h2></div>').append('<div style="//border: 1px solid red; padding: .5rem .5rem;"><h2  id="treatment">Treatment:</h2></div>')                
                    $('<ul/>').appendTo('#causes').append('<li>Inner ear disturbance</li>').append('<li>Motion sickness</li>').append('<li>Medication effects</li>').append('<li>Poor circulation</li>').append('<li>Infection or Injury</li>')
                    .css({
                        'marginTop': '10px',
                        'fontSize': '16px',
                        'color': 'gray'
                    })  
                    $('<ul/>').appendTo('#treatment').append('<li>Sit or Lie down</li>').append('<li>Avoid driving any vehicles</li>').append('<li>Avoid using caffeine, alcohol, salt and tobacco</li>').append('<li>Avoid operating on heavy machinery</li>')
                    .css({
                        'marginTop': '10px',
                        'fontSize': '16px',
                        'color': 'gray'
                    })  
                    //DIZZINESS
                }
                else {
                    $('.search-container').animate({right: "0px"});
                    sideDiv = false;     
                }
                break;
                default: // DEFAULT CASE 
                    $('body').append('<div style="display: flex; flex-direction: column; width: auto; height: auto; padding: .5rem .5rem;"><p style="font-size: 16px">No available data, please wait for further updates.</p></div>')
                    $('.search-container').animate({right: "100px"})
                    $('.submit-search').after('<button>Search Again</button').css({
                        'pointerEvents': 'none',
                        'opacity': '20%'
                    })
                        
                    $('button:last').addClass('submit-search').attr('title', 'Click me to search again').on('click', (e) => {
                        e.preventDefault()
                        location.reload()
                    })
            } 
        }
    })
})

