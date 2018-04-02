Rails.application.routes.draw do
  namespace :api do
    resources :cities do
      resources :comments
    end
  end
  get '/api/cities/weather/:id', to: "weather#show"

end
