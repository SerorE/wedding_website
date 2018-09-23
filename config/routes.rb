Rails.application.routes.draw do

  get 'programme', to: 'pages#programme'

  get 'contact', to: 'pages#contact'

  get 'transports', to: 'pages#transports'

  get 'logements', to: 'pages#logements'

  get 'about', to: 'pages#about'


  get '/english', to: 'pages#home_en'

  get 'english/about', to: 'pages#about_en'
  get 'english/contact', to: 'pages#contact_en'
  get 'english/transportation', to: 'pages#transports_en'
  get 'english/accomodation', to: 'pages#logements_en'
  get 'english/schedule', to: 'pages#programme_en'




  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
