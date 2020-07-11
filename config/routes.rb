Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users

    resources :facility_data
    resources :facility_inspection
    resources :guidelines

    # resources :facility_data do
    #   resources :facility_inspection, module: :facility_inspection
  end
end
