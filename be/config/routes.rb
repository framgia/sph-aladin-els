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
  get 'admin/quizzes', to: 'quizzes#admin_quizzes'

  post 'user/edit', to: 'users#edit'
  get 'users', to: 'users#index'

  post '/admin/quizzes/:id', to: 'words#add_word'

 

  # Defines the root path route ("/")
  # root "articles#index"
end
