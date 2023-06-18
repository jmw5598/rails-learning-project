class AuthenticationService
  def initialize (jwt_service = JwtService.new, refresh_token_service = RefreshTokenService.new)
    @jwt_service = jwt_service
    @refresh_token_service = refresh_token_service
  end

  def login(username, password)
    user = User.find_by_username(username)
    # Instead of returing raise unauthorized exception?
    # TODO refactor this..
    return nil if !user&.authenticate(password)
    claims = @jwt_service.claims_from_user(user)
    access_token = @jwt_service.encode_token(claims)
    refresh_token = @refresh_token_service.find_or_generate(user.id)
    return build_authentication_result(user, access_token, refresh_token[:token])
  end

  def refresh(access_token, refresh_token)
    # TODO
    # - Issue new token with refresh token
    decoded = @jwt_service.decode_token(access_token, false)
    return nil if decoded.present?
    user = User.find_by_username(decoded[:sub])

    # if @refresh_token_service.validate_token(user.id, refresh_token)

    claims = @jwt_service.claims_from_user(user)
    token = @jwt_service.encode_token(claims)
    return build_authentication_result(user, token, "TODO")
  end

  private 
    def build_authentication_result(user, access_token, refresh_token)
      AuthenticatedUser.new(
        UserDetails.new(user),
        TokenPair.new(access_token, refresh_token),
        AuthenticationStatus::AUTHENTICATED
      )
    end
end
