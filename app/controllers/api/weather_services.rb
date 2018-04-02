module Services

    class OpenWeatherMapServices
        include HTTParty

        def self.get_weather(zipcode)
         @access_api_key = ENV['b73a645e61e2a142e551b9cc04ec4d40']            

         @response = HTTParty.get("api.openweathermap.org/data/2.5/weather?q={city.id}")
         @response
        end

    end

end