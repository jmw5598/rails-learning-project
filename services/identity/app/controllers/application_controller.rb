class ApplicationController < ActionController::API
  before_action :authenticate_request

  def initialize(jwt_service = JwtService.new)
    @jwt_service = jwt_service
  end

  private
    def authenticate_request
      header = request.headers["Authorization"]
      token = header.split.last if header
      begin
        @decoded = @jwt_service.decode_token(token)
        @current_user = User.find(decoded[:user_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    end
end
