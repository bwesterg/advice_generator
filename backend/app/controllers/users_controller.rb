class UsersController < ApplicationController
  def index
    @users = User.all

    render json: @users
  end

  def show
    @user = User.find(params[:id])

    render json: @user
  end

  def create
    @user = User.create(
      username: params[:username],
      password: params[:password]
    )

    redirect_to "http://localhost:3001"
  end

  def login 
    @user = User.find_by(
      username: params[:username],
      password: params[:password]
    )
    
    if @user
      redirect_to "http://localhost:3001/user.html?id=#{@user.id}"
    else
      redirect_to "http://localhost:3001/401.html"
    end
  end
end
