class Api::GuidelinesController < ApplicationController

  def index
    render json: Guideline.all
  end

  def create
    item = Guideline.new(item_params)
    if .save
      render json: guidelines
    else
      render json: { errors: item.errors }, status: :unprocessable_entity 
    end
  end

  def update
    item = Guideline.find(params[:id])
    item.update(complete: !guidelines.complete)
    render json: guidelines
  end

  def destroy
    Guideline.find(params[:id]).destroy
    render json: { message: 'Guideline deleted' }
  end

  private

  def guideline_params
    params.require(:guidelines).permit(:mask, :inspections, :date)
  end

end
