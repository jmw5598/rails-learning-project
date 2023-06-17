class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def login
    @user = User.find_by_username(params[:username])
    if @user&.authenticate(params[:password])
      # TODO 
      # - Issues refresh token with access token
      claims = jwt_claims_from_user(@user)
      token = jwt_encode(claims)
      render json: build_authentication_payload(token, "TODO"), status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def refresh
    # TODO
    # - Check refresh token is valid
    # - If refresh token is valid and token is valid but expired
    # - Issue new token with refresh token
    decoded = jwt_decode(params[:access_token])
    puts decoded[]
    token = jwt_decode(user_id: decoded["user_id"])
    render json: build_authentication_payload(token, "TODO"), status: :ok
  end

  private
    
    def build_authentication_payload(access_token, refresh_token)
      { access_token: access_token, refresh_token: refresh_token }
    end
end
