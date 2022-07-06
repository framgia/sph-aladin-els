Rails.application.routes.draw do
  get '/current_user', to: 'current_user#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get 'quizzes', to: 'quizzes#index'
 post 'user/edit', to: 'users#edit'
 post 'quiz/new', to: 'quizzes#create'
 get 'users', to: 'users#index'

  # Defines the root path route ("/")
  # root "articles#index"
end
