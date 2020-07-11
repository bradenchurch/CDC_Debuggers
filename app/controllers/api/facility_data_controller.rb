class Api::FacilityDataController < ApplicationController

  def index
    render json: FacilityData.all
  end

  def create
    facility_data = FacilityData.new(facility_data_params)
    if facility_data.save 
      render json: facility_data
    else 
      render json: { errors: facility_data.errors }, status: :unprocessable_entity 
    end
  end

  def update
    facility_data = FacilityData.find(params[:id])
    if facility_data.update(facility_data_params)
      render json: facility_data
    else 
      render json: { errors: facility_data.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    User.find(params[:id]).destroy
    render json: {message: 'Facility Data Deleted' }
  end

  private

  def facility_data_params
    params.require(:facility_data).permit(:patients, :covid_cases, :date, :user_id)
  end

end
