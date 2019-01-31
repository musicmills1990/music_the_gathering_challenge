Rails.application.routes.draw do
  get 'welcome/home'
  root "welcome#home"
  resources :users do
    resources :teams
  end
  resources :teams
  resources :songs

  resources :characters do
    resources :comments
  end
  get '/login' => "sessions#new"
  post '/login' => 'sessions#create'
  delete '/signout', to: 'sessions#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
