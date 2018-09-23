Rails.application.routes.draw do

  get 'programme', to: 'pages#programme'

  get 'contact', to: 'pages#contact'

  get 'transports', to: 'pages#transports'

  get 'logements', to: 'pages#logements'

  get 'about', to: 'pages#about'

  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
