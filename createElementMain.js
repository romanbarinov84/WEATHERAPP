

export function createMain(){
  // create elements for weather on today//
    const $weatherNow = document.createElement("div")
    $weatherNow.classList.add("weather-now")
    const $mainTitle = document.createElement("h2")
    $mainTitle.classList.add("main-title")
    const $mainTemp = document.createElement("div")
    $mainTemp.classList.add("main-temp")
    const $mainWindy = document.createElement("div")
    $mainWindy.classList.add("main-windy")
    const $humidity = document.createElement("div")
    $humidity.classList.add("humidity")
    const $weatherIcon = document.createElement("img");
    $weatherIcon.classList.add("weather-icon")

  $weatherNow.append($mainTitle,$mainTemp,$mainWindy,$humidity,$weatherIcon)
    
    document.body.append( $weatherNow)
   
  
 
    


   

  
}

