Rails.application.routes.draw do
  get 'performs/new'
  post 'performs/new', to: 'performs#new'
  get 'welcome/home'
  root "welcome#home"
  resources :users, except: [:edit, :update, :destroy]
  resources :teams, except: [:edit, :update, :destroy]
  resources :songs, except: [:edit, :update]

  resources :characters, only: [:index, :show] do
    resources :comments, only: [:index, :create, :new]
  end

  get '/login' => "sessions#new"
  post '/login' => 'sessions#create'
  delete '/signout', to: 'sessions#destroy'
  get '/auth/facebook/callback' => 'sessions#create_from_omniauth'
  get '/most_well_known', to: 'songs#most_well_known'



end
