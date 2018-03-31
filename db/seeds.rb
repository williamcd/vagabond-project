City.destroy_all

atlanta = City.create!({
    name: "Atlanta",
    photo_url: "https://i.imgur.com/42zYDsw.jpg",
    description: "Atlanta is the capital of the U.S. state of Georgia. It played an important part in both the Civil War and the 1960s Civil Rights Movement. Atlanta History Center chronicles the city's past, and the Martin Luther King Jr. National Historic Site is dedicated to the African-American leader’s life and times. Downtown, Centennial Olympic Park, built for the 1996 Olympics, encompasses the massive Georgia Aquarium."
})

london = City.create!({
    name: "London",
    photo_url: "https://i.imgur.com/6X26EdW.jpg",
    description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."
})

san_fransisco = City.create!({
    name: "San Francisco",
    photo_url: "https://i.imgur.com/6YH983R.jpg",
    description: "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison."
})