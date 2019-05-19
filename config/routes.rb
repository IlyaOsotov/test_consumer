Rails.application.routes.draw do
  root 'pages#index'
  mount ActionCable.server => '/cable'
end
