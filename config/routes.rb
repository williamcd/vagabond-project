Rails.application.routes.draw do
  namespace :api do
    resources :cities do
      resources :comments
    end
  end
end
