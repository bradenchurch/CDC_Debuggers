class Api::FacilityInspectionController < ApplicationController
    def index
      render json: FacilityInspection.all
    end
  
    def create
      facilityinspection = FacilityInspection.new(item_params)
      if facilityinspection.save
        render json: facilityinspection
      else
        render json: { errors: facilityinspection.errors }, status: :unprocessable_entity 
      end
    end
  
    def update
      facilityinspection = FacilityInspection.find(params[:id])
      facilityinspection.update(complete: !facilityinspection.complete)
      render json: facilityinspection
    end
  
    def destroy
      FacilityInspection.find(params[:id]).destroy
      render json: { message: 'Facility Inspection deleted' }
    end
  
    private
  
    def facilityinspection_params
      params.require(:facilityinspection).permit(:reviewer, :passing_grade, :inspector_report)
    end
  
  end 


end
