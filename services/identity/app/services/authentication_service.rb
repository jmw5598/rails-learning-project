class AuthenticationService
  def initialize (jwt_service = JwtService.new, refresh_token_service = RefreshTokenService.new)
    @jwt_service = jwt_service
    @refresh_token_service = refresh_token_service
  end

  def login(username, password)
    user = User.find_by_username(username)
    return nil unless user&.authenticate(password)
    claims = @jwt_service.claims_from_user(user)
    access_token = @jwt_service.encode_token(claims)
    refresh_token = @refresh_token_service.find_or_create(user.id)
    build_authentication_result(user, access_token, refresh_token.token)
  end

  def refresh(access_token, refresh_token)
    decoded = @jwt_service.decode_token(access_token, false)
    valid_refresh_token = @refresh_token_service.validate_token(decoded[:user_id], refresh_token)
    return nil unless valid_refresh_token.present?
    user = User.find_by_username(decoded[:sub])
    claims = @jwt_service.claims_from_user(user)
    token = @jwt_service.encode_token(claims)
    build_authentication_result(user, token, valid_refresh_token.token)
  end

  private 
    def build_authentication_result(user, access_token, refresh_token)
      AuthenticatedUser.new(
        UserDetails.new(user),
        TokenPair.new(access_token, refresh_token),
        AuthenticationStatus::AUTHORIZED
      )
    end
end
