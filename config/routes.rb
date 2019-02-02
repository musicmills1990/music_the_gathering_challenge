Rails.application.routes.draw do
  get 'performs/new'
  post 'performs/new', to: 'performs#new'
  get 'welcome/home'
  root "welcome#home"
  resources :users
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
