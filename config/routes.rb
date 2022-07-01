Rails.application.routes.draw do
  resources :plants, only: [:index]
  # resources :plants, only: [:index, :show] do
  resources :plants, only: :show do
    #nested resource for reviews
    # resources :reviews, only: [:index, :show, :create, :update, :destroy]
    resources :reviews
  end

  # resources :users, only: :show
  # resources :reviews, only: [:show]
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
