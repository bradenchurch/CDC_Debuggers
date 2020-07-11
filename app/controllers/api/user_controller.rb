class Api::UserController < ApplicationController

  def index
    render json: User.all
  end

  def create
    item = User.new(user_params)
    if user.save
      render json: user
    else
      render json: { errors: user.errors }, status: :unprocessable_entity 
    end
  end

  def update
    user = User.find(params[:id])
    user.update(complete: !user.complete)
    render json: user
  end

  def destroy
    User.find(params[:id]).destroy
    render json: { message: 'User deleted' }
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :title, :email, :facility_type)
  end


end
