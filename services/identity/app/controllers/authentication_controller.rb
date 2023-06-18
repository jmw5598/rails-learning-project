class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request
  
  def initialize (authentication_service = AuthenticationService.new)
    puts "intialize auth controller"
    @authentication_service = authentication_service
  end

  # POST - Log in user
  def login
    authenticated_user = 
      @authentication_service.login(params[:username], params[:password])
    if authenticated_user.present?
      render json: authenticated_user, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  # POST - Refresh users access token from refresh token
  def refresh
    autenticated_user = 
      @authentication_service.refresh(params[:access_token], params[:refresh_token])
    if authenticated_user.present?
      render json: authenticated_user, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
end
