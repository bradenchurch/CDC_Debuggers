Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :facility_data
    resources :facility_inspection
    resources :guidelines

    # resources :facility_data do
    #   resources :facility_inspection, module: :facility_inspection
  end
end
